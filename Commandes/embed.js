const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need permissions btw")
    let color = args[0]
    if(!color) return message.channel.send("Don't forget to choose a color !")
    let messageEmbed = args.slice(1).join(" ");
    if(!messageEmbed) return message.channel.send("You have to enter a message for your embed !")

    let botEmbed = new Discord.RichEmbed()
       .setColor(color)
       .setDescription(messageEmbed)
       .setAuthor(`© ${bot.user.tag}`, bot.user.displayAvatarURL)
       .setTimestamp()
    message.channel.send(botEmbed);
    console.log(`> Commande réalisée par ${message.author.username} :
    -embed ${args} `);
}

module.exports.help = {
    name: "embed"
}