const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const getMember = function(message, toFind = '') {
    toFind = toFind.toLowerCase();

    let target = message.guild.members.get(toFind);
    
    if (!target && message.mentions.members)
        target = message.mentions.members.first();

    if (!target && toFind) {
        target = message.guild.members.find(member => {
            return member.displayName.toLowerCase().includes(toFind) ||
            member.user.tag.toLowerCase().includes(toFind)
        });
    }         
    if (!target) 
        target = message.member;         
    return target;
}
const formatDate = function(date) {
    return new Intl.DateTimeFormat('en-US').format(date)
}

module.exports = {
    name: "info",
    aliases: ["who", "user", "info"],
    description: "Returns user information",
    usage: "[username | id | mention]",
    
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Member information:', stripIndents`**- Name:** ${member.displayName}
            **- Joined at:** ${joined}
            **- Roles:** ${roles}`, true)

            .addField('User information:', stripIndents`**- ID:** ${member.user.id}
            **- Username**: ${member.user.username}
            **- Tag**: ${member.user.tag}
            **- Created at**: ${created}`, true)
            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`** Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
        console.log(`> Commande réalisée par ${message.author.username} :
        -info ${args} `);
    }
}

module.exports.help = {
    name: "info"
}