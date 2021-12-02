const Discord = require('discord.js');
const moment = require('moment');

function profile(getInfo, getRecentTracks, getTopArtist, getTopAlbums, getTopTracks, message) {
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
  var listening = 'Listening';
  var timeSince = '';
  if (!nowplaying) {
    listening = 'Was listening';
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
  return message.channel.send(message.author, embed);
}

module.exports = { profile }