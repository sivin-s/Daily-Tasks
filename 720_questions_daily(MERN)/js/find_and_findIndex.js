const arr=[1,2,3,4,5,5]

console.log(arr.find((cu)=>{
    if(cu===5){
        return cu
    }
}))

console.log(arr.findLast((cu)=>{
    if(cu===5){
        return cu
    }
}))

console.log(arr.findIndex((cu)=>{
    if(cu===5){
        return cu
    }
}))

console.log(arr.findLastIndex((cu)=>{
    if(cu===5){
        return cu
    }
}))