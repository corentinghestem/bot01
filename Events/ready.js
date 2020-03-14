module.exports = (bot) => {
    const botStatut= [
        "Use a!help",
        `${bot.guilds.size} servers | ${bot.users.size} members`,
        "Dm to have help"
    ];
    setInterval(function() {
        var statutID = Math.floor(Math.random() * Math.floor(botStatut.length));
        bot.user.setActivity(botStatut[statutID])
    }, 3500)

    console.log(" ");
    console.log("Connecté en tant que " + bot.user.tag + " et présent sur " + bot.guilds.size + " serveurs !");
};