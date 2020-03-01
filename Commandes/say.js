const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You need permissions btw**").then(m => m.delete(5000))
    let botMessage = args.join(" ");
    message.delete()
    message.channel.send(botMessage);
    console.log(`> Commande réalisée par ${message.author.username} :
    -say ${args} `);
}

module.exports.help = {
    name: "say"
}
