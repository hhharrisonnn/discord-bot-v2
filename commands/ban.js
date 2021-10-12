module.exports = {
  name: 'ban',
  permissions: ["BAN_MEMBERS"],
  cooldown: 0,
  description: 'This command bans a member.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let banner = message.author;
    let member = message.mentions.members.first();
    if (!member) return message.reply('you need to mention a member to ban them.');
    let reason = args.slice(1).join(' ');
    if (!reason) reason = '*No Reason Given*';
    if (!member.bannable) return message.reply('this member is not bannable');

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField('You have been banned from:', message.guild)
    .addField('Reason:', reason)
    .setThumbnail(message.guild.iconURL())

    const user = await client.users.fetch(member.id);

    try {
      await user.send(embed);
    } catch {
      console.log(`Ban: Could not DM the user ${member}.`);
    } finally {
      member.ban({reason: `Banned by: ${banner.tag} Banner ID: ${banner} | Reason: ${reason}`});
      message.reply(`${member} ID: ${member.id} has been banned.`);
    }
  }
}