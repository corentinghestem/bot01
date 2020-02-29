const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    category: "fun",
    description: "Sends an epic meme",
    run: async (client, message, args) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("#006400")
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
        console.log(`> Commande réalisée par ${message.author.username} :
        -meme ${args} `);
    }
}

module.exports.help = {
    name: "meme"
}