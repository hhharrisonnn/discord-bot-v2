module.exports = {
  name: 'ban',
  permissions: ["BAN_MEMBERS"],
  cooldown: 0,
  description: 'This command bans a member.',
  execute(message, args) {
    let banner = message.author;
    let member = message.mentions.members.first();
    if (!member) return message.reply('you need to mention a member to ban them.');
    let reason = args.slice(1).join(' ');
    if (!reason) reason = 'No Reason Given';
    if (!member.bannable) return message.reply('this member is not bannable');
    
    member.ban({reason: `Banned by: ${banner.tag} Banner ID: ${banner} Reason: ${reason}`});
    message.reply(`${member} ID: ${member.id} has been banned.`);
  }
}