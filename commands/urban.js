const fetch = require('node-fetch');

module.exports = {
  name: 'urban',
  permissions: [],
  aliases: ['urbandictionary', 'ud'],
  cooldown: 5,
  description: 'Get the Urban definition of a word.',
  async execute(message, args, cmd, client, Discord, profileData) {
    term = args[0];

    fetch(`https://api.urbandictionary.com/v0/define?term=${term}`)
    .then(res => res.json())
    .then(data => {
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setThumbnail('https://i.imgur.com/8l0d07Q.png')
      .setAuthor(`${term}:`, 'https://i.nuuls.com/AJOBC.png')
      .setDescription(`***${data.list[0].definition.replace(/([.*\[\]\/])/g, '') }***`)
      .setTimestamp()
      .setFooter('Powered by Urban Dictionary')
      message.channel.send(embed);
    }).catch(() => {
      message.reply('definition not found/invalid.');
    })
  }
}