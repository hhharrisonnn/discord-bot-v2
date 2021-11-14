strToTimedelta = require('string-to-timedelta');
const prefix = process.env.PREFIX;

module.exports = {
  name: 'remind',
  permissions: [],
  cooldown: 0,
  aliases: ['remindme'],
  description: 'Remind command.',
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args[0]) return message.reply(`type ${prefix}help to get help with this command.`);
    const member = message.mentions.members.first();
    if (member.id == message.client.user.id) return;
    var timeRegex = /(?:(?:([0-9]+)(?:d| ?days?)(?:, ?| )?)|(?:([0-9]+)(?:h| ?hours?| ?hrs?)(?:, ?| )?)|(?:([0-9]+)(?:m| ?minutes?| ?hrs?)(?:, ?| )?)|(?:([0-9]+)(?:s| ?seconds?)(?:,(?: ?and)? ?| )?))/gi;
    
    if (!message.content.startsWith(`${prefix}remindme`) && !member)
      return message.reply(`type ${prefix}help to get help with this command.`);

    if (message.content.startsWith(`${prefix}remindme`)) {
      var time = args.join(' ').match(timeRegex).join(' ');
      var reminder = args.slice(1).join(' ').replace(timeRegex, '');
      let time2 = require('pretty-ms')(strToTimedelta.parse(time));

      if (!reminder) return message.reply('tell me what you want to be remind you of.');

      message.reply(`I will remind you in ${time2}`);

      const reminderdm = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**REMINDER**')
        .setDescription(`**Reminder from yourself**: ${reminder} *(${time2} ago)*`);

      setTimeout(async function () {
        try {
          await message.channel.send(message.author, reminderdm);
        } catch (err) {}
      }, strToTimedelta.parse(time));
      return;
    }

    if (member && !args.join(' ').match(timeRegex)) {
      const remindMessage = args.slice(1).join(' ');
      const reminderdm = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('**REMINDER**')
      .setDescription(`**Reminder from ${message.author}**: ${remindMessage}`)

      if (!remindMessage) return message.reply('tell me what you want me remind someone of.');

      const filter = (m) => m.author.id === member.user.id;
      message.reply(`I will remind ${member} when they next type in chat.`);
      message.channel.awaitMessages(filter, { max: 1 }).then((collected) => {
        message.channel.send(member, reminderdm);
      })
      return;
    }

    if (args[0] == `<@!${member.id}>` && args.join(' ').match(timeRegex).join(' ')) {
      var time = args.join(' ').match(timeRegex).join(' ');
      var reminder = args.slice(1).join(' ').replace(timeRegex, '');
      let time2 = require('pretty-ms')(strToTimedelta.parse(time));

      message.reply(`I will remind ${member} in ${time2}`);

      const reminderdm = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**REMINDER**')
        .setDescription(`**Reminder from ${message.author}**: ${reminder} *(${time2} ago)* `);

      setTimeout(async function () {
        try {
          await message.channel.send(member, reminderdm);
        } catch (err) {}
      }, strToTimedelta.parse(time));
      return;
    }
  }
}