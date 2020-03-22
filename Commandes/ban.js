const Discord = require("discord.js");
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) =>{
    message.delete()
    if(!message.author.id === config.myUserID) {
      if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('**Vous n\'avez pas la permission de bannir un membre**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 5000)
    }); }
    } 
    if(!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('**Je n\' ai pas la permission de bannir un membre**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 5000)
    }); } 
    if (message.mentions.users.size === 0) { return message.channel.send('**Il faut mentionner un membre à bannir**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 5000)
    }); } 
        let banMember = message.guild.member(message.mentions.users.first()); 
        if (!banMember) { return message.channel.send('**Je ne trouve pas ce membre dans le serveur**').then((m) => {
            setTimeout(() => {
                m.delete()
              }, 5000)
        }); } 
        message.mentions.users.first().send(`**Vous venez de vous faire bannir du serveur ${message.guild.name}**`) 
            .then(() => { 
                banMember.ban() 
                    .then((member) => { 
                        message.channel.send(`**${member.user.username} vient de se faire bannir du serveur**`).then((m) => {
                            setTimeout(() => {
                                m.delete()
                              }, 5000)
                        }); 
                    }) 
                        .catch((err) => { 
                            if (err) { return console.error(err); } 
                        }); 
            }) 
                .catch((error) => { 
                    if (error) { console.error(error); } 
                        banMember.ban() 
                            .then((member) => { 
                                message.channel.send(`**${member.user.username} vient de se faire bannir du serveur**`).then((m) => {
                                    setTimeout(() => {
                                        m.delete()
                                      }, 5000)
                                });
                            }) 
                                .catch((err) => { 
                                    if (err) { return console.error(err); } 
                                }); 
                }); 
}; 

module.exports.help = {
    name: "ban"
}