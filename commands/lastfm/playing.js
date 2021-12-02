const Discord = require('discord.js');
const fetch = require('node-fetch');

function playing(user, api_key, getInfo, getRecentTracks, message) {
  const username = getInfo.name;
  const userURL = getInfo.url;

  const songArtist = getRecentTracks.track[0].artist['#text'];
  const songName = getRecentTracks.track[0].name;
  const songURL = getRecentTracks.track[0].url;
  const songCover = JSON.parse(JSON.stringify(getRecentTracks.track[0].image[2]))['#text'];
  const songArtistURL = songURL.replace(/_.*/, "");

  fetch(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&user=${user}&api_key=${api_key}&artist=${songArtist}&track=${songName}&format=json`)
  .then(resp => resp.json())
  .then((data) => {
    const songPlaycount = data.track.playcount;
    const songAlbum = data.track.album.title;
    const albumURL = data.track.album.url;
    const userPlaycount = data.track.userplaycount;
    
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Last.fm', 'https://images-ext-1.discordapp.net/external/LpyXpQXQ0yReqOQUyalm1-BpXTvW0LJbXtl57ShcRZg/https/i.imgur.com/pVu9vTr.png')
    .setTitle(`${username}`)
    .setURL(`${userURL}`)
    .setThumbnail(songCover)
    .addField('Track', `[${songName}](${songURL})`, true)
    .addField('Artist', `[${songArtist}](${songArtistURL})`, true)
    .addField('Album', `[${songAlbum}](${albumURL})`, true)
    .addField('Playcount', userPlaycount, true)
    .addField('Total scrobbles', songPlaycount, true)
    .setFooter('Powered by Last.fm')
    .setTimestamp()
    return message.channel.send(message.author, embed);
  });
}

module.exports = { playing }