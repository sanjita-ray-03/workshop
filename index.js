const fs = require("fs");
const http = require("http");
const productData = fs.readFileSync("./data/products.json","utf-8");
const productTemplate = fs.readFileSync("./public/index.html","utf-8");

const server = http.createServer((req, res) => {
    const pathName= req.url;

    if(pathName === '/'){
      res.writeHead(200);
      res.end(productTemplate);
    }
    else if(pathName === "/products"){
      res.writeHead(200);
      res.end("hello from product page");
    }
    else if(pathName === "/api"){
      res.writeHead(200, {
         "content-type": "application/json",
      });
      res.end(productData);
    }
    else{
      res.writeHead(404,{
         "Content-type": "text/html",
      });
      res.end("<h1>Page not Found</h1>");
    }

    console.log(pathName);

 });
 server.listen(8000, '127.0.0.1', () =>{
    console.log("Listening to incoming request on port : 8000");
 });


// ===============================================================================================================/

// const fs = require("fs");
// const textIn = fs.readFileSync("./data/text-in.txt","utf-8");


// fs.writeFileSync("./data/text-out.txt",`This is a new line \n${textIn}\n Created on: ${Date.now()}`);


// console.log("File read & write completed!");