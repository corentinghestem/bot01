const Discord = require('discord.js');
const getMember = function(message, toFind = '') {
    toFind = toFind.toLowerCase();
    let target = message.guild.members.get(toFind);
    if (!target && message.mentions.members)
        target = message.mentions.members.first();
    if (!target && toFind) {
        target = message.guild.members.find(member => {
            return member.displayName.toLowerCase().includes(toFind) ||
            member.user.tag.toLowerCase().includes(toFind)
        });
    }         
    if (!target) 
        target = message.member;         
    return target;
}
module.exports.run = async(bot, message, args) => {
    const member = getMember(message, args.join(" "));
    let avatarEmbed = new Discord.RichEmbed()
       .setColor("#ffffff")
       .setDescription(`**Voici l'avatar de ${member.displayName} :**`)
       .setImage(member.user.displayAvatarURL)
    if(!message.guild.member(bot.user).hasPermission('ATTACH_FILES')) return message.channel.send("**Je n'ai pas la permission d'envoyer des fichiers dans ce salon**")
    message.channel.send(avatarEmbed)   
};

module.exports.help = {
    name: "logo"
}