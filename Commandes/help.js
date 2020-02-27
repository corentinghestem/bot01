const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setColor("#1e28b6")
        .setTitle("**Welcome to my documentation !**")
        .setDescription(`
        **My prefix is -**

        \`\`\`Moderation\`\`\`
        -kick <member> | *kick any member*
        -ban <member> | *ban any member*
        -report <member> <reason> | *report a member to the staff*
        -clear <number of messages to delete> | *delete a number of messages*

        \`\`\`Tools and utilities\`\`\`
        -help | *show my available commands*
        -say <your message> | *send your message* 
        -poll <your question> | *create a simple yes or no poll*
        -uptime | *show how long I've been online*
        -insta <your instagram name> | *send your instagram profile*
        -server | *show some server informations*
        -invite | *send a link to invite me in your server*

        \`\`\`Fun commands\`\`\`
        -ping | *display your ping*
        -avatar | *Display your avatar*
        -slots | *Create a random slot of fruits*
        -rps | *Create a Rock / Paper / Scissors game*
        -meme | *Send a random meme from reddit*
        `)
        .setFooter("Bot made by Corentin#7595")
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/678389386446110731/682539959521116202/ash-logo.png")
    message.author.send(helpEmbed)
    message.channel.send(`**Check your dm ${message.author.username} !**`)
};

module.exports.help = {
    name: "help" 
}
