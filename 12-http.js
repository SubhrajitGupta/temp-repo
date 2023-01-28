const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    if(req.url === '/') {
        res.end('Welcome to our Homepage!!')
    }
    if(req.url === '/about') {
        res.end('Welcome to about page!!')
    }
    // res.write('Welcome to our Homepage!!')
    res.end('Err')
})

server.listen(3000)