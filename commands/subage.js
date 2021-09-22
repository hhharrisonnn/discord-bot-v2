const axios = require('axios'); 
const sa = require("./subage.js",);
const humanize = require('humanize-duration');
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
                     message.reply( `${user} has never been Subscribed to ${broadcaster} :| .`)
                 }
                 else {
                    message.reply( `${user} is not Subscribed to ${broadcaster}, But has been Previously for a Total of ${oldsub["months"]} months!`);
                 }
             }
             else {
                 let subscriberData = subscriberCheck.data["meta"];
                 let subscriberLength = subscriberCheck.data["cumulative"];
                 let subscriberStreak = subscriberCheck.data["streak"]; 
                 const ms = new Date().getTime() - Date.parse(subscriberData["endsAt"]);
     
                 if (subscriberData["type"] === "prime") {
                     client.say( `${user} is currently subscribed to ${broadcaster}ﾠwith a tier 1 prime sub for a total of ${subscriberLength["months"]} months! They are currently on a ${subscriberStreak["months"]} months streak. The sub ends/renews in ${sa.humanizeDuration(ms)}.`);
                 }
                 if (subscriberData["type"] === "paid") {
                    message.reply( `${user} is currently subscribed to ${broadcaster}ﾠwith a tier ${subscriberData["tier"]} sub for a total of ${subscriberLength["months"]} months! They are currently on a ${subscriberStreak["months"]} months streak. The sub ends/renews in ${sa.humanizeDuration(ms)}.`);
                 }
                 if (subscriberData["type"] === "gift") {
                     let gifter = subscriberData["gift"]["name"];
                     message.reply( `${user} is currently subscribed to ${broadcaster}ﾠwith a tier ${subscriberData["tier"]} sub, gifted by ${gifter} for a total of ${subscriberLength["months"]} months! They are currently on a ${subscriberStreak["months"]} months streak. The sub ends/renews in ${sa.humanizeDuration(ms)}.`);
                 }
             }
          }
          catch (err) {
             console.log(err);
             message.reply(`Make sure to spell everything correctly \<:FailFish:890034774796812288>`);
         }
         
        }
    }
