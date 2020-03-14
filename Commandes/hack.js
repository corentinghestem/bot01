const Discord = require('discord.js')
const randomPass = ["Soleil1247", "xXParis2018", "ShareMeLove09", "killerXRD1", "fabIAN3", "StackCall2"];
const randomMail = ["04@gmail.com", "abcd45@gmail.com", "91@wanadoo.fr", "mayer@outlook.fr", "pof@yahoo.fr", "Xx@gmail.com"]
const randomName = ["mike", "christian", "jason", "kevin", "unicolor", "paloma", "ronald", "ahmed"]

module.exports.run = async(bot, message, args) => {
    let concernedMember = message.mentions.users.first() || bot.users.get(args[0])
    if(!args[0]) return message.channel.send("**You have to find someone to hack !**")
    if(!concernedMember) return message.channel.send("**Oops, I can't find this person !**")
    const botPass = randomPass[Math.floor(Math.random() * randomPass.length)]
    const botMail = randomMail[Math.floor(Math.random() * randomMail.length)]
    const botName = randomName[Math.floor(Math.random() * randomName.length)]
    let msg = await message.channel.send(`${concernedMember.username}'s hack in preparation...`)
    setTimeout(() =>{
        msg.edit(`**searching for current connection files**`)
    }, 2500)
    setTimeout(() =>{
        msg.edit(`mail : ${botName}${botMail}`)
    }, 3500)
    setTimeout(() =>{
        msg.edit(`pass : ${botPass}`)
    }, 4500)
    setTimeout(() => {
        msg.edit(`id : 460341492825915412`)
    }, 5500)
    setTimeout(() => {
        msg.edit(`**now entering in confidential datas ...**`)
    }, 6500)
    setTimeout(() => {
        msg.edit(`converting datas before retranscription`)
    }, 8500)
    setTimeout(() => {
        msg.edit(`database entry failed, re-launching... `)
    }, 9500)
    setTimeout(() => {
        msg.edit(`successfull entry in his database`)
    }, 10500)
    setTimeout(() => {
        msg.edit(`token : NTc3OTp9MjQxMzE0OTY3NTYk.X2-taA.-0Iun5j1vxCla16dNeWtpls2roRT1`)
    }, 11500)
    setTimeout(() => {
        msg.edit(`Env : 
\`\`\`synTPHelper | 2896\`\`\``)
    }, 13000)
    setTimeout(() => {
        msg.edit(`Env : 
\`\`\`synTPHelper | 2896
conime.exe | 2312
ipoint.exe | 2108\`\`\``)
    }, 14000)
    setTimeout(() => {
        msg.edit(`Env : 
\`\`\`synTPHelper | 2896
conime.exe | 2312
ipoint.exe | 2108
rundll32.exe | 3044
winlogon.exe | 6641\`\`\``)
    }, 15500) 
    setTimeout(() => {
        msg.edit(`Env : 
\`\`\`synTPHelper | 2896
conime.exe | 2312
ipoint.exe | 2108
rundll32.exe | 3044
winlogon.exe | 6641
WiFiMSG.exe | 1604
HPWAmain | 1315\`\`\``)
    }, 17000) 
    setTimeout(() => {
        msg.edit(`Env : 
\`\`\`synTPHelper | 2896
conime.exe | 2312
ipoint.exe | 2108
rundll32.exe | 3044
winlogon.exe | 6641
WiFiMSG.exe | 1604
HPWAmain | 1315
IAAnotif.exe | 1408
wmpnscfg.exe | 2130\`\`\``)
    }, 18500) 
    setTimeout(() => {
        msg.edit(`Env : 
\`\`\`synTPHelper | 2896
conime.exe | 2312
ipoint.exe | 2108
rundll32.exe | 3044
winlogon.exe | 6641
WiFiMSG.exe | 1604
HPWAmain | 1315
IAAnotif.exe | 1408
wmpnscfg.exe | 2130
unsecapp.exe | 1476
smax4npn.exe | 8762\`\`\``)
    }, 20000) 
    setTimeout(() => {
        msg.edit(`Env : 
\`\`\`synTPHelper | 2896
conime.exe | 2312
ipoint.exe | 2108
rundll32.exe | 3044
winlogon.exe | 6641
WiFiMSG.exe | 1604
HPWAmain | 1315
IAAnotif.exe | 1408
wmpnscfg.exe | 2130
unsecapp.exe | 1476
smax4npn.exe | 8762
SynTPEnh.exe | 1116
Ati2evxx.exe | 1376\`\`\``)
    }, 21500) 
    setTimeout(() => {
        msg.edit(`**env successfully found, hack almost completed**`)
    }, 23500)
    setTimeout(() => {
        msg.edit(`data conversion to SQT81...`)
    }, 24500)
    setTimeout(() => {
        msg.edit(`compressing datas...`)
    }, 25500)
    setTimeout(() => {
        msg.edit(`connection to ${concernedMember.username} device`)
    }, 26500) 
    setTimeout(() => {
        msg.edit(`succesfull login !`)
    }, 28000)
    setTimeout(() =>{
        msg.edit(`${concernedMember.username} seems to be an easy prey, let's try something`)
    }, 29000)
    setTimeout(() => {
        msg.edit(`connection to ${concernedMember.username} webcam ...`)
    }, 31000)
    setTimeout(() => {
        msg.edit(`I know have access to ${concernedMember.username}'s webcam, don't forget to smile !`)
    }, 32500)
    setTimeout(() => {
        msg.edit(`${concernedMember.username}'s hack successfully finished`)
    }, 35000)
    
}
module.exports.help = {
    name: 'hack'
}