const Discord = require('discord.js');

module.exports = {
  name: 'emojify',
  permissions: [],
  cooldown: 0,
  aliases: [''],
  description: 'Emojify a message',
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args.length)
      return message.reply('Please enter a message to emojify.');
    const specialCodes = {
      0: ':zero:',
      1: ':one:',
      2: ':two:',
      3: ':three:',
      4: ':four:',
      5: ':five:',
      6: ':six:',
      7: ':seven:',
      8: ':eight:',
      9: ':nine:',
      '#': ':hash:',
      '*': ':asterisk:',
      '?': ':grey_question:',
      '!': ':grey_exclamation:',
      ' ': '   ',
    };

    const text = args
      .join(' ')
      .toLowerCase()
      .split('')
      .map((letter) => {
        if (/[a-z]/g.test(letter)) {
          return `:regional_indicator_${letter}:`;
        } else if (specialCodes[letter]) {
          return `${specialCodes[letter]}`;
        }
        return letter;
      })
      .join('');

    message.channel.send(text);
  },
};
