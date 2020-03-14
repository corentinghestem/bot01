const Discord = require('discord.js');
const randomCat = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://i.f1g.fr/media/madame/orig/sites/default/files/img/2014/12/grumpy-cat-un-chat-souvent-mis-en-scene.jpg",
    "https://img.bfmtv.com/c/1256/708/3b09ba/99edbffc2e371d29b91fe2033c.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://static01.nyt.com/images/2019/09/04/business/04chinaclone-01/merlin_160087014_de761d9a-4360-402d-a15b-ddeff775760d-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_KVEv2hHP29l-M2gsLMhzDZHMfYWZO5ecqGA5OzJVDYHHatrx",
    "https://i.insider.com/5e0f920d954bda5354419594?width=1100&format=jpeg&auto=webp",
    "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_960_720.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSecQceshS_TGpRJJ2ESiCum1AuFn0BEH9fiYCEVSyWJ9GGD74p",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRphu7-qAKu689VV4S2Uthtfkjb-TlV-n_pPsU8TMY9mioDCF45",
    "https://i.insider.com/5d02569cdaa4822efe6aaf13?width=750&format=jpeg&auto=webp",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*",
    "https://cdn.pixabay.com/photo/2019/04/21/19/52/cat-4144845_960_720.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/220px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",
    "https://dandy-cat.com/wp-content/uploads/2018/02/dandycatBlancBanniere2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqLG0K_min0FzMBvqOaWv6lZAQWxkXjLdOKCezLr_Zt_FKI2su",
    "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
    "https://icatcare.org/app/uploads/2018/07/Difficult-cat-birth2.png",
    "https://thenypost.files.wordpress.com/2019/12/cat.jpg?quality=80&strip=all&w=618&h=410&crop=1",
    "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/153558006-tips-healthy-cat-632x475.jpg",
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/17456/production/_109981359_ecstaticbub.jpg",
    "https://icatcare.org/app/uploads/2018/07/Keeping-your-cat-healthy.png",
    "https://ichef.bbci.co.uk/news/410/cpsprodpb/13DA6/production/_109981318_bubthejoker.jpg",
    "https://www.thisiscolossal.com/wp-content/uploads/2019/07/cat-hat-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTS5l9UdxGCIiUTr89SXQH9YBVye0IUOXXHRdsVa7EL2BDMnUD",
    "https://polimedia.press/wp-content/uploads/2019/11/catsverycats.jpeg",
    "https://lh3.googleusercontent.com/proxy/87x9n6Lbsrkmxdh1A-C6YOf71zIEsvPCYe8yEX2o6jPLcEZnW8wxqIl9ql3w6mq4WzgOcCC7wIRWV_e6W55RdUzkPG45CzSF9IEazyCetyBbEop5xCCijBlN6YOAg8U1-M4BonFps8Wrh-hBKAUVNDd70uv52-NB19qDZTRX8ad9nNEBtBrzkcQhU6KBIZoa8swO2a_zLpKa",
    "https://thenypost.files.wordpress.com/2019/09/fat-cat.jpg?quality=80&strip=all&w=618&h=410&crop=1",
    "https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR",
    "https://images.squarespace-cdn.com/content/v1/55c945e0e4b04386fb9f8162/1579290612098-NYQYHYB2KXEW7KJPN7QD/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/tk2.jpg?format=1500w",
    "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_20,y_0/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg?itok=Nj49PDxW",
    "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/327/327214/cute-kitten.jpg?w=1155&h=1539"
]

module.exports.run = async(bot, message, args) => {
    const firstMessage = await message.channel.send("**Generating ...**")
    const botChoice = randomCat[Math.floor(Math.random() * randomCat.length)];
    const embed = new Discord.RichEmbed()
            .setColor("#ffffff")
            .setImage(botChoice)
            .setURL(botChoice);
        await message.channel.send(embed).then(firstMessage.delete())
};

module.exports.help = {
    name: "cat"
};