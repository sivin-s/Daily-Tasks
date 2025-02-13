/*
  Q,  Check for anagrams?

  Input: "listen", "silent"
  Output: true
  Input: "hello", "world"
  Output: false

*/

function check(str1,str2){
    let queue=[];
   const sortedStr1 = [...str1].sort();
    const sortedStr2 = [...str2].sort();
      if(str1.length!==str2.length) return false
      for(const char of sortedStr1){
         queue.push(char)
      }
      for(let i=0;i<sortedStr2.length;i++){
          if(queue.shift()!==sortedStr2[i]){
               return false
          }
      }
  
      return true
      
  }
  
  console.log(check("listen","silent"))