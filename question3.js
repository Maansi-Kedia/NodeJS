const fs = require('fs')
const request = require('request')

const url = "https://google.com/"

request(url, (error, response, body) => {
  if(error)
    console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  fs.writeFile('./text3.html', body, (err) => {
    if(err)
      console.log(err);
    else{
        console.log("File written successfully");
    }
  });
  console.log('body:', body); 
});

const readStream = 'https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png';
request(readStream).pipe(fs.createWriteStream('./img3.png'))