const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    message.delete()
    if(!message.author.id === "450341492825915402") {
      if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('**＞︿＜ - You don\'t have permissions to ban !**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 5000)
    }); }
    } 
    if(!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('**＞︿＜ - I don\'t have permissions to ban !**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 5000)
    }); } 
    if (message.mentions.users.size === 0) { return message.channel.send('**＞︿＜ - You have to mention an user !**').then((m) => {
        setTimeout(() => {
            m.delete()
          }, 5000)
    }); } 
        let banMember = message.guild.member(message.mentions.users.first()); 
        if (!banMember) { return message.channel.send('**＞︿＜ - Sorry\, I can\'t find this user !**').then((m) => {
            setTimeout(() => {
                m.delete()
              }, 5000)
        }); } 
        message.mentions.users.first().send(`**＞︿＜ - You just got banned from **${message.guild.name} by ${message.author.username} !**`) 
            .then(() => { 
                banMember.ban() 
                    .then((member) => { 
                        message.channel.send(`**＞︿＜ - ${member.user.username} just got banned by ${message.author.username} !**`).then((m) => {
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
                                message.channel.send(`**＞︿＜ - ${member.user.username} just got banned by ${message.author.username} !**`).then((m) => {
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