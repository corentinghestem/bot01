const Discord = require("discord.js");
const bot = new Discord.Client();
const guild = new Discord.Guild();
const config = require("./storage/config.json");
const fs = require("fs");
bot.commands = new Discord.Collection();

bot.on('guildMemberAdd', member => {
    function date(date) {
        return new Intl.DateTimeFormat('en-GB').format(date)
    }
    const randomWelcomeARR = [`Bienvenue à ${member.displayName}, amuse toi bien !`,
     `${member.displayName} a rejoint le serveur, cachez-vous !`,
    `Attention ! ${member.displayName} vient de débarquer.`,
    `Arrêtez-tout ! ${member.displayName} est arrivé.`,
    `${member.displayName} est enfin là, nous t'attendions !`]
    const randomWelcome = randomWelcomeARR[Math.floor(Math.random() * randomWelcomeARR.length)]
    const myWelcomeChannel = member.guild.channels.get(config.welcomeChannel)
    if(!myWelcomeChannel) return console.log('l16')
    const welcomEmbed = new Discord.RichEmbed()
      .setColor('#5cf011')
      .setTitle('**Un nouveau membre a rejoint**')
      .setThumbnail(member.user.displayAvatarURL)
      .setDescription(`${randomWelcome}
      
Nous sommes désormais ${member.guild.memberCount} membres dans le serveur.`)
      .setFooter(`Tag : ${member.user.tag} | ID : ${member.user.id} | Créé le : ${date(member.user.createdAt)}`)
    myWelcomeChannel.send(welcomEmbed)
})

bot.on('guildMemberRemove', member => {
    function date(date) {
        return new Intl.DateTimeFormat('en-GB').format(date)
    }
    const randomLeaveARR = [`${member.displayName} a terminé sa valise, à bientôt !`,
`${member.displayName} a fait son choix, bon voyage !`,
`Vers l'infini et au delà ! Bonne continuation ${member.displayName}.`,
`Après des heures de réflexion, ${member.displayName} a décidé ... de 
nous quitter !`,
`${member.displayName} est partis ! Après tout un de perdu, dix de retrouvé. `]
    const randomLeave = randomLeaveARR[Math.floor(Math.random() * randomLeaveARR.length)]
    const myLeaveChannel = member.guild.channels.get(config.leaveChannel)
    if(!myLeaveChannel) return console.log('l35')
    const leavEmbed = new Discord.RichEmbed()
      .setColor('#ff0000')
      .setTitle('**Un membre a quitté le serveur**')
      .setThumbnail(member.user.displayAvatarURL)
      .setDescription(`${randomLeave}
      
Nous sommes désormais ${member.guild.memberCount} membres dans le serveur.`)
      .setFooter(`Tag : ${member.user.tag} | ID : ${member.user.id} | Créé le : ${date(member.user.createdAt)}`)
    myLeaveChannel.send(leavEmbed)
})

//LOGS DE SERVEURS
bot.on('guildCreate', guild => {
    const formatDate = function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }
    var guildJoinedName = guild.name
    var guildJoinedID = guild.id
    var guildJoinedOwnerName = guild.owner
    var guildJoinedOwnerID = guild.ownerID
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
    var guildLeftOwnerID = guild.ownerID
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
    console.log(`${jsFiles.length} commands successfully ready`)
    jsFiles.forEach((f, i) =>{
        var fileGet = require("./Commandes/" + f);
        bot.commands.set(fileGet.help.name, fileGet);
    });
});
fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events successfully ready`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            bot.on(event, events.bind(null, bot));
        });
});
bot.login(config.token);