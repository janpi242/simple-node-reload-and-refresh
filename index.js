const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.write('Simple refresh!');
    res.write(`<script src=${process.env.BROWSER_REFRESH_URL}></script>`);
    res.end();
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

    if (process.send) {
        process.send({ event: 'online', url: `http://${hostname}:${port}/` })
    }

});
