const fs = require("fs")

const http = require("http")

fs.writeFile("index.html" , "<h1> Hello World</h1>",(error) => {
    console.log(error)
});


// const http = require("http");
http.createServer((req, res) => {
    var data = fs.readFileSync("index.html" , "utf-8");
    console.log(data)
    res.writeHead(200 , {'content-type' : 'text/html'}) 
    res.end(data);

}).listen(3000);


