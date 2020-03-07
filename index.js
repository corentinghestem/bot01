const Discord = require("discord.js");
const bot = new Discord.Client();
const guild = new Discord.Guild();
const config = require("./storage/config.json");
const fs = require("fs");
bot.commands = new Discord.Collection();

bot.on('guildCreate', guild => {
    const formatDate = function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }
    var guildJoinedName = guild.name
    var guildJoinedID = guild.id
    var guildJoinedOwnerName = guild.owner
    var guildJoinedOwnerID = guild.owner.id
    var guildJoinedCreatedAt = formatDate(guild.createdAt)
    var guildJoinedMemberCount = guild.memberCount
    let createEmbed = new Discord.RichEmbed()
       .setColor("#5cf011")
       .setTitle("**I joined a new guild**")
       .addField("Guild", `**${guildJoinedName} | ${guildJoinedID}**`)
       .addField("Creation", `**${guildJoinedCreatedAt}**`)
       .addField("Owner", `**${guildJoinedOwnerName} | ${guildJoinedOwnerID}**`)
       .addField("Membercount", `**${guildJoinedMemberCount} members**`)
       .setTimestamp()
    bot.channels.get(config.logCommandsChannel).send(createEmbed)
});

bot.on('guildDelete', guild => {
    const formatDate = function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }
    var guildLeftName = guild.name
    var guildLeftID = guild.id
    var guildLeftOwnerName = guild.owner
    var guildLeftOwnerID = guild.owner.id
    var guildLeftCreatedAt = formatDate(guild.createdAt)
    var guildLeftMemberCount = guild.memberCount
    let createEmbed = new Discord.RichEmbed()
       .setColor("#ff0000")
       .setTitle("**I just left a guild**")
       .addField("Guild", `**${guildLeftName} | ${guildLeftID}**`)
       .addField("Creation", `**${guildLeftCreatedAt}**`)
       .addField("Owner", `**${guildLeftOwnerName} | ${guildLeftOwnerID}**`)
       .addField("Membercount", `**${guildLeftMemberCount} members**`)
       .setTimestamp()
    bot.channels.get(config.logCommandsChannel).send(createEmbed)
});
//COMMAND HANDLER
fs.readdir("./Commandes/", (err, files) =>{
    if(err) console.log(err);
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if(jsFiles.length <= 0) {
        console.log("Aucun fichier de commande !")
        return
    };
    jsFiles.forEach((f, i) =>{
        var fileGet = require("./Commandes/" + f);
        console.log("Fichier de commande " + f + " récupéré avec succés !");
        bot.commands.set(fileGet.help.name, fileGet);
    });
});
fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            bot.on(event, events.bind(null, bot));
        });
});

 
bot.login(config.token);

