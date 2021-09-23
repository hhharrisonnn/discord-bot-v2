const axios = require('axios'); 
const sa = require("./subage.js",);
const humanize = require('humanize-duration');
const { User } = require('discord.js');
module.exports = {
    name: 'subage',
    permissions: [],
    cooldown: 5,
    aliases: ['sa'],
    description: '',
    async execute(message, args, cmd, client, Discord, profileData) {
        
        try {
             exports.humanizeDuration = (ms) => {
                const options = {
                    language: "shortEn",
                    languages: {
                        shortEn: {
                            y: () => "y",
                            mo: () => "mo",
                            w: () => "w",
                            d: () => "d",
                            h: () => "h",
                            m: () => "m",
                            s: () => "s",
                            ms: () => "ms",
                        },
                    },
                    units: ['y', 'd', 'h', 'm', 's'],
                    largest: 3,
                    round: true,
                    conjunction: ' and ',
                    spacer: '',
            
                }
                return humanize(ms, options);
            }
            
             const user =  args[0]
             const broadcaster = args.slice(1)
     
     
             let subscriberCheck = await axios.get(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`);
             if (subscriberCheck.data["subscribed"] == false) {
                 let oldsub = subscriberCheck.data["cumulative"];
                 if (oldsub["months"] === 0) {
                     const embed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle(`${user} has never been subscribed to ${broadcaster} :|`)
                .setAuthor(
                  'Twitch',
                 'https://i.nuuls.com/Om2N3.png',
                 'https://twitch.tv/'
                  )
              .setURL(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`)
              .setTimestamp()
                .setFooter('Powered by api.ivr.fi', '');
             message.channel.send(embed);
                 }
                 else {
                    const embed = new Discord.MessageEmbed()
                .setColor('#FFA500')
                .setTitle(`${user} is not Subscribed to ${broadcaster}, But has been Previously for a Total of ${oldsub["months"]} months!`)
                .setAuthor(
                  'Twitch',
                 'https://i.nuuls.com/Om2N3.png',
                 'https://twitch.tv/'
                  )
                .setURL(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`)
                .setTimestamp()
                .setFooter('Powered by api.ivr.fi', '');
             message.channel.send(embed);
                 }
             }
             else {
                 let subscriberData = subscriberCheck.data["meta"];
                 let subscriberLength = subscriberCheck.data["cumulative"];
                 let subscriberStreak = subscriberCheck.data["streak"]; 
                 const ms = new Date().getTime() - Date.parse(subscriberData["endsAt"]);
     
                 if (subscriberData["type"] === "prime") {

                    const embed = new Discord.MessageEmbed()
                    .setColor('#00FF00')
                    .setTitle(`**${user}** is currently subscribed to **${broadcaster}**ﾠwith a tier 1 prime sub for a total of **${subscriberLength["months"]} months!** They are currently on a **${subscriberStreak["months"]}** months streak. The sub ends/renews in **${sa.humanizeDuration(ms)}**.`)
                    .setAuthor(
                      'Twitch',
                     'https://i.nuuls.com/Om2N3.png',
                     'https://twitch.tv/'
                      )
                    .setURL(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`)
                    .setTimestamp()
                    .setFooter('Powered by api.ivr.fi', '');
                      message.channel.send(embed);

                 }
                 if (subscriberData["type"] === "paid") {

                    const embed = new Discord.MessageEmbed()
                    .setColor('#00FF00')
                    .setTitle(`**${user}** is currently subscribed to **${broadcaster}**ﾠwith a tier ${subscriberData["tier"]} sub for a total of **${subscriberLength["months"]} months!** They are currently on a ${subscriberStreak["months"]} months streak. The sub ends/renews in **${sa.humanizeDuration(ms)}**.`)
                    .setAuthor(
                      'Twitch',
                     'https://i.nuuls.com/Om2N3.png',
                     'https://twitch.tv/'
                      )
                    .setURL(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`)
                    .setTimestamp()
                    .setFooter('Powered by api.ivr.fi', '');
                      message.channel.send(embed);
            
                 }
                 if (subscriberData["type"] === "gift") {
                     let gifter = subscriberData["gift"]["name"];
                     const embed = new Discord.MessageEmbed()
                    .setColor('#00FF00')
                    .setTitle(`**${user}** is currently subscribed to **${broadcaster}**ﾠwith a tier ${subscriberData["tier"]} sub, gifted by **${gifter}** for a total of **${subscriberLength["months"]} months!** They are currently on a ${subscriberStreak["months"]} months streak. The sub ends/renews in **${sa.humanizeDuration(ms)}**.`)
                    .setAuthor(
                      'Twitch',
                     'https://i.nuuls.com/Om2N3.png',
                     'https://twitch.tv/'
                      )
                    .setURL(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`)
                    .setTimestamp()
                    .setFooter('Powered by api.ivr.fi', '');
                      message.channel.send(embed);
    
                 }
             }
          }
          catch (err) {
             console.log(err);
             message.reply(`Make sure to spell everything correctly \<:FailFish:890034774796812288>`);
         }
         
        }
    }
