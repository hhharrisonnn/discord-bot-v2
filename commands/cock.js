module.exports = {
  name: 'cock',
  permissions: [],
  cooldown: 0,
  description: 'Check cock size.',
  execute(message, args) {
    const cockSize = Math.floor(Math.random() * 15) + 1;
    message.reply(`your cock is ${cockSize} inches long, oh yeahhhhhh!`)
  }
}