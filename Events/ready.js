const config = require("../storage/config.json");
module.exports = (bot) => {
    const botStatut= [
        `use ${config.prefix}help | ${bot.guilds.size} servers`,
        `use ${config.prefix}help | ${bot.users.size} members`
    ];
    setInterval(function() {
        var statutID = Math.floor(Math.random() * Math.floor(botStatut.length));
        bot.user.setActivity(botStatut[statutID])
    }, 3000)
    console.log(bot.user.tag + " is now connected !");
    console.log(" ")
    console.log("Stats :")
    console.log(`${bot.guilds.size} servers | ${bot.channels.size} channels | ${bot.users.size} members`)
};
