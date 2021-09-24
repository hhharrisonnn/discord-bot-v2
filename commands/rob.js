const profileModel = require("../models/profileSchema");
require('dotenv').config();

module.exports = {
    name: 'rob',
    permissions: [],
    aliases: ['steal', 'yoink'],
    cooldown: 0,
    description: "test2yo.",
    async execute(message, args, cmd, client, Discord, profileData, mentionData, randomData) {

        if (message.mentions.members.first()) { 
          let amount = args[1];
          let member = message.mentions.members.first();
          if (!args.slice(1)) {
            message.reply('please enter a valid amount of coins to rob \<:FailFish:890034774796812288>');
          }
           if (amount.toLowerCase() == "all" && (profileData.coins <= mentionData.coins )) {
            amount = profileData.coins;
          } 
          if (amount.toLowerCase() == "all" && (mentionData.coins <= profileData.coins )) {
            amount = mentionData.coins;
          }

          if (amount % 1 != 0 || amount <= 0) {
            return message.reply('please enter a valid amount of coins to rob \<:FailFish:890034774796812288>');
          }
        const roll = Math.round(Math.random() * 7 + 1);
        if (roll == 1) {
          try {
            if (amount > mentionData.coins &&  profileData.coins) {
          const confirmation =  await message.reply(`you/${member} don't have enough coins, do you want to rob all instead? (y/n)`)
          const answers = ['y', 'yes', 'n', 'no'];
          const filter = (m) =>
          answers.includes(m.content.toLowerCase()) &&
          m.author.id === message.author.id;
        const collector = confirmation.channel.createMessageCollector(filter, {
      max: 1,
      time: 60000,
    });

    collector.on('collect', async (m) => {
        if (
          m.content.toLowerCase() === answers[2] ||
          m.content.toLowerCase() === answers[3]
        ) {
          return message.channel.send(
            `The action has been cancelled.`
          );
        }
  
        try {
                 if (profileData.coins <= mentionData.coins ) {
                    amount = profileData.coins;
                }
                if (profileData.coins >= mentionData.coins ) {
                    amount = mentionData.coins;
                }

          return message.reply(`you got caught trying to rob ${member}, But were able to get away without them seeing your face.`);
        } catch (error) {
          return message.channel.send(`Oops, error: ${error}`);
        }
      });

      collector.on('end', (collected, reason) => {
        if (reason === 'time') {
          message.channel.send(
            `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
          );
        }
      });

        }
        else {
            message.reply(`you got caught trying to rob ${member}, But were able to get away without them seeing your face.`)
            return;
      }
    } catch (err) {
          console.log(err);
        } 
      }
        if (roll < 5) {
        try {
          
            if (amount > mentionData.coins &&  profileData.coins) {
                const confirmation =  await message.reply(`you/${member} don't have enough coins, do you want to rob all instead? (y/n)`)
                const answers = ['y', 'yes', 'n', 'no'];
                const filter = (m) =>
                answers.includes(m.content.toLowerCase()) &&
                m.author.id === message.author.id;
              const collector = confirmation.channel.createMessageCollector(filter, {
            max: 1,
            time: 60000,
          });
      
          collector.on('collect', async (m) => {
              if (
                m.content.toLowerCase() === answers[2] ||
                m.content.toLowerCase() === answers[3]
              ) {
                return message.channel.send(
                  `The action has been cancelled.`
                );
              }
        
              try {
                if (profileData.coins <= mentionData.coins ) {
                    amount = profileData.coins;
                }
                if (profileData.coins >= mentionData.coins ) {
                    amount = mentionData.coins;
                }
                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                  }, {
                    $inc: {
                      coins: amount,
                    }
                  });
            
        
                  await profileModel.findOneAndUpdate({
                    userID: member.id
                  }, {
                    $inc: {
                      coins: -amount,
                    }
                  });
            
                  message.reply(`robbed ${amount} coins from ${member}`);
              } catch (error) {
                return message.channel.send(`Oops, error: ${error}`);
              }
            });
      
            collector.on('end', (collected, reason) => {
              if (reason === 'time') {
                message.channel.send(
                  `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                );
              }
            });
      
              }
              else {
          await profileModel.findOneAndUpdate({
            userID: message.author.id
          }, {
            $inc: {
              coins: amount,
            }
          });
    

          await profileModel.findOneAndUpdate({
            userID: member.id
          }, {
            $inc: {
              coins: -amount,
            }
          });
    
          message.reply(`robbed ${amount} coins from ${member}`);
    
        }}
        catch(err) {
          console.log(err);
        } 
        }
        else {
          try {
                        if (amount > mentionData.coins &&  profileData.coins) {
                const confirmation =  await message.reply(`you/${member} don't have enough coins, do you want to rob all instead? (y/n)`)
                const answers = ['y', 'yes', 'n', 'no'];
                const filter = (m) =>
                answers.includes(m.content.toLowerCase()) &&
                m.author.id === message.author.id;
              const collector = confirmation.channel.createMessageCollector(filter, {
            max: 1,
            time: 60000,
          });
      
          collector.on('collect', async (m) => {
              if (
                m.content.toLowerCase() === answers[2] ||
                m.content.toLowerCase() === answers[3]
              ) {
                return message.channel.send(
                  `The action has been cancelled.`
                );
              }
        
              try {
                if (profileData.coins <= mentionData.coins ) {
                    amount = profileData.coins;
                }
                if (profileData.coins >= mentionData.coins ) {
                    amount = mentionData.coins;
                }
                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                  }, {
                    $inc: {
                      coins: -amount,
                    }
                  });
            
                  message.reply(`You got caught trying to rob ${member}! Fined ${amount} coins.`);
              } catch (error) {
                return message.channel.send(`Oops, error: ${error}`);
              }
            });
      
            collector.on('end', (collected, reason) => {
              if (reason === 'time') {
                message.channel.send(
                  `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
                );
              }
            });
      
              }
              else {
            await profileModel.findOneAndUpdate({
              userID: message.author.id
            }, {
              $inc: {
                coins: -amount,
              }
            });
      
      
            message.reply(`You got caught trying to rob ${member}! Fined ${amount} coins.`);
      
          }}
          catch(err) {
            console.log(err);
          } 
        }
      }

//RANDOM 


     /*  else {
        let amount = args[0];
        let randomUser = client.guilds.cache.get(process.env.SERVER_ID).members.cache.random() 
         
    if (!args.slice(1)) {
        message.reply('please enter a valid amount of coins to rob \<:FailFish:890034774796812288>');
      }
       if (amount.toLowerCase() == "all" && (profileData.coins <= randomData.coins )) {
        amount = profileData.coins;
      } 
      if (amount.toLowerCase() == "all" && (randomData.coins <= profileData.coins )) {
        amount = randomData.coins;
      }

      if (amount % 1 != 0 || amount <= 0) {
        return message.reply('please enter a valid amount of coins to rob \<:FailFish:890034774796812288>');
      }
    const roll = Math.round(Math.random() * 7 + 1);
    if (roll == 1) {
      try {
        if (amount > randomData.coins &&  profileData.coins) {
      const confirmation =  await message.reply(`you/<@${randomUser.user.id}> don't have enough coins, do you want to rob all instead? (y/n)`)
      const answers = ['y', 'yes', 'n', 'no'];
      const filter = (m) =>
      answers.includes(m.content.toLowerCase()) &&
      m.author.id === message.author.id;
    const collector = confirmation.channel.createMessageCollector(filter, {
  max: 1,
  time: 60000,
});

collector.on('collect', async (m) => {
    if (
      m.content.toLowerCase() === answers[2] ||
      m.content.toLowerCase() === answers[3]
    ) {
      return message.channel.send(
        `The action has been cancelled.`
      );
    }

    try {
             if (profileData.coins <= randomData.coins ) {
                amount = profileData.coins;
            }
            if (profileData.coins >= randomData.coins ) {
                amount = randomData.coins;
            }

      return message.reply(`you got caught trying to rob <@${randomUser.user.id}>, But were able to get away without them seeing your face.`);
    } catch (error) {
      return message.channel.send(`Oops, error: ${error}`);
    }
  });

  collector.on('end', (collected, reason) => {
    if (reason === 'time') {
      message.channel.send(
        `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
      );
    }
  });

    }
    else {
        message.reply(`you got caught trying to rob <@${randomUser.user.id}>, But were able to get away without them seeing your face.`)
        return;
  }
} catch (err) {
      console.log(err);
    } 
  }
    if (roll < 5) {
    try {
      
        if (amount > randomData.coins &&  profileData.coins) {
            const confirmation =  await message.reply(`you/<@${randomUser.user.id}> don't have enough coins, do you want to rob all instead? (y/n)`)
            const answers = ['y', 'yes', 'n', 'no'];
            const filter = (m) =>
            answers.includes(m.content.toLowerCase()) &&
            m.author.id === message.author.id;
          const collector = confirmation.channel.createMessageCollector(filter, {
        max: 1,
        time: 60000,
      });
  
      collector.on('collect', async (m) => {
          if (
            m.content.toLowerCase() === answers[2] ||
            m.content.toLowerCase() === answers[3]
          ) {
            return message.channel.send(
              `The action has been cancelled.`
            );
          }
    
          try {
            if (profileData.coins <= randomData.coins ) {
                amount = profileData.coins;
            }
            if (profileData.coins >= randomData.coins ) {
                amount = randomData.coins;
            }
            await profileModel.findOneAndUpdate({
                userID: message.author.id
              }, {
                $inc: {
                  coins: amount,
                }
              });
        
    
              await profileModel.findOneAndUpdate({
                userID: randomUser.user.id
              }, {
                $inc: {
                  coins: -amount,
                }
              });
        
              message.reply(`robbed ${amount} coins from <@${randomUser.user.id}>`);
          } catch (error) {
            return message.channel.send(`Oops, error: ${error}`);
          }
        });
  
        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            message.channel.send(
              `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
            );
          }
        });
  
          }
          else {
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: amount,
        }
      });


      await profileModel.findOneAndUpdate({
        userID: randomUser.user.id
      }, {
        $inc: {
          coins: -amount,
        }
      });

      message.reply(`robbed ${amount} coins from <@${randomUser.user.id}>`);

    }}
    catch(err) {
      console.log(err);
    } 
    }
    else {
      try {
                    if (amount > randomData.coins &&  profileData.coins) {
            const confirmation =  await message.reply(`you/<@${randomUser.user.id}> don't have enough coins, do you want to rob all instead? (y/n)`)
            const answers = ['y', 'yes', 'n', 'no'];
            const filter = (m) =>
            answers.includes(m.content.toLowerCase()) &&
            m.author.id === message.author.id;
          const collector = confirmation.channel.createMessageCollector(filter, {
        max: 1,
        time: 60000,
      });
  
      collector.on('collect', async (m) => {
          if (
            m.content.toLowerCase() === answers[2] ||
            m.content.toLowerCase() === answers[3]
          ) {
            return message.channel.send(
              `The action has been cancelled.`
            );
          }
    
          try {
            if (profileData.coins <= randomData.coins ) {
                amount = profileData.coins;
            }
            if (profileData.coins >= randomData.coins ) {
                amount = randomData.coins;
            }
            await profileModel.findOneAndUpdate({
                userID: message.author.id
              }, {
                $inc: {
                  coins: -amount,
                }
              });
        
              message.reply(`You got caught trying to rob <@${randomUser.user.id}>! Fined ${amount} coins.`);
          } catch (error) {
            return message.channel.send(`Oops, error: ${error}`);
          }
        });
  
        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            message.channel.send(
              `${message.author}, it's been a minute without confirmation. The action has been cancelled.`
            );
          }
        });
  
          }
          else {
        await profileModel.findOneAndUpdate({
          userID: message.author.id
        }, {
          $inc: {
            coins: -amount,
          }
        });
  
  
        message.reply(`You got caught trying to rob <@${randomUser.user.id}>! Fined ${amount} coins.`);
  
      }}
      catch(err) {
        console.log(err);
      } 
    }

      } */
},
};

