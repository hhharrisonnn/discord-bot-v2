const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  permissions: [],
  cooldown: 5,
  aliases: [],
  description: 'Ask a question.',
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args[0]) return message.reply('please ask a full question.');
    
    const replies = ['Yes', 'No', 'Maybe', 'Definitely'];

    const result = Math.floor(Math.random() * replies.length);
    const question = args.join(' ');
    
    const embed = new MessageEmbed()
    .setAuthor('🎱 The 8 Ball says...')
    .setColor('RANDOM')
    .addField('Question:', question)
    .addField('Answer:', `...`);
    await message.channel.send(message.author, embed).then(msg => {
      let interval = setInterval(() => {
        let newColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        let embed2 = new MessageEmbed()
        .setAuthor('🎱 The 8 Ball says...')
        .setColor(newColor)
        .addField('Question:', question)
        .addField('Answer:', '...');
        msg.edit(embed2);
      }, 300);

      setTimeout(() => {
        clearInterval(interval);
      }, 1500);

      setTimeout(async function(){ 
        if(replies[result] == 'Yes' || 'Definitely') {
         newColor = '#00FF00'
        }
        if(replies[result] == 'No') {
          newColor = '#FF0000'
         }
        if(replies[result] == 'Maybe') {
          newColor = '#FFFF00'
         }

        let embed2 = new MessageEmbed()
        .setAuthor('🎱 The 8 Ball says...')
        .setColor(newColor)
        .addField('Question:', question)
        .addField('Answer:', replies[result]);
        msg.edit(embed2);
      }, 2000);
    });
  }
}