
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return; // stop here
    }
    else if (req.url === '/about') {
        res.end('Here is our short history');
        return; // stop here
    } 
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});


// issues with the previous code
// Both if conditions are checked independently.

// After sending a response with res.end(...), Node still continues to the next line unless you explicitly return or use else if.

// That means for / and /about, Node is trying to send two responses (which throws an error: "Cannot set headers after they are sent").f
