// ✅✅ Streams are useful when we have a very very big files
// A stream is a way to read or write data piece by piece (chunks) instead of loading it all at once.


const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt' , {highWaterMark: 90000})

//default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt' , {highWaterMark : 9000})
//  const stream = createReadStream('./content/big.txt' , {encoding:'utf8'})


stream.on('data' , (result) =>{
    console.log(result)
})


//https://chatgpt.com/c/68bd1587-13ec-8323-bf67-66698092dce7
// highWaterMark → It defines the buffer size (how much data to read in one chunk). && controls chunk size (how much data per read).
// encoding → controls data format (Buffer vs String).



