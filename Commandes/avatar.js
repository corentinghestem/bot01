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
       .setDescription("**Hey " + message.author.username + ", this is the avatar you asked me :**")
       .setImage(member.user.displayAvatarURL)
    message.channel.send(avatarEmbed)   
};

module.exports.help = {
    name: "avatar"
}