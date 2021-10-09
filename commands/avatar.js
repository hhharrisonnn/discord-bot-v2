module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp', 'profilepic'],
  permissions: [],
  cooldown: 0,
  aliases: ['icon', 'pfp', 'profilepic'],
  description: 'Return a user(s) avatar picture.',
  execute(message, args, cmd, client, Discord) {
    const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    const user = message.mentions.users.first() || message.author;

    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setAuthor(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL({ dynamic: true }));
    message.channel.send(embed);
  }
}