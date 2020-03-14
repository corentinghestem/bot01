const Discord = require('discord.js')
const chooseArr = ["Soleil1247", "xXParis2018", "ShareMeLove09", "killerXRD1"];

module.exports.run = async(bot, message, args) => {
    let concernedMember = message.mentions.users.first() || bot.users.get(args[0])
    if(!args[0]) return message.channel.send("**You have to find someone to hack !**")
    if(!concernedMember) return message.channel.send("**Oops, I can't find this person !**")
    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)]
    let msg = await message.channel.send(`hack of ${concernedMember.username} in preparation...`)
    setTimeout(() =>{
        msg.edit(`searching for current connection files`)
    }, 3000)
    setTimeout(() =>{
        msg.edit(`mail found : ${concernedMember.username}04@gmail.com`)
    }, 4500)
    setTimeout(() =>{
        msg.edit(`now looking for the password...`)
    }, 5500)
    setTimeout(() =>{
        msg.edit(`pass successfully found : ${botChoice}`)
    }, 7000)
    setTimeout(() =>{
        msg.edit(`the hack is going well, I found his id : ${concernedMember.id}`)
    }, 8000)
    setTimeout(() =>{
        msg.edit(`${concernedMember.username} seems to be an easy prey, let's go further`)
    }, 9000)
    setTimeout(() =>{
        msg.edit("I think I just found his token")
    }, 11000)
    setTimeout(() =>{
        msg.edit("token : NTc3OTp9MjQxMzE0OTY3NTYk.X2-taA.-0Iun5j1vxCla16dNeWtpls2roRT1")
    }, 12000)
    setTimeout(() =>{
        msg.edit(`${concernedMember.username}'s hack successfully finished `)
  }, 14000)
}
module.exports.help = {
    name: 'hack'
}