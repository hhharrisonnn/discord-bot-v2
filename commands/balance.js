module.exports = {
  name: 'balance',
  aliases: ['bal', 'b'],
  permissions: [],
  cooldown: 5,
  description: 'Check balance.',
  execute(message, args, cmd, client, Discord, profileData) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`:moneybag: ${message.author.username}'s balance`)
    .addFields(
      {name: 'Balance:', value: `${profileData.coins}`},
      {name: 'Bank:', value: `${profileData.bank}`},
    )
    message.channel.send(message.author, newEmbed);
  }
}