function add(n1, n2, showResult, phrase) {
    //! Note : don't evaluate expression inside if block . To solve evaluate expression outside the block scope.
    // if(showResult){
    //! problem when we evaluate expression inside the block scope ' result string '. 
    //     console.log(phrase + num1+num2);
    // }else{
    //     console.log(phrase)
    //     return
    // }
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.log(phrase + ":");
        return;
    }
}
//! Note.. ' Type inferred '
// for 'const' we don't specify type  why for type inference means: typescript detect what type is.
// but 'let' we want to specify type .
// eg : const num1:number = 5; X 'type not required'
// eg : let num1:number = 5;  'type not required'
// eg : let num1:number; 'type is required'
var num3;
var num4 = 5;
var num1 = 5;
var num2 = 5;
var showResult = true;
var result = "Result : ";
//! Note ... Type inferred
//  when declare variable like (let result = 'hello') we assign a string 'let' -
// when we reassign to 'number' it cause because of initially we assign initial value as string.
// eg: let result = "Result : " === let result:string
//  result = 5 (number) -> try to reassign it cause error initial string.
// add(num1,num2,showResult,result)
//! Note.. Type inferred
// for object literals type isn't necessary
//!Note Type inferred
// for array -> ['hello','hi'] -> type is 'string[]'
/* type isn't necessary in object
const obj:object={
    name: 'hi'
} &
const obj: {name:string;age:5}={
                we use type inferred but when we assign another value 10 instead of 5 we get error.-
                This isn't possible in object is possible only in variable.
    name: 'hi',
    age: 5
} &
const obj: {name:string;age:number}={
    name:'hi',
    age:5
}
*/
// const obj={
//     name:'hello',
//     hobbies:['hello',[1]] // type is ' string | number '
// }
//! Note Type inferred
var letters = [];
letters[0] = true;
//  letters[0]=5 X wrong
letters.push(true);
//!Note Type inferred
var str; // any type is possible
str = 'str';
//! Note Tuples
// Tuples are fixed array length and fixed type
var obj = {
    name: 'hello',
    role: [20, 'admin']
};
obj.role[0] = 10;
//obj.role.push(1) // when we push elements into array  more than ' fixed size ' it will not push.
obj.role.push('user');
console.log(obj);
