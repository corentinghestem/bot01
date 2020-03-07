const Discord = require('discord.js');
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) => {
    message.delete()
    if(!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) { 
        return message.channel.send('**I don\'t have permissions to unmute someone !**').then((m) => m.delete(5000)); }
    if(!message.author.id === config.myUserID) {
      if(!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
        return message.channel.send("**You don't have permissions to unmute someone !").then((m) => m.delete(5000)) }
    }
    let mutedMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!mutedMember) return message.channel.send("**You have to mention someone to unmute.**").then((m) => m.delete(5000))
    let mutedRole = message.guild.roles.find(role => role.name === "Muted");
    let mutedGuid = new Discord.RichEmbed()
    .setColor('#ffffff')
    .setTitle(`**You need to have a \"Muted\" role to be able to mute someone.**`)
    
    .setDescription(`**How to create it ?**`)
    .addField(`First condition :`,`The role have to be called \"Muted\".
    *Don't forget the capital letter.*`)
    .addField(`Second condition :`,`The role must have **ALL** possible permissions disabled.
    *You can disable it at by going at the bottom of the role permissions page.*`)
    .addField(`Third condition :`,`The role have to be as high as possible \(after admin roles\) in the role hierarchy.
    *Don\'t forget that I can't mute an admin.*`)
    .setFooter('If one of this condition isn\'t respected, the command won\'t work.')
    if(!mutedRole) return message.channel.send(mutedGuid)
    if(mutedMember) {
        mutedMember.removeRole(mutedRole)
        message.channel.send(`**${mutedMember.user.tag} has been unmuted.**`)
    }
}

module.exports.help = {
    name: "unmute"
}