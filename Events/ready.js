module.exports = (bot) => {
    bot.user.setPresence({
        game: {
            name: `a!help | ${bot.users.size} members `
        }
    })
    console.log(" ");
    console.log("Connecté en tant que " + bot.user.tag + " et présent sur " + bot.guilds.size + " serveurs !");
    console.log(" ");
    console.log("Liste des commandes activées :");
};