
const { image2braille, Braille } = require('braille-art');
const { createWriteStream } = require ('fs');

const settings = {
white_cutoff: 0.5,
width: 70,
height: 70,
whitespace: [[0, 0], [0, 0], [0, 0], [0, 1]] 
};
const figlet = require("figlet");
const { promisify } = require("util");
const { AggregationCursor } = require('mongoose');
const figletAsync = promisify(figlet);
module.exports = {
    name: 'ascii',
    permissions: [],
    cooldown: 0,
    aliases: [],
    description: 'text output of an image',
   async execute(message, args, cmd, client, Discord, profileData) {
    const hasEmoteRegex = /<a?:.+:\d+>/gm
    const emoteRegex = /<:.+:(\d+)>/gm
    const animatedEmoteRegex = /<a:.+:(\d+)>/gm
  
    const yo = args.find(m => m.match(hasEmoteRegex))
    const emoji = emoteRegex.exec(yo)
    let url;

    if(args.includes(`.png`) || (`.jpeg`)) {
        url = args[0]
    }
if (emoji) {

     url = "https://cdn.discordapp.com/emojis/" + emoji[1] + ".png?v=1"
    }
    else if (yo1 = animatedEmoteRegex.exec(message)) {
     url = "https://cdn.discordapp.com/emojis/" + yo1[1] + ".gif?v=1"

    }
    if (message.attachments.first()) {
        const attachment = message.attachments.first();
         url = attachment ? attachment.url : null;
    }



image2braille(url, settings).then(function (asciified) {
    
        const embed = new Discord.MessageEmbed()
          .setDescription("```" + `${asciified.join('\n').trimRight().replace(/,/g, '')}\n` + "```")
          message.channel.send(embed)
          .catch(function (err) {

            message.channel.send(err)    
    }

        )


})
 /* if(!args.includes(`.png`) || (`.jpeg`) || !emoji || !message.attachments.first()) {
    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Please Give Me Text!`);
    
    let Result = await figletAsync(Content);
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("```" + Result + "```")
    
    
    if (Content.length > 20)
      return message.channel.send(`Please Make Shorter! | Limit : 20`);
    
    message.channel.send(embed);
 }

 */
}

    }


        




