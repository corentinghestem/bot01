const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Vous n\'avez pas les permissions !'); } 
    else if (isNaN(args[0])) { return message.channel.send('**You have to specify a number of messages to delete !**'); }
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