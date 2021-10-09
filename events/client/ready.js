const prefix = process.env.PREFIX;

module.exports = (Discord, client) => {
  console.log(`${client.user.username} is online.`);

  const arrayOfStatus = [
    `Hi :)`,
    `${prefix}help`,
    `${client.guilds.cache.size} servers`,
    `${client.channels.cache.size} channels`,
    `${client.users.cache.size} users`,
    `${client.user.tag}`,
  ]

  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(status);
    index++;
  }, 10000);
}