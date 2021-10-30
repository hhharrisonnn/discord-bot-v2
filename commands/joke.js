module.exports = {
  name: 'joke',
  permissions: [],
  cooldown: 5,
  aliases: ['dadjoke', 'hahaa'],
  description: 'Very hilarious jokes.',
  execute(message, args, cmd, client, Discord, profileData) {

    const images = [
      'https://i.nuuls.com/t0vKj.png',
      'https://i.nuuls.com/EvBVo.png',
      'https://i.nuuls.com/qUUln.png',
      'https://i.nuuls.com/eQd36.png'
    ];
    const result = Math.floor(Math.random() * images.length);
    const answer = images[result];

    const fetch = require('node-fetch');
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      const joke = data.joke;
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`*${joke}*`)
      .setAuthor('📜Joke')
      .setImage(answer)
      message.channel.send(embed);
    });
  }
}