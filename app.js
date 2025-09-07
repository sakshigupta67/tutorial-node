 const path = require('path')

 console.log(path.sep) // \ --> windows

 //joins the sequence of path segments using that platform specific seperator 
//  it returns a normalize resulting path

const filePath = path.join('./Content/' , 'subFolder' ,'test.txt')
console.group(filePath)

// const result = path.join('/folder', 'subfolder', '..', 'file.txt');
// .. moves the directory up

const base = path.basename(filePath)
console.log(base)

