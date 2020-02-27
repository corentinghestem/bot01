const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.delete()
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('**＞︿＜ - You don\'t have permissions to kick !**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 10000) } 
    )};
    if (!message.guild.member(bot.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('**＞︿＜ - I don\'t have permissions to kick !**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 10000) } 
    )};
    if (message.mentions.users.size === 0) { return message.channel.send('**＞︿＜ - You have to mention an user !**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 10000) } 
    )};
        let kickMember = message.guild.member(message.mentions.users.first()); 
        if (!kickMember) { return message.channel.send('**＞︿＜ - I can\'t find this user !**').then((m) => {
            setTimeout(() => {
                m.delete()
              }, 10000) } 
        )};
        message.mentions.users.first().send(`**＞︿＜ - You just got kicked from ${message.guild.name} by ${message.author.username} !**`) 
            .then(() => { 
                kickMember.kick() 
                    .then((member) => { 
                        message.channel.send(`**＞︿＜ - ${member.user.username} just got kicked from the server**`).then((m) => {
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
                                message.channel.send(`** ${member.user.username} just got kicked by ${message.author.username} from the server !**`).then((m) => {
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
