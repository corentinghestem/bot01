const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  let cMS = convertMS(bot.uptime);
  let uptime =
    cMS.h +
    " hours : " +
    cMS.m +
    " minutes : " +
    cMS.s +
    " seconds";

  const uptimeEmbed = new Discord.RichEmbed()
    .setColor(`#ff0000`)
    .setDescription(`**Im online since ` + `${uptime}**`)
  message.channel.send(uptimeEmbed);
};

function convertMS(ms) {
  var h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  return {
    h: h,
    m: m,
    s: s
  };
}

module.exports.help = {
  name: "uptime",
};