const Discord = require('discord.js');
const prefix = 'a!';

module.exports = (bot, message) => {
    if (message.author.bot || message.channel.type === 'dm') { return; }
    if (!message.channel.permissionsFor(bot.user).has('SEND_MESSAGES')) { return; }
    if (!message.content.startsWith(prefix)) { return; }
        let args = message.content.slice(prefix.length).trim().split(/ +/g); 
        let commande = args.shift();
        let cmd = bot.commands.get(commande);

        if (!cmd) { return; }
            cmd.run(bot, message, args);
    const logChannel = bot.channels.get("684123193375457340")
    if(!logChannel) return console.log("Channel de logs introuvable")
    let logMessage = args.join(" ")
    let logAuthorName = message.author
    let logAuthorID = message.author.id
    let logChannelName = message.channel
    let logChannelID = message.channel.id
    let logGuildName = message.guild 
    let logGuildID = message.guild.id
    let logEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setTitle("**Someone used a command**")
        .addField("Command", `\`\`a!${commande}\`\``)
        .addField("Arguments", `\`\`${logMessage}\`\``)
        .addField("Author", `**${logAuthorName} | ${logAuthorID}**`)
        .addField("Channel", `**${logChannelName} | ${logChannelID}**`)
        .addField("Guild", `**${logGuildName} | ${logGuildID}**`)
        .setTimestamp()
    if(message.content.startsWith(prefix)) logChannel.send(logEmbed)
};