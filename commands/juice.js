module.exports = {
  name: 'juice',
  permissions: [],
  cooldown: 5,
  description: "Check your juice level.",
  execute(message, args) {
    const juiceLevel = Math.floor(Math.random() * 100);
    message.reply(`your juice level is currently at ${juiceLevel}%! :beverage_box:`)
  }
}