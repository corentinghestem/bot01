const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let serverEmbed = new Discord.RichEmbed()
        .setColor("#ecfb00")
        .addField("Name :", message.guild.name)
        .addField("Creation :", message.guild.createdAt)
        .addField("Membercount :", `${message.guild.memberCount} members`)
        .addField("Channelcount :", `${message.guild.channels.size} channels`)
        .addField("Position :", message.guild.position + " (not ready)")
        .addField("Owner :", message.guild.owner)
        .setFooter(`ID: ${message.guild.id}`)
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
    message.channel.send(serverEmbed)
}

module.exports.help = {
    name: "server"
}