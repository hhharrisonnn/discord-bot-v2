const fetch = require('node-fetch');
const prefix = process.env.PREFIX;

module.exports = {
  name: 'currency',
  permissions: [],
  cooldown: 300,
  alisases: ['convert', 'exchangerate', 'er'],
  description: 'Check the conversion rate between two currencies.',
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!args[0])
      return message.reply(
        `make sure to use the correct format: ${prefix}currency, convert, exchangerate, er [amount] [currency1] to/=> [currency2]. For example: ${prefix}currency 1 usd to gbp.`
      );
    const currency1 = args.slice(1, 2).toString().toUpperCase('');
    var amount = args[0];
    multiplier = args[0].substr(-1).toLowerCase();

    if (multiplier.includes('k') || 'm' || 'b') {
      if (multiplier == 'k') {
        amount = parseFloat(args[0]) * 1000;
      } else if (multiplier == 'm') {
        amount = parseFloat(args[0]) * 1000000;
      } else if (multiplier == 'b') {
        amount = parseFloat(args[0]) * 1000000000;
      } else if ((multiplier = /\d+/)) {
        let appl = args[0].replace(/,/g, '');
        amount = parseFloat(appl) * 1;
      }
    }

    var currency2 = args.slice(2).toString().toUpperCase('');
    try {
      if (args.includes('to') || args.includes('=>')) {
        currency2 = args.slice(3).toString().toUpperCase('');
      }
      const host = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_KEY}/pair/${currency1}/${currency2}/${amount}`;
      fetch(`${host}`)
        .then((resp) => resp.json())
        .then((data) => {
          const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(
              `${amount} ${currency1} = ${data.conversion_result} ${currency2}`
            )
            .setAuthor(
              'ExchangeRate',
              'https://i.nuuls.com/d6PLz.png',
              'https://www.exchangerate-api.com/'
            );

          message.channel.send(embed).then((msg) => {
            let interval = setInterval(() => {
              let newColor =
                '#' +
                (0x1000000 + Math.random() * 0xffffff)
                  .toString(16)
                  .substr(1, 6);
              let embed2 = new Discord.MessageEmbed()
                .setColor(newColor)
                .setTitle(
                  `${amount} ${currency1} = ${data.conversion_result} ${currency2}`
                )
                .setAuthor(
                  'ExchangeRate',
                  'https://i.nuuls.com/d6PLz.png',
                  'https://www.exchangerate-api.com/'
                );
              msg.edit(embed2);
            }, 5000);

            setTimeout(() => {
              clearInterval(interval);
            }, 60000);
          });
        });
    } catch (err) {
      console.log(err);
    }
  },
};
