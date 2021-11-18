const fetch = require('node-fetch');

module.exports = {
  name: 'dogfact',
  permissions: [],
  cooldown: 5,
  aliases: ['dog', 'dogs', 'dogfacts'],
  description: 'Get random dog facts.',
  execute(message, args, cmd, client, Discord, profileData) {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog')
    .then(resp => resp.json())
    .then((data) => {
      const dogFact = data.text;
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`*${dogFact}*`)
      .setAuthor(`Dog Fact 🐶`)
      message.channel.send(message.author, embed);
    });
  }
}