module.exports = {
  name: 'juice',
  permissions: [],
  cooldown: 0,
  description: 'Check your juice level.',
  execute(message, args) {
    const juiceLevel = Math.floor(Math.random() * 100);
    const member = message.mentions.members.first();
    
    if (member) {
      message.reply(`${member}'s juice level is currently at ${juiceLevel}%! :beverage_box:`);
    } else {
      message.reply(`your juice level is currently at ${juiceLevel}%! :beverage_box:`);
    }
  }
}