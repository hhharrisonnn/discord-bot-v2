const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  permissions: [],
  cooldown: 60,
  aliases: [],
  description: 'Ask a question.',
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args[0]) return message.reply('please ask a full question.');
    const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    const replies = ['Yes', 'No', 'Definitely', 'Ask again later'];

    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');
    
    const embed = new MessageEmbed()
    .setAuthor('🎱 The 8 Ball says...')
    .setColor(color)
    .addField('Question:', question)
    .addField('Answer:', replies[result]);
    await message.channel.send(embed);
  },
};