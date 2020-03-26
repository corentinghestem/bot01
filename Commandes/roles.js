const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let concernedMember = message.mentions.members.first() || message.guild.members.get(args[0])
    let rolesSize = message.guild.roles.size - 1
    let rolesList = message.guild.roles.array().slice(1).map(e=>e.toString()).join(" | ")
    let rolesErreur = message.guild.roles.array().slice(1).map(e=>e.toString()).slice(0, 100).join(" | ")
    if(rolesSize > 100) rolesList = `*Je ne peux pas afficher tout les roles du serveur, mais voici les 100 premiers :*
    
${rolesErreur}`
    
    const rolesServeur = new Discord.RichEmbed()
       .setColor("#ffd700")
       .setTitle("**Liste des rôles du serveur**")
       .setDescription(rolesList)
       .setAuthor(message.guild.name, message.guild.iconURL)
       .setFooter(`Rôles utilisés : ${rolesSize}/250`)
       .setTimestamp()

    if(concernedMember) {
    let rolesConcernedMember = concernedMember.roles.array().slice(1).map(e => e.toString()).join(" | ")
    let rolesConcernedSize = concernedMember.roles.size - 1
    if(rolesConcernedSize == '0') rolesConcernedMember = `*${concernedMember.user.username} ne possède aucun rôle*`
    const rolesPlayer = new Discord.RichEmbed()
       .setColor("#ffd700")
       .setTitle(`Liste des rôles du membre`)
       .setDescription(rolesConcernedMember)
       .setAuthor(concernedMember.user.username, concernedMember.user.displayAvatarURL)
       .setFooter(`Rôles utilisés : ${rolesConcernedSize}/250`)
       .setTimestamp()
    return message.channel.send(rolesPlayer)
    }
    if(!concernedMember) return message.channel.send(rolesServeur)
}
module.exports.help = {
    name: "roles"
}