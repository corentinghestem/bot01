const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setColor("#ffd700")
        .setTitle("**Ash.'s list of commands**")
        .setDescription(` 
        Hey ${message.author.username}, welcome to my documentation !
        My prefix is -
        I have 18 commands. `)
        .setThumbnail("https://cdn.discordapp.com/attachments/678389386446110731/682539959521116202/ash-logo.png")
    let moderationEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("Moderation commands [4]")
        .setDescription(`
        -kick <member> | *kick any member*
        -ban <member> | *ban any member*
        -report <member> <reason> | *report a member to the staff*
        -clear <number of messages to delete> | *delete a number of messages* `)
    
    let utilityEmbed = new Discord.RichEmbed()
        .setColor("#3e68fd")
        .setTitle("Utility commands [7]")
        .setDescription(`
        -help | *show my available commands*
        -say <your message> | *send your message* 
        -poll <your question> | *create a simple yes or no poll*
        -uptime | *show how long I've been online*
        -insta <your instagram name> | *send your instagram profile*
        -server | *show some server informations*
        -invite | *send a link to invite me in your server* `)
        
    let funEmbed = new Discord.RichEmbed()
        .setColor("#5cf011")
        .setTitle("Fun commands [7]")
        .setDescription(`
        -cute <member> | *show how cute are you*
        -gay <member> | *show how gay are you*
        -ping | *display your ping*
        -avatar | *Display your avatar*
        -rps | *Create a Rock / Paper / Scissors game*
        -meme | *Send a random meme from reddit* 
        -uptime | *show since when Im online* `)
        .setFooter("Thank you for downloading me")
        .setTimestamp()
    message.author.send(helpEmbed)
    message.author.send(moderationEmbed)
    message.author.send(utilityEmbed)
    message.author.send(funEmbed)
    message.channel.send(`**Check your dm ${message.author.username} !**`)
    console.log(`> Commande réalisée par ${message.author.username} :
    -help ${args} `);
};

module.exports.help = {
    name: "help" 
}
