require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("message", msg => {
  if (msg.content === "welcome") {
    msg.reply("hello! welcome to the RFA server!");
  }
})

client.login(process.env.TOKEN)