const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setStatus('dnd', '');
    client.user.setActivity("say !help", {
     type: "LISTENING",
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
      icon_url: client.user.avatarURL
    },
    description: "Jelenleg a segítség panel munkálatok alatt van!",
    timestamp: new Date(),
    footer: {
      icon_url: "https://www.adorama.com/images/Large/ro25.jpg",
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
