module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp', 'profilepic'],
  permissions: [],
  cooldown: 5,
  description: 'Return a user(s) avatar picture.',
  execute(message, args, cmd, client, Discord) {

    const user = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${user.tag}'s avatar`, user.displayAvatarURL({ dynamic: true }))
    .setImage(user.displayAvatarURL({ dynamic: true }));
    message.channel.send(message.author, embed);
  }
}