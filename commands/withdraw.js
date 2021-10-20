const { MessageReaction } = require('discord.js');
const profileModel = require('../models/profileSchema');

module.exports = {
  name: 'withdraw',
  aliases: ['with', 'wd'],
  permissions: [],
  cooldown: 0,
  description: 'Withdraw coins from your bank.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let amount = args[0];
    if (!args[0])
      return message.reply('enter the amount of coins you want to withdraw.');
    if (amount.toLowerCase() == 'all') {
      amount = profileData.bank;
    }
    if (amount % 1 != 0 || amount <= 0) {
      return message.reply('please enter a valid amount of coins to withdraw.');
    }

    try {
      if (amount > profileData.bank)
        return message.reply(
          "you don't have that amount of coins to withdraw."
        );
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );
      return message.reply(`you withdrew *${amount}* coins from your bank.`);
    } catch (err) {
      console.log(err);
    }
  },
};
