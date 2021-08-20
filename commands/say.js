module.exports = {
  name: 'say',
  permissions: [],
  cooldown: 0,
  aliases: [],
  description: 'Says something.',

  async execute (message, args, cmd, client, Discord, profileData) {
    if (message.content.includes("@everyone") || (message.content.includes("@here"))) return;

    let textChannel = message.mentions.channels.first();
    if (!args[0]) return message.channel.send('Provide a channel for me to send the message in.');
    if (!args[1]) return message.channel.send('Provide a message for me to say.');
    if (!message.guild.channels.cache.has(textChannel.id)) return;

      msg = args.slice(1).join(" ");
      textChannel.send(msg);
  }
}