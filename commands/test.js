module.exports = {
  name: 'test',
  permissions: [],
  cooldown: 0,
  description: "This is a test command.",
  execute(message, args) {
    message.channel.send('Test fail lul');
  }
}