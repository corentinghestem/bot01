const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setColor("#ffd700")
        .setTitle("**Ash.'s list of commands**")
        .setDescription(` 
        **Hey ${message.author.username}, welcome to my documentation !** 
        My prefix is a!
        I have 19 commands. 
        
        *If you have any kind of problem with my commands, questions to
         ask, or suggestions, please dm directly my creator Corentin#7595*`)
        .setThumbnail("https://cdn.discordapp.com/attachments/678389386446110731/682539959521116202/ash-logo.png")
    let moderationEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle("Moderation commands [5]")
        .setDescription(`
        a!kick <someone> | *kick any member*
        a!ban <someone> | *ban any member*
        a!clear <number of messages to delete> | *delete a number of messages* 
        a!(un)mute <someone> <time> | *(un)mute someone for a certain duration*
        `)
    
    let utilityEmbed = new Discord.RichEmbed()
        .setColor("#3e68fd")
        .setTitle("Utility commands [8]")
        .setDescription(`
        a!help | *show my available commands*
        a!say <something> | *send something* 
        a!dm <someone> <something> | *tell your message in private to someone*
        a!embed <hex color> <something> | *send your message thanks to an embed*
        a!poll <your question> | *create a simple yes or no poll*
        a!uptime | *show how long I've been online*
        a!insta <your instagram name> | *send your instagram profile*                      
        a!server | *show some server informations*
        a!invite | *send a link to invite me in your server* `)
        
    let funEmbed = new Discord.RichEmbed()
        .setColor("#5cf011")
        .setTitle("Fun commands [6]")
        .setDescription(`
        a!cute <someone> | *show how cute is someone*
        a!gay <someone> | *show how gay is someone*
        a!ping | *display your ping*
        a!avatar <someone> | *display the avatar of someone*
        a!rps | *create a Rock / Paper / Scissors game*
        a!meme | *send a random meme from reddit* `)
        .setFooter(`Thank you for downloading me, if you need any help click here`)
        .setTimestamp()
    message.author.send(helpEmbed)
    message.author.send(moderationEmbed)
    message.author.send(utilityEmbed)
    message.author.send(funEmbed)
    message.channel.send(`**Check your dm ${message.author.username} !**`)
};

module.exports.help = {
    name: "help" 
}

