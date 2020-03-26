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
    return target;
}

module.exports.run = async(bot, message, args) => {
    let person = getMember(message, args[0]);
    const randomNumber1 = Math.floor(Math.random() * (150 - 90 + 1) + 90);
    let msg = await message.channel.send("**Test de qi en préparation...**")
    if(!args[0]) { return setTimeout(() => {
        msg.edit(`${message.author.username} a ${randomNumber1} de qi`)
    }, 1750) 
 } else setTimeout(() => {
     msg.edit(`${person.displayName} a ${randomNumber1} de qi !`)
 }, 1750);
    
}

module.exports.help = {
    name: "qi"
}