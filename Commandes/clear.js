const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.delete();
    if(!message.author.id === "450341492825915402") {
         if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send("You don't have permissions btw").then(m => m.delete(5000)) }
    }
    else if (isNaN(args[0])) { return message.channel.send('**You have to specify a number of messages to delete !**').then(m => m.delete(5000)) }
    message.channel.bulkDelete(Number(args[0]) + 1)
        .then((messages) => { 
            message.channel.send(`**${messages.size - 1} messages just got deleted !**`).then((m) => {
                setTimeout(() => {
                    m.delete()
                  }, 5000)
            });
        }); 
}; 

module.exports.help = {
    name: "clear"
}