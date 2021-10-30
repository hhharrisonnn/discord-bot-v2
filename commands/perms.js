module.exports = {
  name: 'perms',
  permissions: [],
  cooldown: 60,
  description: 'This is a check permissions command.',
  execute(message, args, cmd, client, Discord) {
    if (message.member.permissions.has("ADMINISTRATOR")) {
      var admin = 'Yes';
    } else {
      var admin = 'No';
    }
    if (message.member.permissions.has("KICK_MEMBERS")) {
      var kick = 'Yes';
    } else {
      var kick = 'No';
    }
    if (message.member.permissions.has("BAN_MEMBERS")) {
      var ban = 'Yes';
    } else {
      var ban = 'No';
    }
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      var manage_channels = 'Yes';
    } else {
      var manage_channels = 'No';
    }
    if (message.member.permissions.has("VIEW_AUDIT_LOG")) {
      var audit = 'Yes';
    } else {
      var audit = 'No';
    }
    if (message.member.permissions.has("MANAGE_MESSAGES")) {
      var manage_messages = 'Yes';
    } else {
      var manage_messages = 'No';
    }
    if (message.member.permissions.has("DEAFEN_MEMBERS")) {
      var deafen = 'Yes';
    } else {
      var deafen = 'No';
    }
    if (message.member.permissions.has("MOVE_MEMBERS")) {
      var move = 'Yes';
    } else {
      var move = 'No';
    }

    const permsEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Perms')
    .addFields(
      {name: 'Admin', value: `${admin}`},
      {name: 'Kick members', value: `${kick}`},
      {name: 'Ban members', value: `${ban}`},
      {name: 'Manage channels', value: `${manage_channels}`},
      {name: 'View audit log', value: `${audit}`},
      {name: 'Manage messages', value: `${manage_messages}`},
      {name: 'Deafen memebers', value: `${deafen}`},
      {name: 'Move members', value: `${move}`},
    ) 
    message.channel.send(permsEmbed);
  }
}