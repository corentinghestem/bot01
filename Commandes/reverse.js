const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    let myString = args.join(' ')
    if(!args) message.channel.send("**Il faut choisir un message à envoyer**")
    let reversedFunc = myString.split("").reverse().join("")
    message.channel.send(`**${reversedFunc}**`)
}
module.exports.help = {
    name: 'reverse'
}
