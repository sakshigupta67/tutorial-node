const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('welcome')
// })

// using Event Emitter API

const server = http.createServer()

//emit request event
// subscribe to it /listen to it / respond to it

server.on('request' ,(req, res) => {
    res.end('welcome')
})

server.listen(5000)

// http.createServer() returns a server object.

// That server is actually an EventEmitter under the hood.

// It can emit events like 'request', 'close', 'connection', etc.