const profileModel = require("../models/profileSchema");

module.exports = {
  name: 'givecoins',
  aliases: ['gc', 'givepoints', 'gp'],
  permissions: [],
  cooldown: 0,
  description: 'Give coins to someone.',
  async execute(message, args, cmd, client, Discord, profileData, mentionData) {
    let member = message.mentions.members.first();
    let amount = args[1];
        if (amount == "all") {
      amount = profileData.coins;
    }

   if (amount == 0) {
     return message.reply(`you can't give away 0 coins \<:FailFish:890034774796812288>`)
   }
    if (!args.slice(1)) {
      message.reply('please enter a valid amount of coins to give \<:FailFish:890034774796812288> ');
    }
    if (amount % 1 != 0 || amount <= 0) {
      return message.reply('please enter a valid amount of coins to give \<:FailFish:890034774796812288>');
    }
    
    try {
      if (amount > profileData.coins || amount == 0) return message.reply(`you don't have that amount of coins to give \<:FailFish:890034774796812288>`);
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
