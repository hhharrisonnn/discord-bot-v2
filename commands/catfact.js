const fetch = require('node-fetch');

module.exports = {
  name: 'catfact',
  permissions: [],
  cooldown: 5,
  aliases: ['cat', 'cats', 'catfacts'],
  description: 'Get random cat facts.',
  execute(message, Discord) {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat')
    .then(resp => resp.json())
    .then((data) => {
      const catFact = data.text;
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`*${catFact}*`)
      .setAuthor(`Cat Fact 🐱`)
      message.channel.send(message.author, embed);
    });
  }
}
