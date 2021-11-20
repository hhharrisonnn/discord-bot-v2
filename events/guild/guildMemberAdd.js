const profileModel = require('../../models/profileSchema');

module.exports = async (client, Discord) => {
  try {
    let profile = await profileModel.create({
      userID: member.id,
      serverID: member.guild.id,
      coins: 1000,
      bank: 0,
      huntweebs: 0,
      killweebs: 0,
      lastfmUsername: undefined,
    });
    profile.save();
  } catch(err) {}
};