module.exports = {
  name: 'commands',
  permissions: [],
  aliases: ['c', 'help', 'h'],
  cooldown: 300,
  description: "Shows list of commands.",
  execute(message, args, cmd, client, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('TheCarbonBot Command List')
    .addFields(
      {name: 'Commands', value: '$help, $h, $commands, $c'},
      {name: 'Fortune cookie', value: '$cookie, $fortunecookie'},
      {name: 'Claim daily bonus 2000 coins', value: '$daily'},
      {name: 'Roulette coins', value: '$roulette, $r [number]'},
      {name: 'Balance', value: '$balance, $bal, $b'},
      {name: 'Deposit coins, 1 day cooldown', value: '$deposit, $dep [number]'},
      {name: 'Withdraw coins', value: '$withdraw, $wd [number]'},
      {name: 'Beg for coins (cringe), 1 hour cooldown', value: '$beg'},
      {name: '8Ball', value: '$8ball [question]'},
      {name: 'Momjoke', value: '$momjoke, $mumjoke'},
      {name: 'Remind (you can only remind yourself for now)', value: '$remind [time] [reminder]'},
      {name: 'Huntweebs', value: '$huntweebs, $hw'},
      {name: 'Killweebs', value: '$killweebs, $kw [amount]'},
      {name: 'Number of weebs in cage', value: '$caged, $cage, $cagedweebs'},
      {name: 'Check juice level😂', value: '$juice'},
      {name: 'Say', value: '$say #[channel] [message]'},
      {name: 'Check your permissions', value: '$perms'},
      {name: 'Avatar/profile pic of a user', value: '$avatar, $profilepic, $pfp, $icon @[member]'},
      {name: 'Weather', value: '$weather [location]'},
      {name: 'Check cock size', value: '$cock'},
      {name: 'Change someone\'s nickname (MANAGE NICKNAMES ROLE ONLY)', value: '$nick, $nickname @[member] [new nickname]'},
      {name: 'Reset someone\'s nickname (MANAGE NICKNAMES ROLE ONLY)', value: '$resetnick, $nickrest @[member]'},
      {name: 'Kick (ADMIN ONLY)', value: '$kick @[member]'},
      {name: 'Purge (ADMIN ONLY, you cannot delete messages that are older than 14 days).', value: '$purge [number]'},
    ) 
    .setFooter('Bot made by harrison#1058 :)')

    message.channel.send(newEmbed)
  }
}