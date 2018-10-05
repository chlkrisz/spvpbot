const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const hook = new Discord.WebhookClient('496755807644287013', 'EyAHkCwQycVEdvm2UWtmkZ0JF8j7tHeTrzjaluQzGPHJEuTHHbhKcJEvI6oRrnouXF-o');
const kozlobot = new Discord.WebhookClient('496760864649773076', 'EFjXuitcbd72JooAJPbYU6LXlAyfpMUeKGzm4j_7ffwm01yQC0nrdPoyWuB2ipxlFzd9');
let kodolasalatt = "káromkodásszűrő";

kozlobot.send ('A SkyPVP Bot sikeresen újra lett indítva! \:wink:')



client.on("ready", () => {
  console.log('Készen állok, te$$');
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setStatus('idle', '');
    client.user.setActivity(`say !help | MANAGING ${client.guilds.size} servers`, {
     type: "STREAMING",
     url: "https://www.twitch.tv/chlkrisz"
    });
});

module.exports.run = async (bot, message, args)  => {
 if(message.author.bot) return; 
 message.react('👍');
}

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;
  const msg = message.content.toUpperCase();
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
if(command === "help") {
  
        message.channel.startTyping();
        setTimeout(()=>{
            message.channel.send({embed: {
             color: 3447003,
             author: {
                name: "Segítség | SkyPVP Bot",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png"
              },
              description: "Az összes parancs leírva!",
              fields:[
                {
                  name: "!help",
                  value: "Ez a panel. \:smile:"
                },
                {
                  name: "!credits",
                  value: "A bot készítőjét elküldni neked privát üzenetben. \:tada:"
                },
              ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.displayAvatarURL,
      text: "Kérte: " + message.author.username
    }
  }
});
            message.channel.stopTyping();
        },1000)
  
}
  
if(command === "test") {
 message.delete().catch(); 
 message.channel.send("Teszt!");
}
  
if(command === "credits") {
 message.delete().catch;
 message.author.send({embed: {
             color: 3447003,
             author: {
                name: "Készítő",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png"
              },
              description: "Chlkrisz#1820",
    timestamp: new Date(),
    footer: {
      icon_url: message.author.displayAvatarURL,
      text: "Te kérted. \:smile:"
    }
  }
})
  
}
  
if (command === "say") {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("nope.avi");
   let botmessage1 = args.join(" ");
   message.delete().catch();
   message.channel.send(botmessage1); 
}
  
if (command === "hirsay") {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("nope.avi");
   let botmessage2 = args.join(" ");
   message.delete().catch();
   hook.send(botmessage2); 
}
  
if(command === "ruleshere") {
   
   message.channel.send({embed: {
             color: 3447003,
             author: {
                name: "Szabályok | SkyPVP Bot",
                icon_url: "http://users.atw.hu/kankutya/pictures/179386.png"
              },
              description: "Üdvözlünk a szerverünkön! \:tada:\:hugging: Reméljük, hogy jól fogod magad érezni!\n\:exclamation: Viszont mint mindenhol, itt is vannak szabályok. \:exclamation:",
    fields: [{
        name: "1. szabály",
        value: "**Ne beszélj csúnyán!**\nNem szeretjük a csúnya beszédet, kérünk, te se beszélj csúnyán! \:smiley:"
      },
    {
        name: "2. szabály",
        value: "**Ne reklámozz szervereket!**\nKérünk, hogy ne reklámozd a saját, vagy más szerverét! \:wink:"
      },
    {
        name: "3. szabály",
        value: "**Ne szidd a tagokat!**\nA szidásban lehet csúnya beszéd, ezért talán még kettő szabályt is képes vagy egyszerre megszegni! \:open_mouth:"
    },   
    {
        name: "Jó szórakozást kívánunk!",
        value: "Ha nem viselkedsz jól, /ban <:kappa:496750955883134978>"
      } 
    ],
    
    footer: {
      text: "(c) SkyPVP Bot"
    }
  }
});
   
   
}
  
if(command === "mivankodolasalatt") {
 message.delete().catch();
 message.channel.send("Jelenleg ez van kódolás alatt: " + kodolasalatt);
  
}
if(command === "tre") {
        message.channel.startTyping();
        setTimeout(()=>{
            message.channel.send("Testing to ForeverTyping!");
            message.channel.stopTyping();
        },2000)
}
});
  client.login(config.token);
