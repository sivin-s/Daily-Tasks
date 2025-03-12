const {spawn} = require('child_process');

const child = spawn('ls',['-lh'])

child.stdout.on('data',(data)=>{
    console.log(`stdout : ${data}`);
})

child.stderr.on('data',(data)=>{
    console.log(`stderr : ${data}`);
})

child.on('error',(err)=>console.log(`error : ${err.message}`))

// exit is successfully exit or error happened...
child.on('exit',(code,signal)=>{
    if(code) console.log(`Process exit with code : ${code}`);
    if(signal) console.log(`Process killed with signal : ${signal}`)
    console.log(`Done 👍`)
    
})