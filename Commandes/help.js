const Discord = require("discord.js");
const config = require("../storage/config.json");

module.exports.run = async(bot, message, author) => {
    let firstEmbed = await message.channel.send(`**Hey, where do you want to check my commands ?**
    
<:notification:685952345456115737>  - In my dm
<:list:685951908909023277> - In this channel`)
    let helpEmbed = new Discord.RichEmbed()
        .setColor("#3e68fd")
        .setTitle("__**Ash.'s list of commands**__", "https://discord.gg/aPZNbyD")
        .setDescription(` 
        **Hey ${message.author.username}, welcome to my documentation !** 
        My prefix is **${config.prefix}**
        I have 23 commands. `)
        .setFooter("If you have any kind of question/suggestion you can just dm me !")
        .setThumbnail("https://cdn.discordapp.com/attachments/678389386446110731/682539959521116202/ash-logo.png")
        .addField("**Moderation commands [5]**", "``ban``, ``kick``, ``(un)mute``, ``clear``")
        .addField("**Utility commands [9]**", "``help``, ``say``, ``dm``, ``embed``, ``poll``, ``uptime``, ``insta``, ``server``, ``info``, ``invite``")
        .addField("**Fun commands [9]**", "``cute``, ``gay``, ``ping``, ``avatar``, ``rps``, ``meme``, ``dog``, ``cat``, ``hack``")
    const filter = (reaction, user) => ['685952345456115737', '685951908909023277'].includes(reaction.emoji.id) && !user.bot;
       await firstEmbed.react('685952345456115737');
       await firstEmbed.react('685951908909023277');
    const collector = firstEmbed.createReactionCollector(filter, {max: 3, });
        collector.on('collect', reaction =>{
            if(reaction.emoji.id === '685952345456115737') {
                message.author.send(helpEmbed)
                message.channel.send("**Documentation successfully sent !**")
                firstEmbed.delete()
            }
            if(reaction.emoji.id === '685951908909023277') {
                message.channel.send(helpEmbed)
                firstEmbed.delete() 
            }
        })
        
}
module.exports.help = {
    name: "help" 
}

