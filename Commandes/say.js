const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.delete();
    if(!message.author.id === "450341492825915402") {
       if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You need permissions btw**").then(m => m.delete(5000))
    }
    if(!args[0]) return message.channel.send(`**You have to tell something ${message.author.username} !**`).then(m => m.delete(5000));
    let botMessage = args.join(" ");
    message.channel.send(botMessage);
}

module.exports.help = {
    name: "say"
}
