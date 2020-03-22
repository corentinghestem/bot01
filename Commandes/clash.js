const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports.run = async(bot, message, args) => {
    let concernedMember = message.mentions.users.first() || bot.users.get(args[0])
    if(!args[0]) return message.channel.send("**Tu dois mentionner un membre à clasher**")
    if(!concernedMember) return message.channel.send("**Je ne trouve pas cet utilisateur dans le serveur**")
    let userNickname = concernedMember.username
    const canvas = Canvas.createCanvas(798, 1129)
    const ctx = canvas.getContext("2d")
    const background = await Canvas.loadImage("https://i.imgflip.com/17811q.jpg")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.font = "30px Emoji"
    ctx.fillStyle = "#000000"
    ctx.rotate(-Math.PI/4);
    ctx.fillText(userNickname, -450, 858)
    const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "meme.jpg"
    )
    message.channel.send(attachment)
}

module.exports.help = { 
    name: "clash"
}