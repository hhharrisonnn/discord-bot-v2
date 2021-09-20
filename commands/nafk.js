module.exports = {
  name: 'nafk',
  permissions: [],
  cooldown: 0,
  aliases: ['return', 'rafk'],
  description: 'Return from AFK status (displayed on nickname).',
  execute(message, args, cmd, client, Discord, profileData) {
    const nickname = message.member.displayName;
    const removeAFK = nickname.replace('[AFK]', '');
    
    if (nickname.includes('[AFK]')) {
      message.member.setNickname(`${removeAFK}`);
      message.reply('is no longer AFK.')
    } else {
      message.reply('you have already returned!');
    }
  }
}
