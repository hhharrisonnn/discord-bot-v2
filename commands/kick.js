module.exports = {
  name: 'kick',
  permissions: ["KICK_MEMBERS"],
  cooldown: 0,
  description: 'This command kicks a member.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let kicker = message.author;
    let member = message.mentions.members.first();
    if (!member) return message.reply('you need to mention a member to kick them.');
    let reason = args.slice(1).join(' ');
    if (!reason) reason = 'No Reason Given';
    if (!member.kickable) return message.reply('this member is not kickable');

    const user = await client.users.fetch(member.id);

    try {
      await user.send(`You have been kicked from server '${message.guild}' | Reason: ${reason}`);
    } catch {
      console.log(`Ban: Could not DM the user ${member}.`);
    } finally {
      member.kick(`Kicked by: ${kicker.tag} Kicker ID: ${kicker} | Reason: ${reason}`);
      message.reply(`${member} ID: ${member.id} has been kicked.`);
    }
  }
}