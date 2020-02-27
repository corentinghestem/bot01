const Discord = require("discord.js");
const bot = new Discord.Client();
const guild = new Discord.Guild();
const fs = require("fs");

bot.commands = new Discord.Collection();

const prefix = "-";
bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));
    if (command) 
        command.run(bot, message, args);
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

bot.on("ready", async () => {
    console.log(" ");
    console.log("Connecté en tant que: " + bot.user.tag);
    bot.user.setActivity(`-help | ${bot.guilds.size} servers`)
});


//COMMANDES TRAFIC
bot.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#5cf011")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription("**Give a warm welcome to our new member **" + user + "** !**")
        .setFooter("Dm Corentin#7595 to invite me in your server")
        .setTimestamp()
    user.guild.channels.get("678346457438355477").send(joinEmbed)
});
bot.on("guildMemberRemove", user =>{
    let leaveEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription(user + "** just left us ! There's something wrong with him.**")
        .setFooter("We hope you won't leave us like him ! | By Corentin")
        .setTimestamp()
    user.guild.channels.get("678346457438355477").send(leaveEmbed)
});

bot.login("NTM3MzQ3NTY4MjM4MTk4Nzg1.Xlbc3w.UMPVdkNBdgwjLP7lKsQlVElsAPQ");

