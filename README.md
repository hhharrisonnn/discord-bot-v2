# discord-bot-v2
This is a multi-function Discord bot, with fun and moderation commands. This bot could be self-hosted either on a dedicated server or cloud hosting like AWS.

## Commands
*You can set your own prefix [here](#env-file)*
- `help`

### Currency💰
- `daily` - Claim daily bonus 2000 coins
- `roulette` - Roulette coins 
- `balance` - Check your balance
- `deposit` - Deposit coins
- `withdraw` - Withdraw coins
- `beg` - Beg for coins
- `givecoins` - Give someone coins

### Games🎱🎮🎲
- `8ball` - 8Ball answers a question
- `momjoke` - Mom joke
- `cookie` - Fortune cookie
- `juice` - Check juice level
- `weebify` - UwU-fy your message ! >.<
- `hw` - Hunt weebs
- `kw` - Kill weebs
- `cage` - Number of caged weebs

### Miscellaneous🔣
- `say` - Make the bot say something
- `perms` - Check permissions
- `avatar` - Avatar/profile picture of a user
- `afk` - Go AFK
- `nafk` - Return from AFK
- `remind` - Set a reminder
- `firstmessage` - See the first message of a channel
- `translate` - Translate something into English
- `emojify` - Emojify a message
- `joinposition` - Check the join position of a member

### Moderation⚒
- `nick` - Change someone's nickname
- `resetnick` - Reset someone's nickname
- `kick` - Kick a member from the server
- `ban` - Ban a member from the server
- `purge` - Purge the chat

## Setup
Install the dependencies using npm. *note: this will not work with Discord.js V13*

### Source code
To get the source code, run:
```
git clone https://github.com/hhharrisonnn/discord-bot-v2.git
```

### Dependencies
To get the dependencies, run this in /discord-bot-v2:
```
npm i discord.js@12.5.1 discord.js-pagination dotenv fs mongoose node-fetch translate-google weather-js
```
or
```
npm i discord.js@12.5.1
npm i discord.js-pagination
npm i dotenv
npm i fs
npm i mongoose
npm i node-fetch
npm i translate-google
npm i weather-js
```

### MongoDB
Setup a database using MongoDB:
1. Create a cluster
2. Connect your application and get the MongoDB SRV

### .env
A .env file is used for your tokens and custom prefix.
Create a .env file and fill in the following:
```
DISCORD_TOKEN = 
MONGODB_SRV = 
PREFIX = 
```