'Use Strict'
const { clear } = require('console');
const fs = require('fs');
const http = require('http');
const url = require('url');
/////////////////////////////////////
// Blocking, synchronous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log(`File written!`);

// Non-blocking, asynchronous
// fs.readFile('./txt/start.txt', 'utf-8', (err, fileText1) => {
//   if (err) return console.log(`ERROR: ${err}`);
//   fs.readFile(`./txt/${fileText1}.txt`, 'utf-8', (err, fileText2) => {
//     console.log(fileText2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, fileText3) => {
//       console.log(fileText3);
//       fs.writeFile('./txt/final.txt', `${fileText2}\n${fileText3}`, err => {
//         if(err) throw err;
//         console.log ('Your file has been written!');
//       });
//     });
//   });
// });


// fs.writeFile('./txt/startout', (err, data)=>{
//   if (err) throw err;
//   console.log(data);
// });
// console.log('File 2 written!')
///////////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;
  if (pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else if (pathName === '/') {
    res.end('This is the HOMEPAGE');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
