const Discord = require('discord.js');
const ascii = require('ascii-art')
var specialCaracter = ["à", "ç", "é", "è", "ê", "ù", "ï", "€"]

module.exports.run = async(bot, message, args) => {
    if(!args[0]) return message.channel.send("**Il faut choisir un message à envoyer**")
    if(specialCaracter.some(m => message.content.toLowerCase().substr(/\s+/).includes(m))) {
        return message.channel.send(`**Je ne peux pas envoyer de lettres avec accent dans une commande ascii.
Ces lettres sont : \`à\`, \`ç\`, \`é\`, \`ù\`, \`ï\` et tout leur dérivés**`) 
      }
    ascii.font(args.join(' '), 'Doom', function(err, rendered) {
        rendered = rendered.trimRight();
        if (rendered.length > 700) return message.channel.send("**Ce message est trop long**")
        message.channel.send(rendered, {
            code: 'md'
        });
    });
};
module.exports.help = {
    name: 'ascii'
}