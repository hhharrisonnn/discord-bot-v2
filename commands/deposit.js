const profileModel = require("../models/profileSchema");

module.exports = {
  name: 'deposit',
  permissions: [],
  aliases: ['dep', 'd'],
  cooldown: 0,
  description: 'Deposit coins into bank.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let amount = args[0];
    if (amount == "all") {
      amount = profileData.coins;
    }
    if (!args.slice(1)) {
      message.reply('please enter a valid amount of coins to deposit \<:FailFish:890034774796812288> ');
    }
    if (amount == 0) {
      return message.reply(`you can't deposit 0 coins \<:FailFish:890034774796812288>`)
    }
    if(amount % 1 != 0 || amount <= 0) {
      return message.reply('please enter a valid amount of coins to deposit \<:FailFish:890034774796812288>')
    } 

    try {
      if(amount > profileData.coins) return message.reply(`you don't have that amount of coins to deposit \<:FailFish:890034774796812288>`);
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: -amount,
          bank: amount,
        },
      });

       message.reply(`you deposited *${amount}* coins into your pockets.`)
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
  },
}
