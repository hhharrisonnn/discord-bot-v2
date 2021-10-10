module.exports = {
  name: 'cock',
  permissions: [],
  cooldown: 0,
  description: 'Check cock size.',
  execute(message, args) {
    const cockSize = Math.floor(Math.random() * 15) + 1;
    const member = message.mentions.members.first();

    if (member) {
      message.reply(`${member}'s cock is ${cockSize} inches long, oh yeahhhhhh! <:gachiGASM:896883731841826887>`);
    } else {
      message.reply(`your cock is ${cockSize} inches long, oh yeahhhhhh! <:gachiGASM:896883731841826887>`);
    }
  }
}