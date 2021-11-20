const fetch = require('node-fetch');
const moment = require('moment');
const api_key = process.env.LASTFM_API_KEY;

module.exports = {
  name: 'lastfm',
  permissions: [],
  cooldown: 5,
  aliases: ['lf', 'lfm'],
  description: 'Provides information from the Last.fm API.',
  execute(message, args, cmd, client, Discord, profileData) {
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
        const getRecentTracks = data[1].recenttracks;
        const getTopArtist = data[2].topartists;
        const getTopAlbums = data[3].topalbums;
        const getTopTracks = data[4].toptracks;

        if (args[0] == 'profile') {
          var country = getInfo.country;
          if (country == 'None') country = 'No country set';
          const playcount = getInfo.playcount;
          const image = JSON.parse(JSON.stringify(getInfo.image[2]))['#text'];
          const registered = moment.unix(getInfo.registered.unixtime).format('DD MMM YYYY');
          const username = getInfo.name;
          const userURL = getInfo.url;

          const songArtist = getRecentTracks.track[0].artist['#text'];
          const songName = getRecentTracks.track[0].name;
          const songURL = getRecentTracks.track[0].url;
          const nowplaying = getRecentTracks.track[0]['@attr'];
          var listening = 'Listening' ;
          var timeSince = ''
          if (!nowplaying) {
            listening = 'Was listening'
            timeSince = `(${moment(getRecentTracks.track[0].date['#text'], 'DD MMM YYYY HH:mm').fromNow()})`;
          }

          const topArtist = getTopArtist.artist[0].name;

          const topAlbum = getTopAlbums.album[0].name;
          const topAlbumArtist = getTopAlbums.album[0].artist.name;

          const topTrack = getTopTracks.track[0].name;
          const topTrackArtist = getTopTracks.track[0].artist.name;
      
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
        }
      }).catch((error) => console.log(error));    

      function parseJSON(response) {
        return response.json();
      }
  }
}