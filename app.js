const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setStatus('idle', '');
    client.user.setActivity(`say !help | MANAGING ${client.guilds.size} servers`, {
     type: "WATCHING",
     url: "https://www.twitch.tv/chlkrisz"
    });
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if (msg.includes('fasz')) {
 message.delete(); 
 message.author.send('A **fasz** szó csúnya szó! Elolvastad a szabályokat?')
}
  
  

  
if(command === "help") {
  
        message.channel.startTyping();
        setTimeout(()=>{
            message.channel.send({embed: {
             color: 3447003,
             author: {
                name: "Segítség | SkyPVP Bot",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png"
              },
              description: "Ez a panel kódolás alatt van!",
    timestamp: new Date(),
    footer: {
      icon_url: message.author.displayAvatarURL,
      text: "Kérte: " + message.author.username
    }
  }
});
            message.channel.stopTyping();
        },200)
  
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
        value: "Ne beszélj csúnyán!\nNem szeretjük a csúnya beszédet, kérünk, te se beszélj csúnyán! \:smiley:"
      },
    {
        name: "2. szabály",
        value: "Ne reklámozz szervereket!\nKérünk, hogy ne reklámozd a saját, vagy más szerverét!"
      }
    ],
    footer: {
      text: "(c) SkyPVP Bot"
    }
  }
});
   
   
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
