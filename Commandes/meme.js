const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");
const randomMessage = ["Haha, quel meme hillarant :", "Très bonne blague, je prends note :", "Je sens que je vais refaire la blague à mes amis :"]

module.exports.run = async (bot, message) => {
        const botMessage = randomMessage[Math.floor(Math.random() * randomMessage.length)];
        const firstMessage = await message.channel.send("**Chargement ...**")
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("#ffffff")
            .setDescription(`**${botMessage}**`)
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`);
        await message.channel.send(embed).then(firstMessage.delete())
}

module.exports.help = {
    name: "meme"
}