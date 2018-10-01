const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
    client.user.setStatus('idle', '');
    client.user.setActivity(`say !help | MANAGING ${client.guilds.size} servers`, {
     type: "LISTENING",
     url: "https://www.twitch.tv/chlkrisz"
    });
});

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  
  

  
if(command === "help") {
  

  const times = 40;
for (i = 0; i < (times + 1); i++) {
    message.channel.startTyping();
}

  
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
