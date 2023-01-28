const os = require('os')

// info about user
const user = os.userInfo();
const eol = os.EOL

console.log({user, eol }, "user")
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS, "currentOs")
console.log(os.networkInterfaces(), "os networkInterfaces")