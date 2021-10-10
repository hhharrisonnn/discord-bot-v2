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

    message.channel.send(embed).then(msg => {
      let interval = setInterval(() => {
        let newColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        let embed2 = new Discord.MessageEmbed()
        .setColor(newColor)
        .setAuthor(`${user.username}'s Avatar`)
        .setImage(user.displayAvatarURL({ dynamic: true }))
        msg.edit(embed2);
      }, 5000);

      setTimeout(() => {
        clearInterval(interval);
      }, 60000);
    });
  }
}