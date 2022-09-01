const http = require('http');
const fs = require('fs');

const args = require('minimist')(process.argv.slice(2));
const port = args.port || 3000;
console.log(port);

const fileName = '/public/index.html';
fs.readFile(fileName, 'utf8', (err, data) => {

    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    });
    
    server.listen(port, () => {
        console.log(`Server running at port ${port}`)
    });

    if (err) {
      console.error(err);
      return;
    }
});


// Define a const `server` as an arrow function using http.createServer. 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
// 1. status code 200, 
// 2. set a header with content type `text/html`, and 
// 3. end with the data that you are reading in from ./public/index.html.





// Start the `server` const listening on the port defined by argument in your `port` const. 
// Put the exact message `Server listening on port ${port}` on the console log. 




// That's it! You're all done!