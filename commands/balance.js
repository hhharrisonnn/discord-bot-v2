module.exports = {
  name: 'balance',
  aliases: ['bal', 'b'],
  permissions: [],
  cooldown: 0,
  description: 'Check balance.',
  execute(message, args, cmd, client, Discord, profileData) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`:moneybag: ${message.author.username}'s balance`)
    .addFields(
      {name: 'Balance:', value: `${profileData.coins}`},
      {name: 'Bank:', value: `${profileData.bank}`},
    ) 

    message.channel.send(newEmbed).then(msg => {
      let interval = setInterval(() => {
        let newColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        let embed2 = new Discord.MessageEmbed()
        .setColor(newColor)
        .setTitle(`:moneybag: ${message.author.username}'s balance`)
        .addFields(
          {name: 'Balance:', value: `${profileData.coins}`},
          {name: 'Bank:', value: `${profileData.bank}`},
        )
        msg.edit(embed2);
      }, 5000);

      setTimeout(() => {
        clearInterval(interval);
      }, 60000);
    });
  }
}