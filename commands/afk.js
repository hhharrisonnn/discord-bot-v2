const fetch = require('node-fetch');

module.exports = {
    name: 'afk',
    permissions: [],
    cooldown: 5,
    aliases: ['gn', 'food', 'poop', 'brb'],
    description: 'help me',
   async execute(message, args, cmd, client, Discord, profileData) {
      const foodEmojis = [
        '🍋', '🍞', '🥐', '🥖', '🥨', '🥯', '🥞', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯',
        '🥙', '🍳', '🥘', '🍲', '🥣', '🥗', '🍿', '🥫', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤',
        '🍥', '🍡', '🥟', '🥠', '🥡', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🥧', '🍫', '🍬', '🍭', '🍮', '🍯'
      ]
      const poop = "[💩]"
      
      const randomFood = Math.floor(Math.random() * foodEmojis.length);
      const prefix = process.env.PREFIX
      let Msg = args.join(' ')
     if (!args[0]) {
        Msg = '(No message)'
     }
      
      const nickname = message.member.displayName;
      const remove = nickname.replace(/[💤]\[AFK]/g, '') 
      

   if (message.content.startsWith(`${prefix}gn`)) {
    date = new Date();
    try {
    const confirmation =  await message.channel.send(`${message.author.username} is now sleeping: ${Msg}`)
    const filter = (m) => m.author.id === message.author.id
    const collector = confirmation.channel.createMessageCollector(filter, {
       max: 1,
     });
       message.member.setNickname(`[💤] ${nickname}`);
       message.channel.awaitMessages(filter, {max :1})
       collector.on('collect', async (m) => {
       let time = require('pretty-ms')(date ? (new Date() - date) : 0)
      const rafk = await  message.channel.send(`${message.author.username} just woke up: ${Msg} (${time} ago)`)
      message.member.setNickname(`${remove}`);
      const filter = (m) => m.author.id === message.author.id
      const collector = rafk.channel.createMessageCollector(filter, {
       max: 1,
       time: 300 * 1000,
     });
 
     collector.on('collect', async (m) => {
       if (m.content.startsWith(`${prefix}rafk`)) {
    const confirmation =  await message.reply(`Your afk status has been resumed`)
    const filter = (m) => m.author.id === message.author.id
    const collector = confirmation.channel.createMessageCollector(filter, {
       max: 1,
     });
     message.member.setNickname(`[💤] ${nickname}`);
       message.channel.awaitMessages(filter, {max :1})
       collector.on('collect', async (m) => {
         let time = require('pretty-ms')(date ? (new Date() - date) : 0)
         message.channel.send(`${message.author.username} just woke up: ${Msg} (${time} ago)`)
         message.member.setNickname(`${remove}`);
             
        })
      }
      })
        }) 
    }catch(err) {
          console.log(err)
            }
       return;
         }
   


    
if (message.content.startsWith(`${prefix}afk`)) {
   date = new Date();
   try {
   const confirmation =  await message.channel.send(`${message.author.username} is now afk: ${Msg}`)
   const filter = (m) => m.author.id === message.author.id
   const collector = confirmation.channel.createMessageCollector(filter, {
      max: 1,
    });
      message.member.setNickname(`[AFK] ${nickname}`);
      message.channel.awaitMessages(filter, {max :1})
      collector.on('collect', async (m) => {
      let time = require('pretty-ms')(date ? (new Date() - date) : 0)
     const rafk = await  message.channel.send(`${message.author.username} just returned from being afk: ${Msg} (${time} ago)`)
     message.member.setNickname(`${remove}`);
     const filter = (m) => m.author.id === message.author.id
     const collector = rafk.channel.createMessageCollector(filter, {
      max: 1,
      time: 300 * 1000,
    });

    collector.on('collect', async (m) => {
      if (m.content.startsWith(`${prefix}rafk`)) {
   const confirmation =  await message.reply(`Your afk status has been resumed`)
   const filter = (m) => m.author.id === message.author.id
   const collector = confirmation.channel.createMessageCollector(filter, {
      max: 1,
    });
    message.member.setNickname(`[AFK] ${nickname}`);
      message.channel.awaitMessages(filter, {max :1})
      collector.on('collect', async (m) => {
        let time = require('pretty-ms')(date ? (new Date() - date) : 0)
        message.channel.send(`${message.author.username} just returned from being afk: ${Msg} (${time} ago)`)
        message.member.setNickname(`${remove}`);
            
    })
  }
  })
    }) 
}catch(err) {
      console.log(err)
        }
   return;
     }

     if (message.content.startsWith(`${prefix}food`)) {
      date = new Date();
      try {
      const confirmation =  await message.channel.send(`${message.author.username} is now eating: ${foodEmojis[randomFood]} ${Msg}`)
      const filter = (m) => m.author.id === message.author.id
      const collector = confirmation.channel.createMessageCollector(filter, {
         max: 1,
       });
         message.member.setNickname(`[${foodEmojis[randomFood]}] ${nickname}`);
         message.channel.awaitMessages(filter, {max :1})
         collector.on('collect', async (m) => {
         let time = require('pretty-ms')(date ? (new Date() - date) : 0)
        const rafk = await  message.channel.send(`${message.author.username} just finished eating: ${Msg} (${time} ago)`)
        message.member.setNickname(`${remove}`);
        const filter = (m) => m.author.id === message.author.id
        const collector = rafk.channel.createMessageCollector(filter, {
         max: 1,
         time: 300 * 1000,
       });
   
       collector.on('collect', async (m) => {
         if (m.content.startsWith(`${prefix}rafk`)) {
      const confirmation =  await message.reply(`Your afk status has been resumed`)
      const filter = (m) => m.author.id === message.author.id
      const collector = confirmation.channel.createMessageCollector(filter, {
         max: 1,
       });
       message.member.setNickname(`[${foodEmojis[randomFood]}] ${nickname}`);
         message.channel.awaitMessages(filter, {max :1})
         collector.on('collect', async (m) => {
           let time = require('pretty-ms')(date ? (new Date() - date) : 0)
           message.channel.send(`${message.author.username} just finished eating: ${Msg} (${time} ago)`)
           message.member.setNickname(`${remove}`);
               
       })
     }
     })
       }) 
   }catch(err) {
         console.log(err)
           }
      return;
        }


        if (message.content.startsWith(`${prefix}poop`)) {
          date = new Date();
          try {
          const confirmation =  await message.channel.send(`${message.author.username} is now pooping: ${poop} ${Msg}`)
          const filter = (m) => m.author.id === message.author.id
          const collector = confirmation.channel.createMessageCollector(filter, {
             max: 1,
           });
             message.member.setNickname(`${poop} ${nickname}`);
             message.channel.awaitMessages(filter, {max :1})
             collector.on('collect', async (m) => {
             let time = require('pretty-ms')(date ? (new Date() - date) : 0)
            const rafk = await  message.channel.send(`${message.author.username} just finished pooping: ${poop} ${Msg} (${time} ago)`)
            message.member.setNickname(`${remove}`);
            const filter = (m) => m.author.id === message.author.id
            const collector = rafk.channel.createMessageCollector(filter, {
             max: 1,
             time: 300 * 1000,
           });
       
           collector.on('collect', async (m) => {
             if (m.content.startsWith(`${prefix}rafk`)) {
          const confirmation =  await message.reply(`Your afk status has been resumed`)
          const filter = (m) => m.author.id === message.author.id
          const collector = confirmation.channel.createMessageCollector(filter, {
             max: 1,
           });
           message.member.setNickname(`${poop} ${nickname}`);
             message.channel.awaitMessages(filter, {max :1})
             collector.on('collect', async (m) => {
               let time = require('pretty-ms')(date ? (new Date() - date) : 0)
               message.channel.send(`${message.author.username} just finished pooping: ${poop} ${Msg} (${time} ago)`)
               message.member.setNickname(`${remove}`);
                   
           })
         }
         })
           }) 
       }catch(err) {
             console.log(err)
               }
          return;
            }


            if (message.content.startsWith(`${prefix}brb`)) {
              date = new Date();
              try {
              const confirmation =  await message.channel.send(`${message.author.username} is gonna be right back: ${Msg}`)
              const filter = (m) => m.author.id === message.author.id
              const collector = confirmation.channel.createMessageCollector(filter, {
                 max: 1,
               });
                 message.member.setNickname(`[BRB] ${nickname}`);
                 message.channel.awaitMessages(filter, {max :1})
                 collector.on('collect', async (m) => {
                 let time = require('pretty-ms')(date ? (new Date() - date) : 0)
                const rafk = await  message.channel.send(`${message.author.username} just came back: ${Msg} (${time} ago)`)
                message.member.setNickname(`${remove}`);
                const filter = (m) => m.author.id === message.author.id
                const collector = rafk.channel.createMessageCollector(filter, {
                 max: 1,
                 time: 300 * 1000,
               });
           
               collector.on('collect', async (m) => {
                 if (m.content.startsWith(`${prefix}rafk`)) {
              const confirmation =  await message.reply(`Your afk status has been resumed`)
              const filter = (m) => m.author.id === message.author.id
              const collector = confirmation.channel.createMessageCollector(filter, {
                 max: 1,
               });
               message.member.setNickname(`[BRB] ${nickname}`);
                 message.channel.awaitMessages(filter, {max :1})
                 collector.on('collect', async (m) => {
                   let time = require('pretty-ms')(date ? (new Date() - date) : 0)
                   message.channel.send(`${message.author.username} just came back: ${Msg} (${time} ago)`)
                   message.member.setNickname(`${remove}`);
                       
               })
             }
             })
               }) 
           }catch(err) {
                 console.log(err)
                   }
              return;
                }
   }

}