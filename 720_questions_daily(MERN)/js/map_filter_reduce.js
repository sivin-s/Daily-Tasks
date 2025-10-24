const arr=[1,2,3,4,5,6]

console.log(arr.map(cu => {
    if(cu!==5){
        return cu+''
    }
  return cu
}))

console.log(arr.filter((cu)=>{
    if(cu!==5){
       return true
    }
}))

console.log(arr.reduce((acc,cu,i)=>{
    if(!acc[cu]){
         acc[cu] = i
    }
    return acc
},{}))