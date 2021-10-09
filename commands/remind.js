const ms = require('ms');

module.exports = {
  name: 'remind',
  permissions: [],
  cooldown: 0,
  aliases: [],
  description: 'Remind command.',
  async execute(message, args, cmd, client, Discord, profileData) {
    const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    let time = args[0];
    let user = message.author;
    let reminder = args.splice(1).join(' ');

    const notime = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`**Please specify the time**`)

    const wrongtime = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`**Sorry I only do d, m, h, or s.**`)

    const reminderembed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`**Please tell me what you want to be reminded of**`)

    if (!args[0]) return message.channel.send(notime);
    if (
      !args[0].endsWith("d") &&   
      !args[0].endsWith("m") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("s")
    )
    return message.channel.send(wrongtime);

    if (!reminder) return message.channel.send(reminderembed);

    const remindertime = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`\**Your reminder will go off in ${time}**`)

    message.channel.send(remindertime);

    const reminderdm = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('**REMINDER**')
    .setDescription(`**It has been ${time} here is your reminder:** ${reminder}`)

    setTimeout(async function () {
      try{
        await user.send(reminderdm)
      } catch(err) {
        console.log(err);
      }            
    }, ms(time));
  }
}