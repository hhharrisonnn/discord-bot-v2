module.exports = (Discord, client) => {
  console.log('TheCarbonBot is online.');
  client.user.setPresence({ activity: { name: `$help`, type: 'LISTENING' }, status: "online"});
}