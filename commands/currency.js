const fetch = require('node-fetch');
module.exports = {
    name: 'currency',
    permissions: [],
    cooldown: 5,
    aliases: ['convert'],
    description: '',
    
    async execute(message, args, cmd, client, Discord, profileData) {

        try {
            
          if (args.includes('to')) {
            
            const currency2 = args.slice(3).toString().toUpperCase('')
            const currency1 =  args.slice(1, 2).toString().toUpperCase('')
            const amount = args[0].toUpperCase('')
            const host = `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`
            fetch(`${host}`)
            .then(resp => resp.json())
        .then((data) => {
            message.reply(`${amount} ${currency1} = ${Object.values(data.rates)[0]} ${currency2}`);
          })
        }
        

          else {
            const currency2 = args.slice(2).toString().toUpperCase('')
            const currency1 =  args.slice(1, 2).toString().toUpperCase('')
            const amount = args[0].toUpperCase('')
            const host = `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`
            fetch(`${host}`)
             .then(resp => resp.json())
        .then((data) => {
            console.log(data)
            message.reply(`${amount} ${currency1} = ${Object.values(data.rates)[0]} ${currency2}`);
        
        })
    }
}
          catch (err) {
             message.reply(`make sure to use the correct format: !currency amount currency1 currency2`);
          }}
        }
        


    
