const profileModel = require("../models/profileSchema");

module.exports = {
  name: 'roulette',
  aliases: ['r'],
  permissions: [],
  cooldown: 0,
  description: 'Roulette coins.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let amount = args[0];
    if(amount.toLowerCase() == "all") {
      amount = profileData.coins
    }
    if(amount % 1 != 0 || amount <= 0) {
      return message.channel.send('Please enter a valid amount of coins to roulette.')
    }
    try {
      if(amount > profileData.coins) return message.channel.send(`You don't have that amount of coins to roulette.`);
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      if (randomNumber == 1) {
        var win = amount;
        var total = profileData.coins + Number(amount);
        message.channel.send(`You **won** *${amount}* coins and now have *${total}* coins.`);
      } else {
        var win = -amount;
        var total = profileData.coins - Number(amount);
        message.channel.send(`You **lost** *${amount}* coins and now have *${total}* coins.`);
      }
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: win,
        },
      });

    }catch(err) {
      console.log(err)
    }
  },
} 