const fs = require('fs')
const handlebars = require('handlebars')

const input = fs.readFileSync('./inputData2.xml').toString()

const template = handlebars.compile(input);

const data = {
    "product":
        [
            {
                "baseId": "1",
                "feature": {
                    "1": "parent",
                    "2": "first entry"
                },
                "contentType": {
                    "1": {
                        "value": "pure"
                    },
                    "2": {
                        "value": "mix"
                    }
                },
                "isActive": true,
                "childProducts": [
                    {
                        "baseId": "1-1",
                        "isActive": true
                    },
                    {
                        "baseId": "1-2",
                        "isActive": false
                    },
                    {
                        "baseId": "1-3",
                        "isActive": true
                    },
                    {
                        "baseId": "1-4",
                        "isActive": true,
                        "feature": {
                            "1": "parent",
                            "2": "first entry"
                        },
                        "searchTerms": {
                            "0": "glue",
                            "1": "adhesive",
                            "2": "stick"
                        }
                    }
                ]
            },
            {
                "baseId": "10",
                "isActive": true,
                "searchTerms": {
                    "0": "glue",
                    "1": "adhesive",
                    "2": "stick"
                },
                "childProducts": [
                    {
                        "baseId": "10-1",
                        "isActive": true,
                        "searchTerms": {
                            "0": "glue"
                        }
                    },
                    {
                        "baseId": "10-2",
                        "isActive": false
                    },
                    {
                        "baseId": "10-3",
                        "isActive": true
                    },
                    {
                        "baseId": "10-4",
                        "isActive": true
                    }
                ]
            }
        ]
}

const res =  template(data);

fs.writeFile('./text2.xml', res, (err) => {
    if(err) throw err;
    else{
        console.log('Done')
    }
})