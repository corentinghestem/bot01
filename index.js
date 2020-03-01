const Discord = require("discord.js");
const bot = new Discord.Client();
const guild = new Discord.Guild();
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = "a!";


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



bot.login("NTM3MzQ3NTY4MjM4MTk4Nzg1.XlvB2Q.f9A1mQtbn-5iqRGZMIAapHgo5Nc");

