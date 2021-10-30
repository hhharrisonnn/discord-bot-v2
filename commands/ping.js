module.exports = {
  name: 'ping',
  permissions: [],
  cooldown: 5,
  aliases: [],
  description: 'Get the latency and uptime of bot.',
  execute(message, args, cmd, client, Discord, profileData) {
    message.channel.send('Calculating ping...').then(resultMessage => {
      const botAvatar = client.user.displayAvatarURL();
      
      const ping = resultMessage.createdTimestamp - message.createdTimestamp;

      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      const embed = new Discord.MessageEmbed()
      .setAuthor('Pong! 🏓')
      .setColor('RANDOM')
      .setThumbnail(botAvatar)
      .addFields(
        {name: 'Latency:', value: `${ping}ms`},
        {name: 'API Latency:', value: `${client.ws.ping}ms`},
        {name: 'Uptime:', value: `${days}d ${hours}h ${minutes}m ${seconds}s`}
      )
      message.channel.send(embed);
    });
  }
}