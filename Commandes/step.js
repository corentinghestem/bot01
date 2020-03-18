const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports.run = async(bot, message, args) => {
    let concernedMember = message.mentions.users.first() || bot.users.get(args[0])
    if(!args[0]) return message.channel.send("**You have to step on someone btw**").then((m) => m.delete(4000))
    if(!concernedMember) return message.channel.send("**I can't find this user, please retry**").then((m) => m.delete(4000))
    const canvas = Canvas.createCanvas(798, 1129)
    const ctx = canvas.getContext("2d")
    const background = await Canvas.loadImage("https://i.imgflip.com/17811q.jpg")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.font = "30px Arial"
    ctx.fillStyle = "#000000"
    ctx.rotate(-Math.PI/4);
    ctx.fillText(concernedMember.username, -400, 850)
    const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "meme.jpg"
    )
    message.channel.send(attachment)
}

module.exports.help = { 
    name: "step"
}