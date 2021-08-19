const profileModel = require("../models/profileSchema");

module.exports = {
  name: 'deposit',
  permissions: [],
  aliases: ['dep', 'd'],
  cooldown: 86400,
  description: 'Deposit coins into bank.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let amount = args[0];
    if(amount.toLowerCase() == "all") {
      amount = profileData.coins
    }
    if(amount % 1 != 0 || amount <= 0) {
      return message.channel.send('Please enter a valid amount of coins to deposit.')
    } 

    try {
      if(amount > profileData.coins) return message.channel.send(`You don't have that amount of coins to deposit.`);
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: -amount,
          bank: amount,
        },
      });

      return message.channel.send(`You deposited *${amount}* coins into your bank.`)
    }catch(err) {
      console.log(err)
    }
  },
}