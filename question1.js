const xml2js = require('xml2js')
const fs = require('fs')
const parser = new xml2js.Parser();

fs.readFile('./text1.xml', (error, data)=> {
    if(error)
        throw error;
    else{
        console.log(data);
        parser.parseString(data, (error, result)=> {
            console.log(result);
        })
    }
})