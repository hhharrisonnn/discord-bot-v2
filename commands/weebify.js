module.exports = { 
  name: 'weebify', 
  permissions: [], 
  cooldown: 0, 
  aliases: ['uwu', 'uwufy', 'owo'], 
  description: 'uWu uwe message >.<', 
 
  async execute(message, args, cmd, client, Discord, profileData) { 
    if (!args.length) 
      return message.reply('Please enter a message to uWufy >.<.'); 
 
    faces = [ 
      '(・`ω´・)', 
      ';;w;;', 
      'owo', 
      'UwU', 
      '>w<', 
      '^w^', 
      '( =①ω①=)', 
      '=＾● ⋏ ●＾=', 
      '（ΦωΦ）', 
      '⁽⁽ଘ( ˊωˋ )ଓ⁾⁾ ', 
      '– ̗̀ (ᵕ꒳ᵕ) ̖́ –', 
      '(⁄˘⁄ ⁄ ω⁄ ⁄ ˘⁄)♡', 
      ' (U ᵕ U❁)', 
      ' ( ´ω` )۶', 
    ]; 
 
    let msg = args.join(' '); 
    let uwuMessage = msg 
      .replace(/(?:r|l)/g, 'w') 
      .replace(/(?:R|L)/g, 'W') 
      .replace(/(n)([aeiou])/gi, '$1y$2') 
      .replace(/ove/g, 'uv') 
      .replace(/th/g, 'ff') 
      .replace( 
        /\!+/g, 
        ' ' + faces[Math.floor(Math.random() * faces.length)] + ' ' 
      ); 
 
    message.channel.send(uwuMessage); 
  }, 
}; 

