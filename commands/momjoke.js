module.exports = {
  name: 'momjoke',
  permissions: [],
  cooldown: 5,
  aliases: ['mumjoke'],
  description: 'A joke about your mother.',
  execute(message, args, cmd, client, Discord, profileData) {
    const fetch = require('node-fetch');
    fetch(`https://api.yomomma.info/`)

                .then(resp => resp.json())
            .then((data) => {
              message.reply(data.joke)
          })

   
        }
      }
