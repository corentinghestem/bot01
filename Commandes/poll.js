const Discord = require('discord.js');

module.exports.run = async(bot, message, args, tools) => {
    message.delete()
    console.log(`> Commande réalisée par ${message.author.username} :
    -poll ${args} `);
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**You don't have permissions to create a poll !**") 
    if(!args[0]) return message.channel.send("**You have to ask a question !**")
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