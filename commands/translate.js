const translate = require('translate-google');

module.exports = {
  name: 'translate',
  permissions: [],
  cooldown: 5,
  aliases: [],
  description: 'Translate something into English.',
  execute(message, args, cmd, client, Discord, profileData) {
    if (args.includes('to')) {
      const language = args.join(' ').split(' ').pop();
      const text = args.join(' ').replace(/ to .*/, '');
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
        
        message.channel.send(embed).then(msg => {
          let interval = setInterval(() => {
            let newColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
            let embed2 = new Discord.MessageEmbed()
            .setColor(newColor)
            .addField(`   Original`,`${text}`, true)
            .addField(`${language.replace(/^./, language[0].toUpperCase())} translation`, `${res}`, true)
            .setAuthor(
              'Google Translate')
            .setThumbnail(`https://i.nuuls.com/uQMal.png`)
            .setTimestamp()
            .setFooter('Powered by Google-Translate', '')
            msg.edit(embed2);
          }, 5000);
    
          setTimeout(() => {
            clearInterval(interval);
          }, 60000);
        });
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
        
        message.channel.send(embed).then(msg => {
          let interval = setInterval(() => {
            let newColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
            let embed2 = new Discord.MessageEmbed()
            .setColor(newColor)
            .addField(` Original`,`${args.join(' ')}`, true)
            .addField(`English translation`, `${res}`, true)
            .setAuthor(
              'Google Translate')
            .setThumbnail(`https://i.nuuls.com/uQMal.png`)
            .setTimestamp()
            .setFooter('Powered by Google-Translate', '')
            msg.edit(embed2);
          }, 5000);
    
          setTimeout(() => {
            clearInterval(interval);
          }, 60000);
        });
      }).catch(err => {
        console.log(err);
      });
    }
  }
}