const fetch = require('node-fetch');
module.exports = {
    name: 'currency',
    permissions: [],
    cooldown: 300,
    aliases: ['convert', 'exchangerate', 'er'],
    description: 'Conversion rate between 2 currencies.',
    
    async execute(message, args, cmd, client, Discord, profileData) {
        const currency1 =  args.slice(1, 2).toString().toUpperCase('')
        const amount = args[0].toUpperCase('')
        try {
            
          if (args.includes('to') || args.includes('=>')) {
            
            const currency2 = args.slice(3).toString().toUpperCase('')
            const host = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_KEY}/pair/${currency1}/${currency2}/${amount}`
            fetch(`${host}`)
            .then(resp => resp.json())
        .then((data) => {
            const embed = new Discord.MessageEmbed()
          .setColor('#FEC47F')
          .setTitle(`${amount} ${currency1} = ${data.conversion_result} ${currency2}`)
          .setAuthor(
            'ExchangeRate',
            'https://i.nuuls.com/d6PLz.png',
            'https://www.exchangerate-api.com/'
          )
        
        message.channel.send(embed);
          })
        }
        

          else {
            const currency2 = args.slice(2).toString().toUpperCase('')
            const host = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_KEY}/pair/${currency1}/${currency2}/${amount}`
            fetch(`${host}`)
             .then(resp => resp.json())
        .then((data) => {
            const embed = new Discord.MessageEmbed()
          .setColor('#FEC47F')
          .setTitle(`${amount} ${currency1} = ${data.conversion_result} ${currency2}`)
          .setAuthor(
            'ExchangeRate',
            'https://i.nuuls.com/d6PLz.png',
            'https://www.exchangerate-api.com/'
          )
        
        message.channel.send(embed);
        })
    }
}
          catch (err) {
             message.reply(`make sure to use the correct format: !currency amount currency1 currency2`);
          }}
          
        }
        
