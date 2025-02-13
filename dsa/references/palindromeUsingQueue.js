/*
6. Check If String Is a Palindrome
Problem: Determine if a string reads the same forward and backward.

Input: "racecar"
Output: true

*/

function check(str){
    const queue1=[]
    let res=""
     for(let i=0;i<str.length;i++){
        queue1.push(str[i])
     }
     
     while(queue1.length>0){
       res+=queue1.shift()+''
     }
  
     return str===res
  
  }
  console.log(check("racecar"));
  