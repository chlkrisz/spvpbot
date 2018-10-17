const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const hook = new Discord.WebhookClient('496755807644287013', 'EyAHkCwQycVEdvm2UWtmkZ0JF8j7tHeTrzjaluQzGPHJEuTHHbhKcJEvI6oRrnouXF-o');
const kozlobot = new Discord.WebhookClient('496760864649773076', 'EFjXuitcbd72JooAJPbYU6LXlAyfpMUeKGzm4j_7ffwm01yQC0nrdPoyWuB2ipxlFzd9');
let kodolasalatt = "káromkodásszűrő";

// Hey! This is MY BOT! Please DON'T STOLE MY BOT'S TOKEN! Thanks! :) //



kozlobot.send ('A SkyPVP Bot sikeresen újra lett indítva! \:wink: \:tada: \:smiley:')

client.on("ready", () => {
  console.log('nagykutya69');
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setStatus('dnd', '');
    client.user.setActivity(`say !help/!help-en | MANAGING ${client.guilds.size} server(s)`, {
     type: "WATCHING",
     url: "https://www.twitch.tv/chlkrisz"
    });
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'értesítések');
  channel.sendMessage(`${member} is megjött!`);
  member.addRole(member.guild.roles.find('name', 'Member'));
  member.sendMessage('Üdvözlünk a szerverünkön! Reméljük, hogy jól fogod magad érezni rajta!');
});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.find('name', 'értesítések');
  channel.sendMessage(`${member} elment! -1 ember :c`);
  member.sendMessage('Miért mentél el? :c');
});


client.on('message', message => {
    #its night bro
    message.delete();
});

client.on("message", async message => {

  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  const msg = message.content.toUpperCase();
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "help-en") {
  
        message.channel.startTyping();
        setTimeout(()=>{
            message.channel.send({embed: {
             color: Math.floor(Math.random() * 16777214) + 1,
             author: {
                name: "Help | SkyPVP Bot 🇬🇧",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png"
              },
              description: "All the commands are described!",
              fields:[
                {
                  name: "!help-en",
                  value: "This. \:smile:"
                },
                {
                  name: "!credits-en",
                  value: "It describes the bot's creator in a private message for you. \:tada:"
                },
              ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.displayAvatarURL,
      text: "Requested by " + message.author.username
    }
  }
});
            message.channel.stopTyping();
        },1000)
  
}
  
  
  
if(command === "help") {
  
        message.channel.startTyping();
        setTimeout(()=>{
            message.channel.send({embed: {
             color: Math.floor(Math.random() * 16777214) + 1,
             author: {
                name: "Segítség | SkyPVP Bot 🇭🇺",
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
  
if(command === "credits-en") {
 message.delete().catch;
 message.author.send({embed: {
             color: Math.floor(Math.random() * 16777214) + 1,
             author: {
                name: "Creator",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png"
              },
              description: "Chlkrisz#1820",
    timestamp: new Date(),
    footer: {
      icon_url: message.author.displayAvatarURL,
      text: "Requested by you."
    }
  }
})
  
}
  
if(command === "credits") {
 message.delete().catch;
 message.author.send({embed: {
             color: Math.floor(Math.random() * 16777214) + 1,
             author: {
                name: "Készítő",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png"
              },
              description: "Chlkrisz#1820",
    timestamp: new Date(),
    footer: {
      icon_url: message.author.displayAvatarURL,
      text: "Te kérted."
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
            message.channel.send("asd");
            message.channel.stopTyping();
        },4000)
}
});
  client.login(config.token);
