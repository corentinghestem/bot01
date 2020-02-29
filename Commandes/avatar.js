const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    message.channel.send("**Hey " + message.author.username + ", this is your avatar :**")
    message.channel.send(message.author.avatarURL);
    console.log(`> Commande réalisée par ${message.author.username} :
    -avatar ${args} `);
};

module.exports.help = {
    name: "avatar"
}