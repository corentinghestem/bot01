const Discord = require('discord.js');

module.exports.run = async(bot, message) => {
    let invitEmbed = new Discord.RichEmbed()
       .setColor('BLACK')
       .setDescription(`**Merci de cliquer [ici](https://discordapp.com/oauth2/authorize?client_id=537347568238198785&scope=bot&permissions=2146958847) pour m'inviter dans ton serveur**`)
    message.channel.send(invitEmbed)
    };

module.exports.help = {
    name:"invite"
}