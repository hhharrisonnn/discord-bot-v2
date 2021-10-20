const { image2braille, Braille } = require('braille-art');
const { createWriteStream } = require('fs');
module.exports = {
  name: 'ascii',
  permissions: [],
  cooldown: 0,
  aliases: [],
  description: 'text output of an image',
  async execute(message, args, cmd, client, Discord, profileData) {
    const hasEmoteRegex = /<a?:.+:\d+>/gm;
    const emoteRegex = /<:.+:(\d+)>/gm;
    const animatedEmoteRegex = /<a:.+:(\d+)>/gm;
    const yo = args.find((m) => m.match(hasEmoteRegex));
    const emoji = emoteRegex.exec(yo);
    let url;

    if (args.includes(`.png`) || `.jpeg`) {
      url = args[0];
    }
    if (emoji) {
      url = 'https://cdn.discordapp.com/emojis/' + emoji[1] + '.png?v=1';
    } else if ((yo1 = animatedEmoteRegex.exec(message))) {
      url = 'https://cdn.discordapp.com/emojis/' + yo1[1] + '.gif?v=1';
    }
    if (message.attachments.first()) {
      const attachment = message.attachments.first();
      url = attachment ? attachment.url : null;
    }

    const defaultFill = 0.5,
      defaultWidth = 70,
      defaultHeight = 70;

    const modifiedFill = args.join(' ').split(/ -f (.+)/)[1];

    let settings;

    if (!modifiedFill) {
      settings = {
        white_cutoff: defaultFill,
        width: defaultWidth,
        height: defaultHeight,
        whitespace: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 1],
        ],
      };
    } else {
      settings = {
        white_cutoff: modifiedFill,
        width: defaultWidth,
        height: defaultHeight,
        whitespace: [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 1],
        ],
      };
    }

    image2braille(url, settings).then(function (asciified) {
      const embed = new Discord.MessageEmbed().setDescription(
        '```' +
          `${asciified.join('\n').trimRight().replace(/,/g, '')}\n` +'```);
      message.channel.send(embed).catch(function (err) {
        message.channel.send(err);
      });
    });
  },
};
