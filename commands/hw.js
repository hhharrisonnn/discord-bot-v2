const profileModel = require('../models/profileSchema'); 
 
module.exports = { 
  name: 'hw', 
  permissions: [], 
  cooldown: 3600, 
  aliases: ['huntweebs'], 
  description: 'Hunts weebs and puts them into cages!', 
  async execute(message, args, cmd, client, Discord, profileData) { 
    const weebs = Math.floor(Math.random() * 500); 
    const response = await profileModel.findOneAndUpdate( 
      { 
        userID: message.author.id, 
      }, 
      { 
        $inc: { 
          huntweebs: weebs, 
        }, 
      } 
    ); 
    return message.channel.send( 
      `${message.author.username} managed to hunt ${weebs} weebs and caged them!` 
    ); 
  }, 
}; 
