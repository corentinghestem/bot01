const Discord = require("discord.js");
const bot = new Discord.Client();
const guild = new Discord.Guild();
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = "-";


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


//COMMANDES TRAFIC
bot.on("guildMemberAdd", user =>{
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#5cf011")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription("**Give a warm welcome to our new member **" + user + "** !**")
        .setFooter("Don't forget to ready the rules !")
        .setTimestamp()
    user.guild.channels.get("678346457438355477").send(joinEmbed)
});
bot.on("guildMemberRemove", user =>{
    let leaveEmbed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription(user + "** just left us ! There's something wrong with him.**")
        .setFooter("Bye :)")
        .setTimestamp()
    user.guild.channels.get("678346457438355477").send(leaveEmbed)
});

bot.login("NTM3MzQ3NTY4MjM4MTk4Nzg1.XlqSBg.A7zHowmmMPN59B9_XjE-JoUWOOg");

