/*
______               ______         _     _   _              _    _               
|  _  \              | ___ \       | |   | | | |            | |  (_)              
| | | |  __ _  _ __  | |_/ /  ___  | |_  | |_| |  ___   ___ | |_  _  _ __    __ _ 
| | | | / _` || '_ \ | ___ \ / _ \ | __| |  _  | / _ \ / __|| __|| || '_ \  / _` |
| |/ / | (_| || | | || |_/ /| (_) || |_  | | | || (_) |\__ \| |_ | || | | || (_| |
|___/   \__,_||_| |_|\____/  \___/  \__| \_| |_/ \___/ |___/ \__||_||_| |_| \__, |
                                                                             __/ |
                                                                            |___/ 
Free Discord bot hosting! Free forever, 99.98% uptime, No restarts!, 
*/

//Require packages
global.Discord = require("discord.js");
global.client = new Discord.Client();
global.fs = require("fs");
const config = require("./config.json");
const node = require('nodeactyl');
global.Application = node.Application;

//Nodeactyl Login
Application.login(config.NodeactylURL, config.NodeactylAPI, (logged_in) => {
    console.log("Now logged into " + config.CompanyName + "'s pterodactyl");
});

client.on("ready", async () => {
    console.log("\nBot is now online \n\nBot Stats: \n" + client.guilds.size.toLocaleString() + " servers, \n" + client.channels.size.toLocaleString() + " channels, \n" + client.guilds.reduce((p, c) => p + c.memberCount, 0).toLocaleString() + " users!");
    client.user.setActivity(`over the status of ` + config.CompanyName, { type: "WATCHING"})
  });

client.login(config.Token)