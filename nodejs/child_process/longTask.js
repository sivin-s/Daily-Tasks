
//eg: computation task sync way
function longComputation(){
    let sum=0;
    for(let i=0;i<1e9;i++){
        sum+=i
    }
    return sum
} 

//!  childprocess....
process.on('message',(message)=>{
   if(message==='start'){
    const sum = longComputation()
    process.send(sum) //! child form to parent 
   }
})

// ToDO:  using child process
// const pro = new Promise((resolve,reject)=>{
//     var cal =10

//     for(let i=0;i<10**8;i++){
//         cal*=cal
//     }
//     resolve(cal)
// })

// console.log(pro.then((re)=> console.log(re)))