const Discord = require("discord.js");
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) => {
    if(!message.author.id === config.myUserID) {
         if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send("**Vous n'avez pas la permission de gérer les messages**").then(m => m.delete(5000)) }
    }
    if(!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return message.channel.send("**Je n'ai pas la permission de gérer les messages**").then((m) => m.delete(5000))
    if (isNaN(args[0])) { return message.channel.send('**Il faut spécifier un nombre de messages à supprimer**').then(m => m.delete(5000)) }
    message.channel.bulkDelete(Number(args[0]) + 1)
        .then((messages) => { 
            message.channel.send(`**${messages.size - 1} messages ont été supprimé avec succès**`).then((m) => {
                setTimeout(() => {
                    m.delete()
                  }, 5000)
            });
        }); 
}; 

module.exports.help = {
    name: "clear"
}