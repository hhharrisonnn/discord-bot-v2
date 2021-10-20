require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

mongoose
  .connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.log(err);
  });

client.login(process.env.DISCORD_TOKEN);
