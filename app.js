const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setStatus('online', '');
    client.user.setActivity("say !help", {
     type: "STREAMING",
     url: "https://www.twitch.tv/chlkrisz"
    });
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  
  

if(command === "tre") {
  
message.channel.send("Jelenleg ez ki van törölve, bocsesz! ***-CHLKRISZ***");
  
}
  
if(command === "help") {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: "Segítség",
      icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pictogram_voting_question.svg/220px-Pictogram_voting_question.svg.png"
    },
    description: "Jelenleg a segítség panel munkálatok alatt van!",
    timestamp: new Date(),
    footer: {
      text: "© SkyPVP Bot"
    }
  }
});
  
if(command === "kaki") {
  message.send("Easter Egg! \:poop:")
  
};
 }
});
  client.login(config.token);
