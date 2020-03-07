const Discord = require('discord.js');
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args, tools) => {
    message.delete()
    if(!message.author.id === config.myUserID) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**You don't have permissions to create a poll !**") 
    }
    if(!args[0]) return message.channel.send("**You have to ask a question !**").then(m => m.delete(5000))
    const pollEmbed = new Discord.RichEmbed()
        .setColor("#22ff00")
        .setDescription(args.join (' '))
    let pollMessage = await message.channel.send(pollEmbed)
    await pollMessage.react('✅');
    await pollMessage.react('❌');

};

module.exports.help = {
    name: "poll"
}