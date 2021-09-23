module.exports = {
    name: 'joke',
    permissions: [],
    cooldown: 5,
    aliases: ['dadjoke', 'hahaa',],
    description: 'Very hilarious jokes',
    execute(message, args, cmd, client, Discord, profileData) {
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
    .setColor('#964B00')
    .setTitle(`*${joke}*`, '📜')
    .setAuthor(`📜`)
    .setThumbnail('https://i.nuuls.com/t0vKj.png')
    .setURL(joke[0].permalink)
  message.channel.send(embed);;
});
        }
    }
