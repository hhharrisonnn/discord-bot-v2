const translate = require('translate-google');

module.exports = {
  name: 'translate',
  permissions: [],
  cooldown: 5,
  aliases: [],
  description: 'Translate something into English.',
  execute(message, args, cmd, client, Discord, profileData) {
    if (args.includes('to')) {
      const language =  args.join(" ").split(" ").pop();
      var word = ` to *`;
      var pat = new RegExp('(\\b' + word + '\\b)(?!.*\\b\\1\\b)', 'is');
      text = args.join(' ').split(pat)[0]
      translate(text, {to : `${language}`}).then(res => {
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField(`   Original`,`${text}`, true)
        .addField(`${language.replace(/^./, language[0].toUpperCase())} translation`, `${res}`, true)
        .setAuthor(
          'Google Translate')
        .setThumbnail(`https://i.nuuls.com/uQMal.png`)
        .setTimestamp()
        .setFooter('Powered by Google-Translate', '')
        message.channel.send(message.author, embed);
      }).catch(err => {
        console.log(err);
      });
    }
    else {
      translate(args.join(' '), {to : ''}).then(res => {
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addField(` Original`,`${args.join(' ')}`, true)
        .addField(`English translation`, `${res}`, true)
        .setAuthor(
          'Google Translate')
        .setThumbnail(`https://i.nuuls.com/uQMal.png`)
        .setTimestamp()
        .setFooter('Powered by Google-Translate', '')
        message.channel.send(message.author, embed);
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
