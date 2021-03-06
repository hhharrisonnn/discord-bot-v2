module.exports = {
  name: 'momjoke',
  permissions: [],
  cooldown: 5,
  aliases: ['mumjoke'],
  description: 'A joke about your mother.',
  execute(message, args, cmd, client, Discord, profileData) {
    var member = message.mentions.members.first();
    if (!member) member = message.author;

    const images = [
      'https://i.nuuls.com/_JNTi.gif',
      'https://i.nuuls.com/HKHAa.png',
      'https://i.nuuls.com/kDNn2.png'
    ];
    const result = Math.floor(Math.random() * images.length);
    const answer = images[result];

    const fetch = require('node-fetch');
    fetch('https://api.yomomma.info/')
    .then(resp => resp.json())
    .then((data) => {
      const joke = data.joke;
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`*${joke}*`)
      .setAuthor(`Momjoke`)
      .setImage(answer)
      message.channel.send(member, embed);
    });
  }
}
