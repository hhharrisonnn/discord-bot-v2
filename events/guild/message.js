require('dotenv').config();
const profileModel = require('../../models/profileSchema');
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
  const prefix = process.env.PREFIX;
  if(!message.content.startsWith(prefix) || message.author.bot) return;

   let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if(!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 1000,
        bank: 0,
        huntweebs: 0,
        killweebs: 0,
      });
      profile.save();
    }
  } catch(err) {
    console.log(err)
  } 


  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
  if(!command) return;
  const validPermissions = [
    "ADMINISTRATOR",
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "VIEW_CHANNEL",
    "READ_MESSAGES",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "EXTERNAL_EMOJIS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_ROLES_OR_PERMISSIONS",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]
  let mentionData;
  try {
    mentionData = await profileModel.findOne({ userID: message.mentions.members.first().id });
  } catch(err) {
    console.log(err)
  } 
  if (command.permissions.length) {
    let invalidPerms = []
    for(const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log(`Invalid Permissions ${perm}`);
      }
      if(!message.member.hasPermission(perm)) {
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length) {
      return message.channel.send(`Missing Permissions: \` ${invalidPerms}\``);
    }
  }

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const currentTime = Date.now();
  const timeStamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown) * 1000;

  if (timeStamps.has(message.author.id)) {
    const expirationTime = timeStamps.get(message.author.id) + cooldownAmount;
    if (currentTime < expirationTime) {
      const timeLeft = (expirationTime - currentTime) / 1000;
      return message.reply(`you have to wait ${timeLeft.toFixed(1)} more seconds until you can use this command again.`);
    }
  }

  timeStamps.set(message.author.id, currentTime);
  setTimeout(() => timeStamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args, cmd, client, Discord, profileData, mentionData);
  } catch(err) {
    message.reply("Error while sending command.");
    console.log(err);
  }
};
