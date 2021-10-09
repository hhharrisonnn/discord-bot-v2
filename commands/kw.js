const profileModel = require('../models/profileSchema');

module.exports = {
  name: 'kw',
  permissions: [],
  aliases: ['killweebs'],
  cooldown: 0,
  description: 'Kill weebs that have been caged.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let amount = args[0];
    if (!args[0]) return message.reply('enter the number of weebs you want to kill :)');
    if (amount.toLowerCase() == 'all') {
      amount = profileData.huntweebs;
    }
    if (amount % 1 != 0 || amount <= 0) {
      return message.reply('enter a valid amount of weebs to kill :)');
    } 

    try {
      if (amount > profileData.huntweebs) return message.reply(`you don't have that many weebs in the cage to kill :(`);
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          huntweebs: -amount,
          killweebs: amount,
        },
      });
      let killed = profileData.killweebs + Number(amount);
      
      return message.reply(`has killed ${amount} weebs. ${killed} have already been killed by ${message.author}. Keep up the good work!`);
    } catch(err) {
      console.log(err);
    }
  },
}