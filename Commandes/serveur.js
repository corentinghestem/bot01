const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
function date(date) {
    return new Intl.DateTimeFormat('en-GB').format(date)
}

module.exports.run = async(bot, message) => {
    let début = Date.now()
    let servBotCount = message.guild.members.filter(member => member.user.bot).size
    let servUserCount = message.guild.members.filter(member => !member.user.bot).size
    var servAFKChannel = ''
    if(message.guild.afkChannel) servAFKChannel = `**Salon AFK :** ${message.guild.afkChannel.name}`
    let servWelcomeChannel = ''
    if(message.guild.systemChannel) servWelcomeChannel = `**Messages automatiques de bienvenue :** ${message.guild.systemChannel}`
    var servRegion = message.guild.region
    if(servRegion === 'europe') servRegion = 'Europe'
    if(servRegion === 'brazil') servRegion = 'Brésil'
    if(servRegion === 'hongkong') servRegion = 'Chine'
    if(servRegion === 'india') servRegion = 'Inde'
    if(servRegion === 'japan') servRegion = 'Japon'
    if(servRegion === 'russia') servRegion = 'Russie'
    if(servRegion === 'singapore') servRegion = 'Singapour'
    if(servRegion === 'southafrica') servRegion = 'Afrique'
    if(servRegion === 'sydney') servRegion = 'Australie'
    if(servRegion === 'us-east') servRegion = 'USA'
    if(servRegion === 'us-west') servRegion = 'USA'
    if(servRegion === 'us-central') servRegion = 'USA'
    if(servRegion === 'us-south') servRegion = 'USA'
    var servNotification = message.guild.defaultMessageNotifications
    if(servNotification === 'ALL') servNotification = 'Messages'
    if(servNotification === 'MENTIONS') servNotification = 'Mentions'
    if(message.guild.features.length < 2) servLevel = 0
    if(message.guild.features.length === 2) servLevel = 1
    if(message.guild.features.length === 3) servLevel = 2
    if(message.guild.features.length > 3) servLevel = 3
    const servCreation = date(message.guild.createdAt);
        const serveurEmbed = new Discord.RichEmbed()
           .setColor("#ffffff")
           .setThumbnail(message.guild.iconURL)
           .setTitle("__**Journal du serveur**__")
           .addField("**Informations**", stripIndents`**Nom :** ${message.guild.name}
**Propriétaire :** ${message.guild.owner.displayName}
**Création :** ${servCreation}
**ID :** ${message.guild.id}
`, true)
           .addField("**Statistiques**", stripIndents`**Membres :** ${message.guild.memberCount}
**Utilisateurs :** ${servUserCount}
**Roles :** ${message.guild.roles.size} 
**Salons :** ${message.guild.channels.size}
**Emojis :** ${message.guild.emojis.size}
`, true)
           .addField("**Connections**", stripIndents`**Niveau de sécurité :** ${message.guild.verificationLevel}
**Niveau du serveur :** ${servLevel}
**Bots :** ${servBotCount}
**Localisation :** ${servRegion}
**Ping :** ${Date.now() - début}ms
`, true)
          .addField("**Autres**", `${servAFKChannel}
**Notifications par défaut :** ${servNotification}
${servWelcomeChannel}`)
        message.channel.send(serveurEmbed)
}

module.exports.help = {
    name: "serveur"
}