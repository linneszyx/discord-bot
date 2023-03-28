/*
The code initializes a new instance of the Discord.Client class with specified intents and partials. 
The intents array specifies which events the bot will receive from the Discord API. The included intents are:

GUILDS: receiving guild events
GUILD_MESSAGES: receiving messages sent in guild channels
DIRECT_MESSAGES: receiving direct messages

The partials array specifies which larger objects the bot should receive as "partials" - meaning they will not have all information that they normally would. The included partials are:

MESSAGE: receiving partial message objects
CHANNEL: receiving partial channel objects
REACTION: receiving partial reaction objects
USER: receiving partial user objects
*/
const Discord = require("discord.js");
const { GatewayIntentBits } = require("discord.js");
const Client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages
  ],
  partials: [
    "MESSAGE",
    "CHANNEL",
    "REACTION",
    "USER"
  ],
});
Client.on("ready", () => {
  console.log(Client.user.tag + " is ready!");
});
Client.on("messageCreate", (message) => {
    if(message.author.bot == false && message.content.startsWith("!") ) {
        if (message.content === "!ping") {
            message.reply("pong!");
            console.log(message);
        }
        else if(message.content=="!hello"){
            message.reply("hi!");
            console.log(message);
        }
        else{
            message.reply("I don't understand!");
            console.log(message);
        }
    }
});

Client.login(
  "MTA5MDI3MjA1NTU2OTY4NjY3MA.GrRGqU.msGIVlGZdvQ0FTDh4CbnfFvwsxNBQ0zprXe5T0"
);
