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
      
      message.channel.send(embed).then(msg => {
        let interval = setInterval(() => {
          let newColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
          let embed2 = new Discord.MessageEmbed()
          .setColor(newColor)
          .setTitle(`*${joke}*`)
          .setAuthor('📜Joke')
          .setImage(answer)
          msg.edit(embed2);
        }, 5000);
  
        setTimeout(() => {
          clearInterval(interval);
        }, 60000);
      });
    });
  }
}