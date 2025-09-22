const os =require('os')
// const os =require('./os') ❌❌


// os module provides very useful methods to interact with operating system as well as the server


//info about current user
const user = os.userInfo()

console.log(user)



//  method returns the system uptime in seconds

console.log(`The system Upitme is ${os.uptime()} seconds`)

const currentOS ={
    name : os.type(),
    reease: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),

}
console.log(currentOS)