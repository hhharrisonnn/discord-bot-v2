const pagination = require('discord.js-pagination')
const discord = require('discord.js')
module.exports = {
  name: 'commands',
  permissions: [],
  aliases: ['c', 'help', 'h'],
  cooldown: 300,
  description: "Shows list of commands.",
  execute(message, args, cmd, client, Discord) {
      const page1 = new discord.MessageEmbed()
      .setTitle('TheCarbonBot Commands List')
      .setDescription('💰')
      .addFields(
          {name: 'Claim daily bonus 2000 coins', value: '$daily'},
          {name: 'Roulette coins', value: '$roulette, $r [number]'},
          {name: 'Balance', value: '$balance, $bal, $b'},
          {name: 'Deposit coins, 1 day cooldown', value: '$deposit, $dep [number]'},
          {name: 'Withdraw coins', value: '$withdraw, $wd [number]'},
          {name: 'Beg for coins (cringe), 1 hour cooldown', value: '$beg'},
          {name: 'Give coins to someone', value: '$givecoins, $gc, $givepoints, $gp'},
      )
      const page2 = new discord.MessageEmbed()
      .setTitle('TheCarbonBot Commands List')
      .setDescription('🎱🎮🎲')
      .addFields(
          {name: '8Ball', value: '$8ball [question]'},
          {name: 'Mom joke', value: '$momjoke, $mumjoke'},
          {name: 'Fortune cookie', value: '$cookie, $fortunecookie'},
          {name: 'Check juice level😂', value: '$juice'},
          {name: 'Check cock size', value: '$cock'},
      )   

      const page3 = new discord.MessageEmbed()
      .setTitle('TheCarbonBot Commands List')
      .setDescription('🏹')
      .addFields(
          {name: 'Hunt weebs', value: '$huntweebs, $hw'},
          {name: 'Kill weebs', value: '$killweebs, $kw [amount]'},
          {name: 'Number of weebs in cage', value: '$caged, $cage, $cagedweebs'},
      )   


      const page4 = new discord.MessageEmbed()
      .setTitle('TheCarbonBot Commands List')
      .setDescription('Misc 🔣')
      .addFields(
          {name: 'Say', value: '$say #[channel] [message]'},
          {name: 'Check your permissions', value: '$perms'},
          {name: 'Avatar/profile pic of a user', value: '$avatar, $profilepic, $pfp, $icon @[member]'},
          {name: 'Weather', value: '$weather [location]'},
          {name: 'Purge (ADMIN ONLY, you cannot delete messages that are older than 14 days).', value: '$purge [number]'},
          {name: 'Go AFK', value: '$afk'},
          {name: 'Return from AFK', value: '$nafk, $return, $rafk'},
          {name: 'Remind (you can only remind yourself for now)', value: '$remind [time] [reminder]'},
      )  
      const page5 = new discord.MessageEmbed()
      .setTitle('TheCarbonBot Commands List')
      .setDescription('🛠️')
      .addFields(
          {name: 'Change someone\'s nickname (MANAGE NICKNAMES ROLE ONLY)', value: '$nick, $nickname @[member] [new nickname]'},
          {name: 'Reset someone\'s nickname (MANAGE NICKNAMES ROLE ONLY)', value: '$resetnick, $nickrest @[member]'},
          {name: 'Kick (ADMIN ONLY)', value: '$kick @[member]'},
          {name: 'Ban (ADMIN ONLY)', value: '$ban @[member]'},
          {name: 'Purge (ADMIN ONLY, you cannot delete messages that are older than 14 days).', value: '$purge [number]'},
      )  
      const pages = [
          page1,
          page2,
          page3,
          page4,
          page5
      ]
      const emoji = ["⏪" , "⏩"]

      const timeout = 15 * 1000

      pagination(message, pages, emoji, timeout)
  }
};
