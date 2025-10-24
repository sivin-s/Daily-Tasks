const obj={
    name:'hello',
    age: 50
}

function hiCall(num1,num2,num3){
    console.log(num1+num2, this.name, this.age, this.u=9)
}

// hiCall.call(obj,5,10)
// console.log(obj)

function hiApply(num1,num2){
   console.log(num1,num2)
}
// hiApply.apply(obj,[5,10])
// console.log(Math.max([1,2,3]))
// console.log(Math.max.apply(null,[1,2,3]))


function hiBind(num1,num2){
    console.log(num1,num2, this.name)  // just borrow not immediately call 
}
// console.log(hiBind.bind(obj,5,10)())

