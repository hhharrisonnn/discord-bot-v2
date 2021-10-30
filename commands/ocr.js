module.exports = {
  name: 'ocr',
  permissions: [],
  cooldown: 10,
  aliases: ['ocrtranslate', 'scan'],
  description: 'Get the text output of an image.',
  execute(message, args, cmd, client, Discord, profileData) {
    let url = args[0];

    if (message.attachments.first()) {
      const attachment = message.attachments.first();
      url = attachment ? attachment.url : null;
    }
    if (
      !url.includes('http' || ('https' && 'png') || 'jpg' || 'jpeg' || 'pdf')
    ) {
      message.reply('Please provide a proper image');
      return;
    }
    if (url.includes('mp4')) {
      message.reply('Please provide a proper image');
      return;
    }

    const fetch = require('node-fetch');
    fetch(
      `https://api.ocr.space/parse/imageurl?apikey=${process.env.OCR_KEY}&url=${url}`
    )
    .then((resp) => resp.json())
    .then((data) => {
      const embed = new Discord.MessageEmbed()
      .setTitle('OCR')
      .addField(
        'Output',
        '```' + `${data.ParsedResults[0].ParsedText}` + '```'
      )
      .setColor('RANDOM');
      message.channel.send(embed);
    });
  },
};