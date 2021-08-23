const profileModel = require("../models/profileSchema");

module.exports = {
  name: 'givecoins',
  aliases: ['gc', 'givepoints', 'gp'],
  permissions: [],
  cooldown: 0,
  description: 'Give coins to someone.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let member = message.mentions.members.first();
    let amount = args[1];

    if (!args[1]) {
      message.reply('please enter a valid amount of coins to give.');
    }
    if (amount.toLowerCase() == "all") {
      amount = profileData.coins;
    }
    if (amount % 1 != 0 || amount <= 0) {
      return message.reply('please enter a valid amount of coins to give.');
    }
    
    try {
      if (amount > profileData.coins) return message.channel.send(`You don't have that amount of coins to give.`);
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: -amount,
        }
      });

      await profileModel.findOneAndUpdate({
        userID: member.id
      }, {
        $inc: {
          coins: amount,
        }
      });

      message.reply(`gave ${amount} coins to ${member}`);

    } catch(err) {
      console.log(err);
    }
  },
} 