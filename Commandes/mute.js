const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async(bot, message, args) => {
    message.delete()
    if(!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) { 
        return message.channel.send('**I don\'t have permissions to mute someone !**').then((m) => m.delete(5000)); }
    if(!message.author.id === "450341492825915402") {
      if(!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
        return message.channel.send("**You don't have permissions to mute someone !").then((m) => m.delete(5000)) }
    }
    let mutedMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!mutedMember) { return message.channel.send("**Don't forget to mention someone**").then((m) => m.delete(5000)) }
    let mutedRole = message.guild.roles.find(role => role.name === "Muted");
    let mutedGuid = new Discord.RichEmbed()
       .setColor('#ffb92b')
       .setTitle(`**You need to have a \"Muted\" role to be able to mute someone.**`)
       
       .setDescription(`**How to create it ?**`)
       .addField(`First condition :`,`The role have to be called \"Muted\".`)
       .addField(`Second condition :`,`The role must have **ALL** possible permissions disabled.`)
       .addField(`Third condition :`,`The role have to be as high as possible \(after admin roles\) in the role hierarchy.
       *Don\'t forget that I can't mute an admin.`)
       .setFooter('If one of this condition isn\'t respected, the command won\'t work.')
    if(!mutedRole) return message.channel.send(mutedGuid)
    let mutedTime = args[1]
    if(!mutedTime) { 
        return mutedMember.addRole(mutedRole).then(message.channel.send(`**${mutedMember.user.tag} just got muted !**`))
    }
    if(mutedMember) {
        message.channel.send(`**${mutedMember.user.tag} has now been muted for ${ms(ms(mutedTime))}.**`)
        mutedMember.addRole(mutedRole)
        setTimeout(function(){   
            mutedMember.removeRole(mutedRole)
            message.channel.send(`**${mutedMember.user.tag} has been unmuted.**`)
        }, ms(mutedTime));
    }
    console.log(`> Commande réalisée par ${message.author.username} :
    -mute ${args} `);
}

module.exports.help = {
    name: "mute"
}