const Discord = require('discord.js');
const prefix = "a!"
const config = require("../storage/config.json");

module.exports = (bot, message, guild) => {
    //LOGS DE DM
    const formatDate = function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }
    
    const dmChannel = bot.channels.get(config.logDMChannel)
    if(!dmChannel) return console.log("Channel de logs introuvable")
    let dmAuthorName = message.author
    let dmAuthorID = message.author.id
    let dmMessage = message.content
    let dmSentEmbed = new Discord.RichEmbed()
      .setColor("#ff8100")
      .setTitle("**I just sent a dm**")
      .addField("Recipient", `**${dmAuthorName} | ${dmAuthorID}**`)
      .addField("Message", `\`${dmMessage}\``)
    if(message.channel.type == 'dm' && message.author.bot) return dmChannel.send(dmSentEmbed)
        
    let dmReceivedEmbed = new Discord.RichEmbed()
      .setColor("#ecfb00")
      .setTitle("**Someone sent me a dm**")
      .addField("Author", `**${dmAuthorName} | ${dmAuthorID}**`)
      .addField("Message", `\`${dmMessage}\``)
    if(message.channel.type == 'dm') return dmChannel.send(dmReceivedEmbed) 
    //PREFIXE
    if(message.channel.type == 'dm') return;
    if (message.author.bot) { return; }
    if (!message.content.startsWith(prefix)) { return; }
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commande = args.shift();
        let cmd = bot.commands.get(commande);
        if (!cmd) { return; }
            cmd.run(bot, message, args);
    //LOGS DE COMMANDE
    const logChannel = bot.channels.get(config.logCommandsChannel)
    if(!logChannel) return console.log("Channel de logs introuvable")
    let logMessage = message.content
    let logAuthorName = message.author
    let logAuthorID = message.author.id
    let logAuthorCreatedAt = formatDate(message.author.createdAt) 
    let logChannelName = message.channel
    let logChannelID = message.channel.id
    let logGuildName = message.guild 
    let logGuildID = message.guild.id
    let logEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setTitle("**Someone used a command**")
        .addField("Arguments", `\`\`${logMessage}\`\``)
        .addField("Author", `**${logAuthorName} | ${logAuthorID}**`)
        .addField("Created at", `**${logAuthorCreatedAt}**`)
        .addField("Channel", `**${logChannelName} | ${logChannelID}**`)
        .addField("Guild", `**${logGuildName} | ${logGuildID}** `)
        .setTimestamp()
    if(message.content.startsWith(prefix)) logChannel.send(logEmbed)
};

