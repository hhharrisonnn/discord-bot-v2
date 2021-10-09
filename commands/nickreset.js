module.exports = {
  name: 'nickreset',
  permissions: ["MANAGE_NICKNAMES"],
  cooldown: 0,
  aliases: ['resetnick'],
  description: 'Reset someone\'s nickname.',
  execute(message, args, cmd, client, Discord, profileData) {
    const member = message.mentions.members.first() || message.member;

    if (!member) return message.reply('please specify a member.');

    try {
      member.setNickname(null);
    } catch (err) {
      message.reply('I do not have permission to reset ' + member.toString() + ' nickname.');
    }
  }
}