const Discord = require('discord.js');
const { stripIndents} = require('common-tags');
function date(date) {
    return new Intl.DateTimeFormat('en-GB').format(date)
}

module.exports.run = (bot, message, args) => {
    let concernedMember = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

    let statNickname = ''
    if(concernedMember.nickname) statNickname = `
**Pseudonyme :** ${concernedMember.nickname}`

    let statType = concernedMember.user.bot   
    if(statType) statType = 'Robot' 
    if(!statType) statType = 'Humain'

    let statJoueA = ''
    if(concernedMember.user.presence.game) statJoueA = `
**Joue à :** ${concernedMember.user.presence.game.name}`

    let statStreaming = ''
    if(concernedMember.user.presence.game.streaming) statStreaming = `
${concernedMember.user.username} est actuellement en streaming ${concernedMember.user.presence.game.streaming}`

    let statPresence = concernedMember.user.presence.status
    if(statPresence == 'online') statPresence = 'En ligne'
    if(statPresence == 'idle') statPresence = 'Inactif'
    if(statPresence == 'dnd') statPresence = 'Ne pas déranger'
    if(statPresence == 'offline') statPresence = 'Hors ligne'

    let statRejointLe = date(concernedMember.joinedAt)
    let statCreeLe = date(concernedMember.user.createdAt)

    const statsEmbed = new Discord.RichEmbed()
       .setColor('#ffffff')
       .setTitle(`**Journal du membre**`)
       .addField("**Informations**", stripIndents`**Nom :** ${concernedMember.user.username}
**Tag :** ${concernedMember.user.username}#${concernedMember.user.discriminator}${statNickname}
**ID :** ${concernedMember.id}
`, true)
       .addField("**Statistiques**", stripIndents`**Créé le :** ${statCreeLe}
**Rejoint le :** ${statRejointLe}
**Roles :** ${concernedMember.roles.size - 1}`, true)
       .setThumbnail(concernedMember.user.displayAvatarURL)
       .addField("**Autres**", `**Type :** ${statType}  ${statJoueA}
**Status :** ${statPresence}${statStreaming}`)
    message.channel.send(statsEmbed)
}

module.exports.help = {
    name: 'stats'
}