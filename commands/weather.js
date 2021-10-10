const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = {
  name: 'weather',
  permissions: [],
  cooldown: 0,
  description: 'Check the weather of a location.',
  async execute(message, args, cmd, client, Discord) {
    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
    if(error) return message.channel.send(error);
    if(!args[0]) return message.reply('please specify a location.');

    if(result === undefined || result.length === 0) return message.reply('**invalid** location.');

    var current = result[0].current;
    var location = result[0].location;

    const weatherinfo = new Discord.MessageEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather forecast for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor('RANDOM')
    .addField('Timezone', `UTC${location.timezone}`, true)
    .addField('Degree Type', 'Celsius', true)
    .addField('Temperature', `${current.temperature}°`, true)
    .addField('Wind', current.winddisplay, true)
    .addField('Feels like', `${current.feelslike}°`, true)
    .addField('Humidity', `${current.humidity}%`, true)

    message.channel.send(weatherinfo).then(msg => {
      let interval = setInterval(() => {
        let newColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        let embed2 = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(newColor)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)
        msg.edit(embed2);
      }, 5000);

      setTimeout(() => {
        clearInterval(interval);
      }, 60000);
    });
  });        
  }
}