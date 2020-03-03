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
    let person = getMember(message, args[0]);
    const gay = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    message.channel.send(person.displayName + " is " + gay + "% gay !")
}


module.exports.help = {
    name: "gay"
}