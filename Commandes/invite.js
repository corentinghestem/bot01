const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.channel.send(`
    **Hey, here is the link to invite me on your server :**
    https://discordapp.com/oauth2/authorize?client_id=537347568238198785&scope=bot&permissions=8
    `)
    console.log(`> Commande réalisée par ${message.author.username} :
    -invite ${args} `);
};

module.exports.help = {
    name:"invite"
}