const Discord = require("discord.js");
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) => {
    message.delete()
    if(!message.author.id === config.myuserID) {
       if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('**Tu n\'as pas la permission de virer un membre**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 10000) } 
       )};
    }
    if (!message.guild.member(bot.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('**Je n\'ai pas la permission de virer un membre**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 10000) } 
    )};
    if (message.mentions.users.size === 0) { return message.channel.send('**Il faut mentionner un membre à virer**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 10000) } 
    )};
        let kickMember = message.guild.member(message.mentions.users.first()); 
        if (!kickMember) { return message.channel.send('**Je ne trouve pas ce membre dans le serveur**').then((m) => {
            setTimeout(() => {
                m.delete()
              }, 10000) } 
        )};
        message.mentions.users.first().send(`**Tu viens de te faire virer du serveur ${message.guild.name}**`) 
            .then(() => { 
                kickMember.kick() 
                    .then((member) => { 
                        message.channel.send(`**${member.user.username} vient de se faire virer du serveur**`).then((m) => {
                            setTimeout(() => {
                                m.delete()
                            }, 10000)
                        })                     }) 
                        .catch((err) => { 
                            if (err) { return console.error(err); } 
                        }); 
            }) 
                .catch((error) => { 
                    if (error) { console.error(error); } 
                        kickMember.kick() 
                            .then((member) => { 
                                message.channel.send(`**${member.user.username} vient de se faire virer du serveur**`).then((m) => {
                                    setTimeout(() => {
                                        m.delete()
                                    }, 10000)
                                }) 
                            }) 
                                .catch((err) => { 
                                    if (err) { return console.error(err); } 
                                }); 
                }); 
}; 

module.exports.help = { 
    name: 'kick' 
}; 
