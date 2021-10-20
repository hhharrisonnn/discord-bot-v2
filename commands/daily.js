const profileModel = require('../models/profileSchema'); 
 
module.exports = { 
  name: 'daily', 
  permissions: [], 
  cooldown: 86400, 
  description: 'Daily bonus of coins.', 
  async execute(message, args, cmd, client, Discord, profileData) { 
    const response = await profileModel.findOneAndUpdate( 
      { 
        userID: message.author.id, 
      }, 
      { 
        $inc: { 
          coins: 2000, 
        }, 
      } 
    ); 
    return message.channel.send( 
      `${message.author.username} you have received *2000* coins as a daily bonus!` 
    ); 
  }, 
}; 
