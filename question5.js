const { BitlyClient } = require('bitly');
const fs = require('fs');
const env = require('dotenv').config();
const bitly = new BitlyClient(process.env.ACCESS_TOKEN, {});
let array=[
    "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
    "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
    "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
    "http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg",
    "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
]
let URLshortener= () => {
    array.forEach(async (uri) => {
        try {
            let res = await bitly.shorten(uri);
            console.log(res);
            let URL = `${res.long_url} - ${res.id}\n`;
            fs.appendFileSync('./url.csv', URL);
        } catch(err){
            throw err
        }
    })
}
URLshortener()