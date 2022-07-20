const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const fs = require("fs");
  const express = require('express');
const server = express();
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS
  ]
});
require("dotenv").config();

client.commands = new Collection();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

// CommonJs


// Declare a route


// Run the server!


(async () => {


server.all('/', (req, res) => {
    res.send('<h2>Server is ready!</h2>');
});


    server.listen(4000, () => {
        console.log('Server Ready.');
    });
  for (file of functions) {
    require(`./functions/${file}`)(client);
  }
  client.handleEvents(eventFiles, "./src/events");
  client.handleCommands(commandFolders, "./src/commands");
  client.login(process.env.token);

})();