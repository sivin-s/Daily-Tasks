const obj={
    name:'hello',
    address:{
        name:'hi'
    } 
}

// const shallow = {...obj}
// shallow.address.name='why?'
// console.log(shallow)
// console.log(obj)
// const deep = structuredClone(obj) //1 way deep copy
// deep.address.name='why?'
// console.log(deep)
// console.log(obj)
const deepJson = JSON.parse(JSON.stringify(obj))//2 way deep copy
deepJson.address.name='why?'
console.log(deepJson)
console.log(obj)
