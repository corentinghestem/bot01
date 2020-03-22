const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.delete();
    if(!message.author.id === "450341492825915402") {
       if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Tu n'as pas la permission de gérer les messages**").then(m => m.delete(5000))
    }
    if(!args[0]) return message.channel.send(`**Tu dois choisir un message à envoyer**`).then(m => m.delete(5000));
    let botMessage = args.join(" ");
    message.channel.send(botMessage);
}

module.exports.help = {
    name: "say"
}
