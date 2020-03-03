const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    category: "fun",
    description: "Sends an epic meme",
    run: async (bot, message, args) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("ffffff")
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}

module.exports.help = {
    name: "meme"
}