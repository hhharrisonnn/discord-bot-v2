module.exports = (Discord, client) => {
  console.log(`${client.user.username} is online.`);
  client.user.setPresence({ activity: { name: `$help`, type: 'LISTENING' }, status: "online"});
}