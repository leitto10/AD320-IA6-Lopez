var fs = require('fs');

var myVar = fs.readFileSync(process.argv[2]);
console.log(myVar.toString().split('\n').length-1);
