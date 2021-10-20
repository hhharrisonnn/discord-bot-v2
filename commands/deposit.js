const profileModel = require('../models/profileSchema'); 
 
module.exports = { 
  name: 'deposit', 
  permissions: [], 
  aliases: ['dep', 'd'], 
  cooldown: 86400, 
  description: 'Deposit coins into bank.', 
  async execute(message, args, cmd, client, Discord, profileData) { 
    if (!args[0]) 
      return message.reply('enter the amount of coins you want to deposit.'); 
 
    let amount = args[0]; 
    if (amount.toLowerCase() == 'all') { 
      amount = profileData.coins; 
    } 
    if (amount % 1 != 0 || amount <= 0) { 
      return message.reply('enter a valid amount of coins to deposit.'); 
    } 
 
    try { 
      if (amount > profileData.coins) 
        return message.reply(`you don't have that amount of coins to deposit.`); 
      await profileModel.findOneAndUpdate( 
        { 
          userID: message.author.id, 
        }, 
        { 
          $inc: { 
            coins: -amount, 
            bank: amount, 
          }, 
        } 
      ); 
 
      return message.reply(`you deposited *${amount}* coins into your bank.`); 
    } catch (err) { 
      console.log(err); 
    } 
  }, 
}; 
