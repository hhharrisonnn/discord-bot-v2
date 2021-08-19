module.exports = {
  name: 'balance',
  aliases: ['bal', 'b'],
  permissions: [],
  cooldown: 0,
  description: 'Check balance.',
  execute(message, args, cmd, client, Discord, profileData) {
    
  const newEmbed = new Discord.MessageEmbed()
  .setColor('#304281')
  .setTitle(':moneybag:')
  .addFields(
    {name: 'Balance:', value: `${profileData.coins}`},
    {name: 'Bank:', value: `${profileData.bank}`},
  ) 

  message.channel.send(newEmbed)
  }
}