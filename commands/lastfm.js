const fetch = require('node-fetch');
const moment = require('moment');
const api_key = process.env.LASTFM_API_KEY;

module.exports = {
  name: 'lastfm',
  permissions: [],
  cooldown: 5,
  aliases: ['lf', 'lfm'],
  description: 'Shows a user\'s Last.fm profile',
  execute(message, args, cmd, client, Discord, profileData) {
    if (args[0] != 'profile') return;

    let user = args[1];
    if (!user) return;

    const urls = [
      `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${user}&api_key=${api_key}&format=json`,
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${api_key}&format=json`,
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${user}&api_key=${api_key}&format=json`,
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${user}&api_key=${api_key}&format=json`,
      `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&api_key=${api_key}&format=json`,
    ];

    Promise.all(urls.map(url => 
        fetch(url)
        .then(parseJSON)
        .catch(error => console.log(error))
      ))
      .then(data => {
        const getInfo = data[0].user;
        const getRecentTracks = data[1].recenttracks.track[0];
        const topArtist = data[2].topartists.artist[0].name;
        const getTopAlbums = data[3].topalbums.album[0];
        const getTopTracks = data[4].toptracks.track[0];
        
        var country = getInfo.country;
        if (country == 'None') country = 'No country set'
        const playcount = getInfo.playcount;
        const image = JSON.parse(JSON.stringify(getInfo.image[2]))['#text'];
        const registered = moment.unix(getInfo.registered.unixtime).format('DD MMM YYYY');
        const username = getInfo.name;
        const userURL = getInfo.url;

        const songArtist = getRecentTracks.artist['#text'];
        const songName = getRecentTracks.name;
        const songURL = getRecentTracks.url;
        const nowplaying = getRecentTracks['@attr'];
        var listening = 'Listening' ;
        var timeSince = ''
        if (!nowplaying) {
          listening = 'Was listening'
          timeSince = `(${moment(getRecentTracks.date['#text'], 'DD MMM YYYY HH:mm').fromNow()})`;
        }

        const topAlbum = getTopAlbums.name;
        const topAlbumArtist = getTopAlbums.artist.name;

        const topTrack = getTopTracks.name;
        const topTrackArtist = getTopTracks.artist.name;
    
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Last.fm', 'https://images-ext-1.discordapp.net/external/LpyXpQXQ0yReqOQUyalm1-BpXTvW0LJbXtl57ShcRZg/https/i.imgur.com/pVu9vTr.png')
        .setTitle(`${username}`)
        .setURL(`${userURL}`)
        .setDescription(`${listening} to: [**${songName}**](${songURL}) by **${songArtist}** ${timeSince}`)
        .setThumbnail(image)
        .addField('Country', country, true)
        .addField('Scrobbles', playcount, true)
        .addField('Registered', registered, true)
        .addField('Top Artist', topArtist, true)
        .addField('Top Album', `${topAlbum} by ${topAlbumArtist}`, true)
        .addField('Top Track', `${topTrack} by ${topTrackArtist}`, true)
        .setFooter('Powered by Last.fm')
        .setTimestamp()
        message.channel.send(message.author, embed);
      }).catch((error) => console.log(error));    

      function parseJSON(response) {
        return response.json();
      }
  }
}