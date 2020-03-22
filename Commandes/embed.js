const Discord = require('discord.js');
const config = require("../storage/config.json");
module.exports.run = async(bot, message, args) =>{
    message.delete();
    if(!message.author.id === config.myUserID) {
         if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Tu n'as pas la permission pour gérer les messages**").then((m) => m.delete(5000))
    }
    let color = args[0]
    if(!color) return message.channel.send("**Il faut choisir une couleur pour ton embed**").then((m) => m.delete(5000))
    let errorMessage = new Discord.RichEmbed()
       .setTitle("**Il faut choisir une couleur pour ton embed**")
       .setColor("#ffffff")
       .setDescription(`**Comment la choisir ?**

       Pour désigner une couleur, Discord utilise le code-couleur proposé par les langages informatiques HTML et CSS appelé "HEX". Ce code-couleur permet de désigner des milliers de couleurs différentes à l'aide de seulement 6 caractères. Il est écrit par une séquence de 6 caractères précédés d'un hashtag. Par exemple, la couleur noire s'écrit \`\`#ffffff\`\`.

       Ici, cette couleur est utilisée pour choisir celle de notre embed. Pour en créer un, il suffit choisir sa couleur en "HEX". *N'oublie pas le hashtag !*

       Pour rendre votre choix plus facile, voici un site-web proposant l'entiereté des couleurs disponibles.
       https://www.color-hex.com/
    `)
       .setFooter("Ce message s'auto-supprimera dans 30 secondes")
       .setTimestamp()
    if(!color.startsWith("#")) return message.channel.send(errorMessage).then((m) => m.delete(30000))

    let messageEmbed = args.slice(1).join(" ");
    if(!messageEmbed) return message.channel.send("**Il faut choisir un message à envoyer dans ton embed**").then((m) => m.delete(5000))

    let botEmbed = new Discord.RichEmbed()
       .setColor(color)
       .setDescription(messageEmbed)
    message.channel.send(botEmbed);
}

module.exports.help = {
    name: "embed"
}