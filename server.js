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


