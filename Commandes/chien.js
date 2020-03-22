const Discord = require('discord.js');
const randomDog = ["https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-minded-royalty-free-image-997141470-1558379890.jpg?crop=0.671xw:1.00xh;0.0847xw,0&resize=640:*",
"https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq",
"https://cdn.mos.cms.futurecdn.net/JzqhuEDTRfCZKMKHUxPySB.jpg",
"https://www.guidingeyes.org/wp-content/uploads/2020/01/1-1.jpg",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/friendliest-dog-breeds-golden-1578596627.jpg?crop=0.668xw:1.00xh;0.188xw,0&resize=640:*",
"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg",
"https://www.thesprucepets.com/thmb/8TWtyJq0RXAlWoJKu62mm4dlYdI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-if-a-spitz-pomeranian_t20_v3o29E-5ae9bbdca18d9e0037d95983.jpg",
"https://tractive.com/static/images/menu/Tractive-DOG-navigation.jpg",
"https://www.point-dog.fr/images/Image/diaporamas/Chien_2-1.jpeg",
"https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg",
"https://www.truffaut.com/media/wysiwyg/PAGES_SERVICES/lavedog4.jpg",
"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo",
"https://images2.minutemediacdn.com/image/upload/c_crop,h_1192,w_2122,x_0,y_74/f_auto,q_auto,w_1100/v1575329078/shape/mentalfloss/609640-gettyimages-802480150.jpg",
"https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg?w=1155&h=1541",
"https://images.theconversation.com/files/304244/original/file-20191128-178107-9wucox.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=640:*",
"https://images.squarespace-cdn.com/content/v1/5894986a3e00bef5fa22310e/1572298426945-KLKHUBWYZNJHPL30GHBV/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/IMG_2194.jpeg?format=1500w",
"https://cdn.pixabay.com/photo/2015/11/17/13/13/dogue-de-bordeaux-1047521__340.jpg",
"https://api.time.com/wp-content/uploads/2019/11/narwhal-dog-tail-2.jpg",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-laying-on-grass-high-res-stock-photography-1574096636.jpg?crop=0.722xw:1.00xh;0.140xw,0&resize=640:*",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_xYB3D2NFMm88ZzNJW5Hi2vkr5Cn52Ipq7sCbabM6RWPn9Itu",
"https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBPYq3TKOgt6Ffw_fLT4cHlXdufByru9_u_z3aKlC_JLsj3-Xb",
"https://cdn.royalcanin-weshare-online.io/rSJKPmYBaxEApS7LyQZI/v1/ed18h-what-dogs-need-from-food-at-different-ages-hero-dog",
"https://images.theconversation.com/files/302816/original/file-20191121-474-4oufr9.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
"https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/alaskan-malamute-card-large.jpg?bust=1535569394",
"https://static01.nyt.com/images/2020/01/28/science/16OBS-WOLVES2/16TB-WOLVES2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dogs-that-dont-shed-1560974761.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl5feBs7qYuqTvrle8itClfHEx-v7cUOzVND42WT9UmmRpPygI",
"https://specials-images.forbesimg.com/imageserve/5db4c7b464b49a0007e9dfac/960x0.jpg?fit=scale",
"https://media.npr.org/assets/img/2019/11/08/dog_wide-bcecf58dde730531c18c274f62a5a81d32959fe5.jpg?s=1400",
"https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/b9bb8f9/2147483647/strip/true/crop/1713x1329+216+1/resize/812x630!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F55%2F6b%2Fa5fbf4554bd0b7eceff0baab39ce%2Fjasper2.jpg"
]
const randomMessage = ["Quel adorable chat :", "Regardez-moi cette merveille :", "Je veux le même à la maison :"]


module.exports.run = async(bot, message) => {
    const firstMessage = await message.channel.send("**Chargement ...**")
    const botChoice = randomDog[Math.floor(Math.random() * randomDog.length)];
    const botMessage = randomMessage[Math.floor(Math.random() * randomMessage.length)];
    const embed = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setDescription(`**${botMessage}**`)
            .setImage(botChoice)
            .setURL(botChoice);
        await message.channel.send(embed).then(firstMessage.delete())
};

module.exports.help = {
    name: "chien"
}
