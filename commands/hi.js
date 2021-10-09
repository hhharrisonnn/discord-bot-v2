module.exports = {
  name: 'hi',
  permissions: [],
  cooldown: 0,
  description: 'This is a hi command.',
  execute(message, args) {
    message.channel.send('hi');
  }
}