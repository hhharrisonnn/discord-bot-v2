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
    message.reply(`${joke} <:haHAA:890018217161019402>`);
});
        }
    }