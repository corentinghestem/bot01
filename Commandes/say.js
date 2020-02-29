const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.send("**You need permissions btw**")
    let botMessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botMessage);
    console.log(`> Commande réalisée par ${message.author.username} :
    -say ${args} `);
}

module.exports.help = {
    name: "say"
}
