//  this events module gives us the EventEmitter class.
// EventEmitter is used to create, listen, and handle custom events in Node.js.


const EventEmitter  = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response' , (name , id) =>{
    console.log(`data received  :  ${name} with id ${id}`)

})
customEmitter.on('response' , () =>{
    console.log(`some other logic here`)

})
customEmitter.on('response' , (name) =>{
    console.log(`data received i s ${name}`)

})

customEmitter.emit('response' ,  'john' , 78)


// ❤️ 'response' is event name that can also be loop , nested anything
// on - subscribe/listen for all events
// emit - emit/trigger/fire an event([trigger them]
// order of the code(.emit) matters in console to print out[ut


