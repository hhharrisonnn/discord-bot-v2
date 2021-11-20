const pagination = require('discord.js-pagination');
const prefix = process.env.PREFIX;

module.exports = {
  name: 'commands',
  permissions: [],
  aliases: ['c', 'help', 'h'],
  cooldown: 60,
  description: 'Shows list of commands.',
  execute(message, args, cmd, client, Discord) {
    const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Commands List (${prefix})`)
    .setDescription('💰')
    .addFields(
      {name: 'Claim daily bonus 2000 coins', value: 'daily'},
      {name: 'Roulette coins', value: 'roulette, r [number]'},
      {name: 'Balance', value: 'balance, bal, b'},
      {name: 'Deposit coins, 1 day cooldown', value: 'deposit, dep [number]'},
      {name: 'Withdraw coins', value: 'withdraw, wd [number]'},
      {name: 'Beg for coins', value: 'beg'},
      {name: 'Give coins to someone', value: 'givecoins, gc, givepoints, gp'},
    )

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Commands List (${prefix})`)
    .setDescription('🎱🎮🎲')
    .addFields(
      {name: '8Ball', value: '8ball [question]'},
      {name: 'Cringy joke', value: 'joke, dadjoke, hahaa'},
      {name: 'Mom joke', value: 'momjoke, mumjoke'},
      {name: 'Fortune cookie', value: 'cookie, fortunecookie'},
      {name: 'Check juice level😂', value: 'juice'},
      {name: 'Check cock size', value: 'cock'},
      {name: 'UwU-fy youw message ! >.<', value: 'weebify, uwu, uwufy, owo [message]'},
    )

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Commands List (${prefix})`)
    .setDescription('Last.fm 🎧')
    .addFields(
      {name: 'Set name to database for Last.fm commands', value: 'lastfm, lf, lfm set [username]'},
      {name: 'Shows a user\'s Last.fm profile', value: 'lastfm, lf, lfm profile [username]'},
    )

    const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Commands List (${prefix})`)
    .setDescription('🏹')
    .addFields(
      {name: 'Hunt weebs', value: 'huntweebs, hw'},
      {name: 'Kill weebs', value: 'killweebs, kw [amount]'},
      {name: 'Number of weebs in cage', value: 'caged, cage, cagedweebs'},
    )   

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Commands List (${prefix})`)
    .setDescription('Misc 🔣')
    .addFields(
      {name: 'Get random cat facts', value: 'catfact'},
      {name: 'Get random dog facts', value: 'dogfact'},
      {name: 'Say', value: 'say #[channel] [message]'},
      {name: 'Check your permissions', value: 'perms'},
      {name: 'Avatar/profile pic of a user', value: 'avatar, profilepic, pfp, icon @[member]'},
      {name: 'Weather', value: 'weather [location]'},
      {name: 'Go AFK', value: 'afk'},
      {name: 'Return from AFK', value: 'nafk, return, rafk'},
      {name: 'Remind yourself or another member', value: 'remindme [time] [message], remind ([user] [message])/([user] [time] [message])'},
      {name: 'Emojify a message', value: 'emojify [message]'},
    )

    const page6 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Commands List (${prefix})`)
    .setDescription('Misc 2 🔣')
    .addFields(
      {name: 'Translate something', value: 'translate [term] to [language]'},
      {name: 'Check the join position of a member', value: 'joinposition, joinpos @[member]'},
      {name: 'Check conversion rate between two currencies', value: 'currency, convert, exchangerate, er [amount] [currency1] to/=> [currency2]'},
      {name: 'Check the Twitch subage of a user to a channel', value: 'subage, sa [user] [channel]'},
      {name: 'Search Dictionary for a word', value: 'define, dictionary, dic [word]'},
      {name: 'Search Urban Dictionary for a term', value: 'urban, urbandictionary, ud [term]'},
      {name: 'Get an ASCII braille of an image or emote', value: 'ascii [image]/[:emote:]'},
      {name: 'Get text from an image', value: 'ocr, ocrtranslate, scan [image]'},
      {name: 'See the first message of a channel', value: 'firstmessage, firstmsg'},
    )

    const page7 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username} Commands List (${prefix})`)
    .setDescription('🛠️')
    .addFields(
      {name: 'Change someone\'s nickname (MANAGE NICKNAMES ROLE REQUIRED)', value: 'nick, nickname @[member] [new nickname]'},
      {name: 'Reset someone\'s nickname (MANAGE NICKNAMES ROLE REQUIRED)', value: 'resetnick, nickrest @[member]'},
      {name: 'Kick (KICK MEMBERS ROLE REQUIRED)', value: 'kick @[member] [reason]'},
      {name: 'Ban (BAN MEMBERS ROLE REQUIRED)', value: 'ban @[member] [reason]'},
      {name: 'Purge (MANAGE MESSAGES ROLE REQUIRED, you cannot delete messages that are older than 14 days).', value: 'purge [number]'},
    )  

    const pages = [
      page1,
      page2,
      page3,
      page4,
      page5,
      page6,
      page7,
    ];

    const emoji = ['⏪' , '⏩'];

    const timeout = 120 * 1000;

    pagination(message, pages, emoji, timeout);
  }
};