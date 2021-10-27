const { Client, Message } = require('discord.js');

module.exports = {
  name: 'joinposition',
  permissions: [],
  cooldown: 0,
  aliases: ['joinpos'],
  description: 'Check the join position of a member.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let member = message.mentions.members.first();
    member = member ? member : message.member;

    const members = message.guild.members.cache
      .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
      .array();

    const position = members.findIndex(m => m.id === member.id) + 1;

    message.reply(`${member} is number ${position} to join the server.`);
  },
};
