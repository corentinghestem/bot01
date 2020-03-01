const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const promptMessage = async function (message, author, time, validReactions) {
    time *= 1000;
    for (const reaction of validReactions) await message.react(reaction);
    const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;
    return message
        .awaitReactions(filter, { max: 1, time: time})
        .then(collected => collected.first() && collected.first().emoji.name);
}
const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "fun",
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    usage: "rps",
    run: async (client, message, args) => {
        message.delete()
        console.log(`> Commande réalisée par ${message.author.username} :
        -rps ${args} `);
        const embed = new RichEmbed()
            .setColor("#fbfbfb")
            .setFooter(message.author.username, message.author.displayAvatarURL)
            .setDescription("**Add a reaction to one of these emojis to play the game !**")
            .setTimestamp();
        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];
        const result = await getResult(reacted, botChoice);
        await m.clearReactions();
        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "**You won !**";
            } else if (me === clientChosen) {
                return "**It's a tie !**";
            } else {
                return "**You lost !**";
            }
        }
    }
}

module.exports.help = {
    name: "rps"
}