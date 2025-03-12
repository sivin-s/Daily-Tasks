const {exec} = require('child_process');

exec('dirs',(err,stdout,stderr)=>{
     if(err){
        console.log(`error : ${err.message}`);
        return
     }
     if(stderr){
       console.log(`stderr : ${stderr}`);
       return
     }
     console.log(`stdout : ${stdout}`)
})



