module.exports = { 
  name: 'nick', 
  permissions: ['MANAGE_NICKNAMES'], 
  cooldown: 0, 
  aliases: ['nickname'], 
  description: "Change someone's nickname.", 
  execute(message, args, cmd, client, Discord, profileData) { 
    const member = message.mentions.members.first() || message.member; 
 
    if (!member) return message.reply('Please specify a member.'); 
 
    const argument = args.slice(1).join(' '); 
 
    try { 
      member.setNickname(argument); 
    } catch (err) { 
      message.reply( 
        'I do not have permission to set ' + member.toString() + ' nickname.' 
      ); 
    } 
  }, 
}; 
