module.exports = {
  name: 'balance',
  aliases: ['bal', 'b'],
  permissions: [],
  cooldown: 0,
  description: 'Check balance.',
  execute(message, args, cmd, client, Discord, profileData) {
    const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    const newEmbed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(`:moneybag: ${message.author.username}'s balance`)
    .addFields(
      {name: 'Balance:', value: `${profileData.coins}`},
      {name: 'Bank:', value: `${profileData.bank}`},
    ) 

    message.channel.send(newEmbed);
  }
}