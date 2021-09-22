module.exports = {
  name: 'balance',
  aliases: ['bal', 'b'],
  permissions: [],
  cooldown: 0,
  description: 'Check balance.',
  async execute(message, args, cmd, client, Discord, mentionData, profileData) {
    if (message.mentions.members.first()) { 
  const newEmbed = new Discord.MessageEmbed()
  .setColor('#304281')
  .setTitle(':moneybag:')
  .addFields(
    {name: 'Balance:', value: `${mentionData.coins}`},
    {name: 'Bank:', value: `${mentionData.bank}`},
  ) 

  message.channel.send(newEmbed)
  }
   else { 
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
};
