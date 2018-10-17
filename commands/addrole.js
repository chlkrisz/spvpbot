const Discord = require("discord.js");  

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("nope.avi");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Nem találom őt, te$$");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Mondjá' már egy rangot, te$$!");
  let gRole = message.guild.roles.find('name', role);
  if (!gRole) return message.reply("Ezt nem találom. Elírtad?");
  
  if (rMember.roles.has(gRole.id));
  await(rMember.addRole(gRole.id));
  
  try{
   message.channel.send('Sikeres volt a művelet! \:smiley:') 
  }
}
