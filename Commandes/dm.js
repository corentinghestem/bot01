const Discord = require('discord.js');
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) => {
    message.delete(5000);
    let concernedMember = message.mentions.users.first() || bot.users.get(args[0])
    let concernedMessage = args.slice(1).join(" ");
    if(!message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I don\'t have permissions to manage messages btw**').then(m => m.delete(5000));  
    if(!message.author.id === config.myUserID) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You don't have permissions to manage messages !**").then(m => m.delete(5000));
    }
        if(!args[0])  return message.channel.send("**You have to mention an user**").then(m => m.delete(5000));
        if(!concernedMember) return message.channel.send("**Sorry, I can't find this user**").then(m => m.delete(5000));
            if(!args[1]) return message.channel.send(`**You have to tell ${concernedMember} something !**`).then(m => m.delete(5000));
    concernedMember.send(concernedMessage);
        await message.react('✅')
}

module.exports.help = {
    name:"dm"
}