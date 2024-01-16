const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client ({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log("bot on");

});

client.on("messageCreate", message => {
    if(message.author.bot) return;
    console.log(message)
    if(message.content === "*chut"){
        message.reply("https://tenor.com/view/rebeu-love-gif-9774000146426163765");
    }
});

client.on("messageCreate", message => {
    if(message.author.bot) return;
    console.log(message)
    if(message.content === "*help"){
        message.reply("vas te faire foutre");
    }
});





















client.login("MTE5NjIyOTg1Mjk3NDU1NTI3Ng.GlZecq.rWexQ6kCfG8ut6JSesVffkY8Pfy3deeksj5czQ");
