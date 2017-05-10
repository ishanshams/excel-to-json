var fs = require('fs');
convertExcel = require('excel-as-json').processFile;

var src = "C:/Users/Ishan/Documents/GitHub/excel-to-json/excel-as-json/spreadsheet/JSONExample.xlsx";
var dest = "C:/Users/Ishan/Documents/GitHub/excel-to-json/excel-as-json/destination"

var result = convertExcel(src,undefined,false,function(err,data) {
    if(err){
        console.log(err); 
        console.log(data);
    } else {
        for (var i = 0; i < data.length; i++) {
            var json = JSON.stringify(data[i], null, 4);
            //console.log(json)
            var path = dest + "result_" + i + ".json"; 
            fs.writeFile(path, json, 'utf8', function(err,data) {
                if (err) {
                    console.log(err);
                }
            });
        }
    }
});