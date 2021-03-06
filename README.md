# simple-node-reload-and-refresh

Simple skeleton for sketch projects which refreshes both app and result in browser.
[browser-refresh](https://github.com/patrick-steele-idem/browser-refresh) is used to accomplish it. You can find more info [here](https://github.com/patrick-steele-idem/browser-refresh).

## Installing and running
```
git clone https://github.com/janpi242/simple-node-reload-and-refresh.git
cd simple-node-reload-and-refresh
npm i
npm run dev
```

## Using with node 'express'
If you are using 'express' use it like this:

```
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.write('<h1>Auto refresh</h1>')
    res.write(`<script src=${process.env.BROWSER_REFRESH_URL}></script>`);
    res.end();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)

    if (process.send) {
        process.send({ event: 'online', url: 'http://localhost:3000/' })
    }
})
```