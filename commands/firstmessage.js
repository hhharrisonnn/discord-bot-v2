module.exports = {
  name: 'firstmessage',
  permissions: [],
  cooldown: 30,
  aliases: ['firstmsg', 'fl'],
  description: 'Sends the first message of a channel.',
  async execute(message, args, cmd, client, Discord, profileData) {
    
    const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });

    const msg = fetchMessages.first();

    if (msg.content) {
      message.channel.send(
        new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`First Messsage in #${message.channel.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription('*click link above to go to original message*')
        .addField('Author:', msg.author, true)
        .addField('Message:', msg.content, true)
        .addField('Created At:', msg.createdAt.toLocaleDateString(), true)
      );
    }
    else {
      message.channel.send(
        new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`First Messsage in #${message.channel.name}`)
        .setURL(msg.url)
        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
        .setDescription('*click link above to go to original message*')
        .addField('Author:', msg.author, true)
        .addField('Message:', '*not available*', true)
        .addField('Created At:', msg.createdAt.toLocaleDateString(), true)
      );
    }   
  }
}