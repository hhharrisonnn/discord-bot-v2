module.exports = {
  name: 'ping',
  permissions: [],
  cooldown: 0,
  aliases: [],
  description: 'Get the latency and uptime of bot.',
  execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send('Calculating ping...').then(resultMessage => {
      const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
      const thumbnails = [
        'https://i.nuuls.com/AqVXz.gif',
        'https://i.nuuls.com/zPBek.gif',
        'https://i.nuuls.com/S3u5N.gif'
      ];
      const result = Math.floor(Math.random() * thumbnails.length);
      answer = thumbnails[result];


      const ping = resultMessage.createdTimestamp - message.createdTimestamp;

      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      const embed = new Discord.MessageEmbed()
      .setAuthor('Pong! 🏓')
      .setColor(color)
      .setThumbnail(answer)
      .addFields(
        {name: 'Latency:', value: `${ping}ms`},
        {name: 'API Latency:', value: `${client.ws.ping}ms`},
        {name: 'Uptime:', value: `${days}d ${hours}h ${minutes}m ${seconds}s`}
      )
      message.channel.send(embed);
    });
  }
}