//  analogy with the callback function

const {readFile, writeFile} = require('fs')
console.log('start')

//  1 ONE WAY
// readFile('./content/first.txt', 'utf-8' , (err, result) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(result)
// })

// continuing upper code

readFile('./content/first.txt' , 'utf-8' , (err , result) =>{
    if(err){
        console.log(err)
        return
    }

    
const first = result;
    readFile('./content/second.txt', 'utf-8' , (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const second= result
 writeFile(
        './content/result-async.txt' ,
    `Here is the result : ${first} , ${second}`
, (err , result)=>{
 if(err){
    console.log(err)
    return
 }
 console.log('done with this task') 
}   
)
} )
})

console.log('starting next task')


// differnce btwn asyn & sync 
//  but this async code is little messy , so we will use async await or prmise s