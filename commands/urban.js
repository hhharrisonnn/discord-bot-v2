const fetch = require('node-fetch');
module.exports = {
    name: 'urban',
    permissions: [],
    aliases: ['urbandictionary', 'ud'],
    cooldown: 0,
    description: "",
    async execute(message, args, cmd, client, Discord, profileData, mentionData) {

        term = args[0]

        fetch(`https://api.urbandictionary.com/v0/define?term=${term}`)
        .then(res => res.json())
        .then(json => {
            const embed = new Discord.MessageEmbed()
          .setColor('#FEC47F')
          .setThumbnail('https://i.imgur.com/8l0d07Q.png')
          .setAuthor(`${term}:`, 'https://i.nuuls.com/AJOBC.png')
          .setDescription(
            `***${json.list[Math.floor(Math.random() * 1)].definition}***`
          )
          .setURL(json.list[0].permalink)
          .setTimestamp()
            .setFooter('Powered by Urban Dictionary', '');
        message.channel.send(embed);
        }).catch(() => {
            message.reply('definition not found/invalid');
        
        })
    }
}
    