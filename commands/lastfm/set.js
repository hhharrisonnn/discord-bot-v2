const Discord = require('discord.js');
const profileModel = require('../../models/profileSchema');

function alreadySet(getInfo, message) {
  const username = getInfo.name;
  const userURL = getInfo.url;

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setAuthor('Last.fm', 'https://images-ext-1.discordapp.net/external/LpyXpQXQ0yReqOQUyalm1-BpXTvW0LJbXtl57ShcRZg/https/i.imgur.com/pVu9vTr.png')
  .setTitle(`${username}`)
  .setURL(`${userURL}`)
  .setDescription('Your Last.fm username is already in the database.')
  .setFooter('Powered by Last.fm')
  .setTimestamp()
  return message.channel.send(message.author, embed);
}

async function setName(getInfo, message) {
  const username = getInfo.name;
  const userURL = getInfo.url;

  const update = { lastfmUsername: `${username}` }
  await profileModel.findOneAndUpdate(
    {
      userID: message.author.id
    },
    update, {
      lastfmUsername: true,
    },
  );

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setAuthor('Last.fm', 'https://images-ext-1.discordapp.net/external/LpyXpQXQ0yReqOQUyalm1-BpXTvW0LJbXtl57ShcRZg/https/i.imgur.com/pVu9vTr.png')
  .setTitle(`${username}`)
  .setURL(`${userURL}`)
  .setDescription(`Your Last.fm username has been successfully set to **${username}**.`)
  .setFooter('Powered by Last.fm')
  .setTimestamp()
  return message.channel.send(message.author, embed);
}

module.exports = { alreadySet, setName }