const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client;

client.on('ready', () => {
  console.log('Bot is online.')
});

client.on("message", msg => {
  if (msg.content === "welcome") {
    msg.reply("hello! welcome to the RFA server!");
  }
})

client.login(process.env.TOKEN)