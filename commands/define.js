const fetch = require('node-fetch');
const { execute } = require('./balance');

module.exports = {
  name: 'define',
  permissions: [],
  aliases: ['dictionary', 'dic'],
  cooldown: 5,
  description: 'Get the definition of a word.',
  async execute(message, args, cmd, client, Discord, profileData, mentionData) {
    const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    if (!args[0]) return message.reply('enter a word you want to define.');

    try{
      term = args[0];
      let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);
      res = await res.json();
      const embed = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(`**${res[0].meanings[0].definitions[0].definition}**`, '📜')
      .setAuthor(`${term}:`, 'https://i.nuuls.com/AJOBC.png')
      .setThumbnail(`https://i.nuuls.com/hU80f.png`)
      .setTimestamp()
      .setFooter('Powered by Free Dictionary API')
      message.channel.send(embed);
    } catch(err) {
      message.reply('definition not found/invalid.');
    }
  }
}