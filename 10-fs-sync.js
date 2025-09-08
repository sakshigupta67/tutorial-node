// FILE MODULE
// TWO type ---> Asynchronously or non blocking &&
//  synchronously or blocking

//  why to use non blocking code

// const fs = require('fs');
// fs.readFileSync(......)

// ✅✅ the above two lines are same as of the below line


// ++++++++++++++++++++BLOKCING++++++++++++++++++++++++++++++

const {readFileSync , writeFileSync} = require('fs');
console.log('start')

// utf - 8 ensures that the result is a string (otherwise it return a buffer )
const first = readFileSync('./content/first.txt' ,'utf-8') 
const second = readFileSync('./content/second.txt' ,'utf-8') 

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} , ${second}`,
 {flag : 'a'}   
)

console.log('done with this task')
console.log('starting the next one')

// a --> append
//  It tells Node.js to add new content at the end of the file instead of overwriting it.

// If the file doesn’t exist, Node will create it.
// other useful falgs --> a , w, r , ax , wx aand all w ois default

