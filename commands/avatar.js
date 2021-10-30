module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp', 'profilepic'],
  permissions: [],
  cooldown: 5,
  aliases: ['icon', 'pfp', 'profilepic'],
  description: 'Return a user(s) avatar picture.',
  execute(message, args, cmd, client, Discord) {

    const user = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL({ dynamic: true }));
    message.channel.send(message.author, embed);
  }
}