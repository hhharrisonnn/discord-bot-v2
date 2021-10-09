# discord-bot-v2
This is a multi-function Discord bot, with fun and moderation commands. This bot could be self-hosted either on a dedicated server or cloud hosting like AWS.

## Commands
*You can set your own prefix [here](#env)*.
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
- `joke` - Cringy joke
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
- `weather` - Check the weather of a location
- `afk` - Go AFK
- `nafk` - Return from AFK
- `remind` - Set a reminder
- `firstmessage` - See the first message of a channel
- `translate` - Translate something into English
- `emojify` - Emojify a message
- `joinposition` - Check the join position of a member
- `currency` - Check the conversion rate between two currencies
- `subage` - Check the Twitch subage of a user to a channel
- `define` - Get the definition of a word
- `urban` - Get the Urban definition of a word

### Moderation⚒
- `nick` - Change someone's nickname
- `resetnick` - Reset someone's nickname
- `kick` - Kick a member from the server
- `ban` - Ban a member from the server
- `purge` - Purge the chat

## Setup
Install the dependencies using npm. 

*note: this will not work with Discord.js V13*.

### Source code
To get the source code, run:
```
git clone https://github.com/hhharrisonnn/discord-bot-v2.git
```

### Dependencies
To get the dependencies, run:
```
npm install
```
or
```
npm i
```

### MongoDB
Setup a database using MongoDB:
1. Create a cluster
2. Connect your application and get the MongoDB SRV
3. Add the MongoDB SRV into the [.env](#env) file

### ExchangeRate-API
You will need an ExchangeRate-API key for [currency.js](https://github.com/hhharrisonnn/discord-bot-v2/blob/master/commands/currency.js):
1. Create an ExchangeRate-API account [here](https://app.exchangerate-api.com/sign-up)
2. Add the ExchangeRate key into the [.env](#env) file

### .env
1. Create a `.env` file to store your tokens 
2. Add in the values for each:
```
DISCORD_TOKEN = <YourDiscordToken>
MONGODB_SRV = <mongodb+srv://{yourinfo}>
EXCHANGERATE_KEY = <YourExchangeRateKey>
PREFIX = <yourPrefix>
```

### Starting the bot
Start the bot by typing:
```
node .
```