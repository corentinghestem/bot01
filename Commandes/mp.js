const Discord = require('discord.js');
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) => {
    message.delete();
    let concernedMember = message.mentions.users.first() || bot.users.get(args[0])
    let concernedMessage = args.slice(1).join(" ");
    if(!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**Je n\' ai pas la permission de gérer les messages**').then(m => m.delete(5000));  
    if(!message.author.id === config.myUserID) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Tu n'as pas la permission de gérer les messages**").then(m => m.delete(5000));
    }
        if(!args[0])  return message.channel.send("**Il faut mentionner un destinataire**").then(m => m.delete(5000));
        if(!concernedMember) return message.channel.send("**Je ne trouve pas cet utilisateur dans le serveur**").then(m => m.delete(5000));
            if(!args[1]) return message.channel.send(`**Il faut dire quelque chose ${concernedMember.username}**`).then(m => m.delete(5000));
    concernedMember.send(concernedMessage)
    message.channel.send("**Message envoyé avec succès**").then((m) => m.delete(5000))
}

module.exports.help = {
    name:"mp"
}
 
