const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
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
const orientationSexuelle = ["homosexuel", "hétérosexuel", "bisexuel"]

module.exports.run = async(bot, message, args) => {
    const randomMember = message.guild.members.random()
    let concernedMember = getMember(message, args[0]);
    const botChoice = orientationSexuelle[Math.floor(Math.random() * orientationSexuelle.length)];
    const compatibilité = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    const mignon = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    const humour = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    const iq = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    const notation = (mignon + humour + iq) / 2.999
    const notationGood = notation.toFixed(2)
    const cuteEmbed = new Discord.RichEmbed()
       .setColor("#f518ed")
       .setTitle(`**Charme de ${concernedMember.displayName}**`)
       .addField(`**Caractéristiques :**`, stripIndents`Beauté : ${mignon}/10
Humour : ${humour}/10
Intelligence : ${iq}/10
**=> Notation : ${notationGood}/10**`, true)
       .addField(`**Amours :**`, stripIndents`Orientation sexuelle : ${botChoice}
Crush secret : ${randomMember.displayName}
Admirateur secret : ${message.guild.members.random().displayName}
`, true)

       .setTimestamp()
       .setThumbnail("https://i0.wp.com/l-express.ca/wp-content/uploads/2018/02/coeur2.jpg?fit=585%2C439&ssl=1")
       .setFooter(message.author.username, message.author.displayAvatarURL)
    if(args[0])
       cuteEmbed.addField("Compatibilité :", `${concernedMember.displayName} est compatible à **${compatibilité}%** avec ${message.author.username}.`)
    message.channel.send(cuteEmbed)
}


module.exports.help = {
    name: "charme"
}