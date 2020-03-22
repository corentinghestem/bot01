const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    aliases: ["insta"],
    category: "info",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (bot, message, args) => {
        const name = args.join(" ");
        if (!name) {
            return message.channel.send(`**Il faut choisir un profil à regarder**`)
                .then(m => m.delete(5000));
        }
        const url = `https://instagram.com/${name}/?__a=1`; 
        let res; 
        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("**Je ne trouve pas cet utilisateur sur Instagram**")
                .then(m => m.delete(5000));
        }
        const account = res.graphql.user;
        const embed = new RichEmbed()
            .setColor("WHITE")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Information du profil :", stripIndents`**- Pseudo:** ${account.username}
            **- Nom complet:** ${account.full_name}
            **- Biographie${account.edge_owner_to_timeline_media.count}
            **- Abonnés:** ${account.edge_followed_by.count}
            **- Abonnements:** ${account.edge_follow.count}
            **- Statut:** ${account.is_private ? "Privé 🔐" : "Public 🔓"}`);
        message.channel.send(embed);
    }
}

module.exports.help = {name:"insta"}