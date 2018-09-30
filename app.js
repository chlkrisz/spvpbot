const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
  client.user.setActivity(`Pokémon`, {
      type: "WATCHING",
      url: "https://www.twitch.tv"
  });
});

function altgen() {
  var rand = ['user:155',
  'asgasg:123',
  '15132:sfasf'];

  return rand[Math.floor(Math.random()*rand.length)];
}

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === "generate") {
  message.channel.send("**Generating alts...**");
    message.author.send(altgen());
  }
});

  client.login(config.token);
