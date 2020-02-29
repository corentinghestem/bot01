module.exports = (bot) => {
    bot.user.setPresence({
        game: {
            name: "stop stalking me plz"
        }
    })
    console.log(" ");
    console.log("Connecté en tant que: " + bot.user.tag);
};