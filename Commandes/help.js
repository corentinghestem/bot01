const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setColor("#ffd700")
        .setTitle("**Ash.'s list of commands**")
        .setDescription(` 
        **Hey ${message.author.username}, welcome to my documentation !** 
        My prefix is -
        I have 18 commands. 
        
        *If you have any kind of problem with my commands, questions to
         ask, or suggestions, please dm directly my creator Corentin#7595*`)
        .setThumbnail("https://cdn.discordapp.com/attachments/678389386446110731/682539959521116202/ash-logo.png")
    let moderationEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("Moderation commands [4]")
        .setDescription(`
        -kick <someone> | *kick any member*
        -ban <someone> | *ban any member*
        -report <someone> <reason> | *report a member to the staff*
        -clear <number of messages to delete> | *delete a number of messages* `)
    
    let utilityEmbed = new Discord.RichEmbed()
        .setColor("#3e68fd")
        .setTitle("Utility commands [8]")
        .setDescription(`
        -help | *show my available commands*
        -say <something> | *send something* 
        -dm <someone> <something> | *tell your message in private to someone*
        -poll <your question> | *create a simple yes or no poll*
        -uptime | *show how long I've been online*
        -insta <your instagram name> | *send your instagram profile*                      
        -server | *show some server informations*
        -invite | *send a link to invite me in your server* `)
        
    let funEmbed = new Discord.RichEmbed()
        .setColor("#5cf011")
        .setTitle("Fun commands [6]")
        .setDescription(`
        -cute <someone> | *show how cute is someone*
        -gay <someone> | *show how gay is someone*
        -ping | *display your ping*
        -avatar <someone> | *display the avatar of someone*
        -rps | *dreate a Rock / Paper / Scissors game*
        -meme | *send a random meme from reddit* `)
        .setFooter(`Thank you for downloading me, if you need any help click here`)
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
