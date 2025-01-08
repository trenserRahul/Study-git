const fs = require('fs')

// fs.writeFileSync("./test" , "Hey there hi")
fs.appendFileSync("./test",`${Date.now()}, hey`);
