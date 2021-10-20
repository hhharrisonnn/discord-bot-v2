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

    if (msg.type == 'GUILD_MEMBER_JOIN') {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`First Message in #${message.channel.name}`)
          .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
          .setDescription('*click link above to go to original message*')
          .addField('User:', msg.author, true)
          .addField('Joined at:', msg.createdAt.toLocaleDateString(), true)
          .setURL(msg.url)
      );
    }
    if (msg.content) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`First Message in #${message.channel.name}`)
          .setURL(msg.url)
          .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
          .setDescription('*click link above to go to original message*')
          .addField('Author:', msg.author, true)
          .addField('Message:', msg.content, true)
          .addField('Created At:', msg.createdAt.toLocaleDateString(), true)
      );
    } else {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`First Message in #${message.channel.name}`)
          .setURL(msg.url)
          .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
          .setDescription('*click link above to go to original message*')
          .addField('Author:', msg.author, true)
          .addField('Embed Title:', msg.embeds[0].title, true)
          .addField('Created At:', msg.createdAt.toLocaleDateString(), true)
      );
    }
  },
};
