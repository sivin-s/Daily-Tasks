const {execFile} = require('child_process');
const {join,resolve,relative} = require('path');

const exe_path = resolve(__dirname,join('./tmp_bash_file.exec_file_demo.sh'))

execFile(exe_path,(err,stdout,stderr)=>{
   if(err){
     console.log(`error : ${err.message}`)
     return
   }
    if(stderr){
       console.log(`stderr : ${stderr}`);
       return
    }
   console.log(`stdout :${stdout}`);
   
})


