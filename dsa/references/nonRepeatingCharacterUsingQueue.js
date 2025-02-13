/*
4. First Non-Repeating Character
Problem: Find the first character that does not repeat in a string.

Input: "aabbcddce"
Output: "e"
*/

function NonRepeatingChar(str){
    const queue=[];
    const map={};
    for(let i=0;i<str.length;i++){
       map[str[i]]=(map[str[i]]||0)+1
       queue.push(str[i])
    }
    for(let i=0;i<str.length;i++){
     const char = queue.shift()
      if(map[char]===1){
         console.log(char)
      }
    }
  
 }
 NonRepeatingChar("aabbcddce")