const http = require('http')

// req --> request , res --> response 


// const server = http.createServer((req, res) => {
// console.log(req)
// // go to local host 5000 and refresh
// res.write('Welcome to our home page')
// res.end()
// })


const server = http.createServer((req , res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
    res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we can't seem to find the page you are looking for </p>
        <a href="/">back home</a>
        `)
})

server.listen(5000)