'Use Strict'
const fs = require('fs');

const textIn = fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
console.log(textIn);

const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFile('./txt/output.txt', textOut, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
console.log(`File written!`);