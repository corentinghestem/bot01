const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let début = Date.now(); 
    message.channel.send('Ping') 
        .then((m) => m.edit(`**Pong : ${Date.now() - début}ms**`)); 
}; 

module.exports.help = {
    name: "ping"
}