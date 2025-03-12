const app  = require('express')()
const cluster = require('cluster')
const os = require('os')

const numCpu = os.cpus().length

app.get('/',(req,res)=>{
    // let cal=10
    for(let i=0;i<1e8;i++){
    //    cal*=cal
    }
   
    res.send(`ok... running from ${process.pid}`)
   // cluster.worker.kill() //! study purpose.
})

//!  creating multiple instance.
if(cluster.isMaster){
    //! check if it 'master process' or not . if it is master process then create a worker process -
    //! creating worker process if the cluster isMaster
    for(let i=0;i<numCpu;i++){
        //! cluster.fork() uses child_process fork()
        cluster.fork()
    }
    //! listen for event - 'exit' event get if any of the worker died!
    cluster.on('exit',(worker,code,signal)=>{
          console.log(`worker ${worker.process.pid} died!`);
          //! why we again fork() because if all work died then we can again initialize work again -
          //! for that we use fork().
          cluster.fork()
    })
}else{
    //! all workers  shared same ports . we don't want to create different port for different workers.
app.listen(8080,()=> console.log(`server started.... ${process.pid}`))    
}

// creating single instance without cluster module.
// app.listen(8080,()=> console.log(`server started.... ${process.pid}`))    
