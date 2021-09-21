const translate = require('translate-google');

module.exports = {
  name: 'translate',
  permissions: [],
  cooldown: 0,
  aliases: [],
  description: 'Translate something into English.',
  execute(message, args, cmd, client, Discord, profileData) {
    translate(args.join(" "), {to : 'en'}).then(res => {
      message.channel.send(`**English translation**: ${res}`);
    }).catch(err => {
      console.log(err);
    });
  }
}