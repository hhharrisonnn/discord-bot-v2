const { MessageReaction } = require("discord.js");
const profileModel = require("../models/profileSchema");

module.exports = {
  name: 'withdraw',
  aliases: ['with', 'wd'],
  permissions: [],
  cooldown: 0,
  description: 'Withdraw coins from your bank.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let amount = args[0];
    if (amount == "all") {
      amount = profileData.bank;
    }
    if (amount == 0) {
      return message.reply(`you can't withdraw 0 coins \<:FailFish:890034774796812288>`)
    }
    if (!args.slice('')) {
      message.reply('please enter a valid amount of coins to withdraw \<:FailFish:890034774796812288> ');
    }
    if(amount % 1 != 0 || amount <= 0) {
      return message.reply('Please enter a valid amount of coins to withrdraw  \<:FailFish:890034774796812288>')
    } 
    
    try {
      if(amount > profileData.bank) return message.reply(`you don't have that amount of coins to withdraw  \<:FailFish:890034774796812288>`);
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: amount,
          bank: -amount,
        },
      });
  
       message.reply(`you withdrew *${amount}* coins from your bank.`)
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#304281')
      .setTitle(':moneybag:')
      .addFields(
        {name: 'Balance:', value: `${profileData.coins}`},
        {name: 'Bank:', value: `${profileData.bank}`},
      ) 
      message.channel.send(newEmbed)
    }catch(err) {
      console.log(err)
    }
  }
}
