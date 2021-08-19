const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  permissions: [],
  cooldown: 60,
  aliases: [],
  description: 'Ask a question.',
  async execute(message, args, cmd, client, Discord, profileData) {
    if(!args[0]) return message.channel.send('Please as a full question.');
    const replies = ['Yes', 'No', 'Definitely', 'Ask again later'];

    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');

    if(message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed()
      .setAuthor('🎱 The 8 Ball says...')
      .setColor('#304281').addField('Question:', question)
      .addField('Answer:', replies[result]);
      await message.channel.send(embed);
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`);
    }
  },
};