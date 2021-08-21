module.exports = {
  name: 'afk',
  permissions: [],
  cooldown: 0,
  aliases: [],
  description: 'AFK status (displayed on nickname).',
  execute(message, args, cmd, client, Discord, profileData) {
    const nickname = message.member.displayName;
    
    if (!nickname.includes('[AFK]')) {
      message.member.setNickname(`[AFK] ${nickname}`);
      message.reply('is now AFK.')
    } else {
      message.reply('you are already afk!');
    }
  }
}