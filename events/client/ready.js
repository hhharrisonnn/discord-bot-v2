module.exports = (Discord, client) => {
  console.log(`${client.user.username} is online.`);

  const arrayOfStatus = [
    `${process.env.PREFIX}help`,
    `${client.guilds.cache.size} servers`,
    `${client.users.cache.size} users`,
  ];

  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    if (status === arrayOfStatus[0]) {
      var typeOfActivity = 'PLAYING';
    } else {
      var typeOfActivity = 'WATCHING';
    }
    client.user.setActivity(status, { type: `${typeOfActivity}` });
    index++;
  }, 10000);
}