const Discord = require("discord.js");
const config = require("../storage/config.json");

module.exports.run = async(bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
        .setColor("#ffd700")
        .setTitle("__**Ash.'s list of commands**__", "https://discord.gg/aPZNbyD")
        .setDescription(` 
        **Hey ${message.author.username}, welcome to my documentation !** 
        My prefix is **${config.prefix}**
        I have 20 commands. `)
        .setFooter("If you any kind of question/suggestion, you can just dm me and I will answer you !")
        .setThumbnail("https://cdn.discordapp.com/attachments/678389386446110731/682539959521116202/ash-logo.png")
        .addField("**Moderation commands [5]**", "``ban``, ``kick``, ``(un)mute``, ``clear``")
        .addField("**Utility commands [9]**", "``help``, ``say``, ``dm``, ``embed``, ``poll``, ``uptime``, ``insta``, ``server``, ``info``, ``invite``")
        .addField("**Fun commands [6]**", "``cute``, ``gay``, ``ping``, ``avatar``, ``rps``, ``meme``")
    message.author.send(helpEmbed)
    message.channel.send(`**Check your dm ${message.author.username} !**`)
};

module.exports.help = {
    name: "help" 
}
