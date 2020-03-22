const Discord = require('discord.js');
const ms = require('ms');
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) => {
    message.delete()
    if(!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) { 
        return message.channel.send('**Je n\'ai pas la permission de gérer les rôles**').then((m) => m.delete(5000)); }
    if(!message.author.id === config.myUserID) {
      if(!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
        return message.channel.send("**Tu n'as pas la permission de gérer les rôles").then((m) => m.delete(5000)) }
    }
    let mutedMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let mutedRole = message.guild.roles.find(role => role.name === "Muet");
    let mutedGuid = new Discord.RichEmbed()
       .setColor('#ffffff')
       .setTitle(`**Il faut créer un rôle \"Muet\" pour pouvoir mute quelqu'un.**`)
       
       .setDescription(`**Comment le créer ?**`)
       .addField(`Première condition :`,`Le rôle doit être appelé exactement \"Muet\".
       *N'oublie pas la majuscule*`)
       .addField(`Deuxième condition :`,`Le rôle ne doit avoir **AUCUNE** permissions.
       *On peut toutes les supprimer d'un coup en allant en bas de la page de gestion du rôle concerné*`)
       .addField(`Troisième condition :`,`Le rôle doit être le plus haut possible \(après les rôles d'administration\) dans la hierarchie des rôles.
       *Et oui, je ne peux pas mute un administrateur*`)
       .setFooter('Si l\'une de ces trois conditions n\'est pas respectée, la commande ne fonctionnera pas')
    if(!mutedMember) { return message.channel.send("**N'oublie pas de choisir quelqu'un à mute**").then((m) => m.delete(5000)) }
    if(!mutedRole) return message.channel.send(mutedGuid)
    let mutedTime = args[1]
    if(!mutedTime) { 
        return mutedMember.addRole(mutedRole).then(message.channel.send(`**${mutedMember.user.tag} vient de se faire mute**`))
    }
    if(mutedMember) {
        message.channel.send(`**${mutedMember.user.tag} vient de se faire mute pour ${ms(ms(mutedTime))}.**`)
        mutedMember.addRole(mutedRole)
        setTimeout(function(){   
            mutedMember.removeRole(mutedRole)
            message.channel.send(`**${mutedMember.user.tag} a été unmute**`)
        }, ms(mutedTime));
    }
}

module.exports.help = {
    name: "mute"
}