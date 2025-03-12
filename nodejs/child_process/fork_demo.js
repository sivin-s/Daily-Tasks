const app = require('express')();
 const {fork} = require('child_process')

app.get('/one',(req,res)=>{
   const sum = longComputation();
   res.send({sum:sum})
})
app.get('/two',async (req,res)=>{
    const sum = await longComputePromise()
    res.send({sum:sum})
})
app.get('/three',(req,res)=>{
    //! fork() argv is childprocess file src link
  const child = fork('./longTask.js')
  child.send('start') //! sends a message from the parent process to the child process via the IPC channel 
  child.on('message',(sum)=>{
    res.send({sum:sum})
  })
})

app.listen(8080,()=> console.log('server is running 8080'))

// //eg: computation task sync way
// function longComputation(){
//     let sum=0;
//     for(let i=0;i<1e9;i++){
//         sum+=i
//     }
//     return sum
// } 

// eg: computation task async way

function longComputePromise(){
     let sum=0;
    return new Promise((resolve,reject)=>{
        for(let i=0;i<1e9;i++){
            sum+=i;
        }
        resolve(sum);
    })
}