const fs = require("fs");
fs.readFile('c:/Users/Thania/Desktop/WebDevelopmentProjects/2.2 Native Modules/message.txt', "utf8", (err,data)=>{
    if(err){
        throw err;
    }
    else{
        console.log(data);
    }
})