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
                .setColor('#A020F0')
                    .setTitle(`${user} => ${broadcaster}`)
                    .setThumbnail('https://i.nuuls.com/Om2N3.png')
                    .addField(' ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎‏‎‏‏‎‏‏‎Status', `Has never been subscribed`, true)
                    .setURL(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`)
                    .setTimestamp()
                    .setFooter('Powered by api.ivr.fi', '');
             message.channel.send(embed);
                 }
                 else {
                    const embed = new Discord.MessageEmbed()
                .setColor('#A020F0')
                    .setTitle(`${user} => ${broadcaster}`)
                    .setThumbnail('https://i.nuuls.com/Om2N3.png')
                    .addField(' ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‎‏‎‏‏‎‏‏‎Status', `Not subbed`, true)
                    .addField('Previously subbed for', `‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ${oldsub["months"]} months`, true)
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
                    .setColor('#A020F0')
                    .setTitle(`${user} => ${broadcaster}`)
                    .setThumbnail('https://i.nuuls.com/Om2N3.png')
                    .addField('Status', `Subbed`, true)
                    .addField('Type', `Prime`, true)
                    .addField('Total', `${subscriberLength["months"]} months`, true)
                    .addField(' ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎Tier', ` ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏${subscriberData["tier"]}`, true)
                    .addField('Streak', `${subscriberStreak["months"]} months`, true)
                    .addField(' ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Renews/Ends in', ` ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ${sa.humanizeDuration(ms)}`)
                    .setURL(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`)
                    .setTimestamp()
                    .setFooter('Powered by api.ivr.fi', '');
                      message.channel.send(embed);

                 }
                 if (subscriberData["type"] === "paid") {

                    const embed = new Discord.MessageEmbed()
                    .setColor('#A020F0')
                    .setTitle(`${user} => ${broadcaster}`)
                    .setThumbnail('https://i.nuuls.com/Om2N3.png')
                    .addField('Status', `Subbed`, true)
                    .addField('Type', `Paid`, true)
                    .addField('Total', `${subscriberLength["months"]} months`, true)
                    .addField(' ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎Tier', ` ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏${subscriberData["tier"]}`, true)
                    .addField('Streak', `${subscriberStreak["months"]} months`, true)
                    .addField(' ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ Renews/Ends in', ` ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ${sa.humanizeDuration(ms)}`)
                    .setURL(`https://api.ivr.fi/twitch/subage/${user}/${broadcaster}`)
                    .setTimestamp()
                    .setFooter('Powered by api.ivr.fi', '');
                      message.channel.send(embed);
            
                 }
                 if (subscriberData["type"] === "gift") {
                     let gifter = subscriberData["gift"]["name"];
                     const embed = new Discord.MessageEmbed()
                    .setColor('#A020F0')
                    .setTitle(`${user} => ${broadcaster}`)
                    .setThumbnail('https://i.nuuls.com/Om2N3.png')
                     .addField('Status', `Subbed`, true)
                     .addField('Type', `Gifted`, true)
                     .addField('Total', `${subscriberLength["months"]} months`, true)
                     .addField(' ‎‏‏‎ ‎ ‎‏‏‎‎‏‏‎Tier', ` ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏${subscriberData["tier"]}`, true)
                     .addField('Gifter', `${gifter}`, true)
                     .addField('Streak', `${subscriberStreak["months"]} months`, true)
                     .addField(' ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‏‏‎‎‏‏‎Renews/Ends in', ` ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎ ‎‏‏ ‎‏${sa.humanizeDuration(ms)}`)
                     

                   /*  .setTitle(`**${user}** is currently subscribed to **${broadcaster}**ﾠwith a tier ${subscriberData["tier"]} sub, gifted by **${gifter}** for a total of **${subscriberLength["months"]} months!** They are currently on a ${subscriberStreak["months"]} months streak. The sub ends/renews in **${sa.humanizeDuration(ms)}**.`) */
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
