const Discord = require("discord.js");
const config = require("../storage/config.json");

module.exports.run = async(bot, message, author) => {
    let firstEmbed = await message.channel.send(`**Où souhaites-tu voir mon guide de commandes ?**
<:notification:685952345456115737>  - Dans mes messages privés
<:list:685951908909023277> - Dans ce salon`)
    let helpEmbed = new Discord.RichEmbed()
        .setColor("#3e68fd")
        .setTitle("__**Liste des commandes de Ash.**__", "https://discord.gg/aPZNbyD")
        .setDescription(` 
        **Bonjour ${message.author.username}, bienvenue sur ma documentation !** 
        Mon préfixe est **${config.prefix}**
        J'ai 22 commandes. `)
        .setFooter("Si tu as tout type de requête, suggestion ou problème, tu peux m'envoyer directement un message privé.")
        .setThumbnail("https://cdn.discordapp.com/attachments/678389386446110731/682539959521116202/ash-logo.png")
        .addField("**Commandes de modération [5]**", "``ban``, ``kick``, ``(un)mute``, ``clear``")
        .addField("**Commandes utilitaires [10]**", "``help``, ``say``, ``mp``, ``embed``, ``sondage``, ``insta``, ``ascii``, ``logo``, ``reverse``, ``invite``")
        .addField("**Commandes fun [7]**", "``charme``, ``qi``, ``chifoumi``, ``meme``, ``chien``, ``chat``, ``clash``")
    const filter = (reaction, user) => ['685952345456115737', '685951908909023277'].includes(reaction.emoji.id) && !user.bot;
       await firstEmbed.react('685952345456115737');
       await firstEmbed.react('685951908909023277');
    const collector = firstEmbed.createReactionCollector(filter, {max: 3, });
        collector.on('collect', reaction =>{
            if(reaction.emoji.id === '685952345456115737') {
                message.author.send(helpEmbed)
                message.channel.send("**Documentation envoyée avec succès**")
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

