const Discord = require('discord.js');

module.exports = {
  name: 'firstmessage',
  permissions: [],
  cooldown: 0,
  aliases: ['firstmsg'],
  description: 'Sends the first message of a channel.',
  async execute(message, args, cmd, client, Discord, profileData) {
    const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    
    const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });

    const msg = fetchMessages.first();

    
    message.channel.send(
      new Discord.MessageEmbed()
      .setColor(color)
      .setTitle(`First Messsage in #${message.channel.name}`)
      .setURL(msg.url)
      .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
      .setDescription('Content: ' + msg.content)
      .addField('Author:', msg.author, true)
      .addField('Message ID:', msg.id, true)
      .addField('Created At:', message.createdAt.toLocaleDateString(), true)
    );
  }
}