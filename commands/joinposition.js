const { Client, Message } = require('discord.js');

module.exports = {
  name: 'joinposition',
  permissions: [],
  cooldown: 0,
  aliases: ['joinpos'],
  description: 'Check the join position of a member.',
  async execute(message, args, cmd, client, Discord, profileData) {
    const member = message.mentions.members.first();

    if (!member) return message.reply('please specify a member.');

    const members = message.guild.members.cache
      .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
      .array();

    const position = new Promise((ful) => {
      for (let i = 1; i < members.length + 1; i++) {
        if (members[i - 1].id === member.id) ful(i);
      }
    });

    message.reply(`${member} is number ${await position} to join the server.`);
  },
};