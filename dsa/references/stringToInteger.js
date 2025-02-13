/*
7. Convert String to Integer (atoi)
Problem: Implement a function to convert a string into an integer like parseInt().

Input: "1234"
Output: 1234

*/

function StringToInteger(str){
    // console.log(Number.parseInt(str,10));
    let queue=[]
    let res=""
    for(let i=0;i<str.length;i++){
       queue.push(str[i])
    }
  
    for(let i=0;i<str.length;i++){
         res+=queue.shift()+''
    }
    return +res
    
  }
  console.log(StringToInteger("1234"));
  