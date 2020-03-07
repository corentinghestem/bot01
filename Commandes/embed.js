const Discord = require('discord.js');
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) =>{
    message.delete();
    if(!message.author.id === config.myUserID) {
         if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You don't have permissions to manage messages !**").then((m) => m.delete(5000))
    }
    let color = args[0]
    if(!color) return message.channel.send("**Don't forget to choose a color for your embed !**").then((m) => m.delete(5000))
    let errorMessage = new Discord.RichEmbed()
       .setTitle("**Don't forget to choose a color for your embed.**")
       .setColor("#ffffff")
       .setDescription(`**How to choose it ?**

       To select its colors, Discord uses the color code proposed by HTML and CSS called "HEX". This color code allows to designate thousands of colors by using only 6 characters. It is written using a sequence of 6 digits/letters behind a hashtag. For example the color black is written \`\`#ffffffff\`\`.

       We use here this color code to choose the color of our embed. To create one, you have to choose a "HEX" color. *Don't forget the hashtag!*

       To make it easier for you, here is a site with all usable colors and their characteristics:
       https://www.color-hex.com/
    `)
    if(!color.startsWith("#")) return message.channel.send(errorMessage)

    let messageEmbed = args.slice(1).join(" ");
    if(!messageEmbed) return message.channel.send("**Don't forget to choose a color for your embd !**").then((m) => m.delete(5000))

    let botEmbed = new Discord.RichEmbed()
       .setColor(color)
       .setDescription(messageEmbed)
       .setTimestamp()
    message.channel.send(botEmbed);
}

module.exports.help = {
    name: "embed"
}