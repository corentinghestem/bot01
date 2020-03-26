const Discord = require('discord.js');
module.exports.run = (bot, message) => {
    let emojiSize = message.guild.emojis.size
    let emojiList = message.guild.emojis.map(e=>e.toString()).join(" | ")
    let emojiRanged = message.guild.emojis.map(e=>e.toString()).slice(0, 50).join(" | ")
    if(!emojiList) emojiList = "*Pour en rajouter, veuillez contacter un administrateur.*"
    if(message.guild.features.length < 2) emojiMax = 50
    if(message.guild.features.length === 2) emojiMax = 100
    if(message.guild.features.length === 3) emojiMax = 150
    if(message.guild.features.length > 3) emojiMax = 250
    if(emojiSize == 0) emojiTitle = "**Le serveur ne possède aucun emoji disponible**"
    if(emojiSize == 1) emojiTitle = "**Le serveur possède un seul emoji disponible**"
    if(emojiSize > 1) emojiTitle = `**Le serveur possède ${emojiSize} emojis disponibles**`
    if(emojiSize > 50) emojiList = `*Je ne peux pas afficher tout les emojis du serveur, mais voici les 50 premiers :*

    ${emojiRanged}`
    const emojiEmbed = new Discord.RichEmbed()
       .setColor("#ffd700")
       .setTitle(emojiTitle)
       .setFooter(`Emojis utilisés : ${emojiSize}/${emojiMax}`)
       .setDescription(emojiList)
       .setTimestamp()
       .setAuthor(message.guild.name, message.guild.iconURL)
    message.channel.send(emojiEmbed)
}
module.exports.help = {
    name: "emojis"
}