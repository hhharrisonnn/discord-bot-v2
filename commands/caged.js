module.exports = {
  name: 'caged',
  aliases: ['cage','cagedweebs'],
  permissions: [],
  cooldown: 0,
  description: 'Check how many weebs you have caged.',
  execute(message, args, cmd, client, Discord, profileData) {
    message.reply(`you currently have ${profileData.huntweebs} weebs in the cage!`);
  }
}