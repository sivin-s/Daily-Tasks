/*
Longest Common Prefix
Problem: Given an array of strings, find the longest common prefix.

Input: ["flower", "flow", "flight"]
Output: "fl"

*/

function check(arr){
    let queue=[]
    let map={}
    let result='';
    for(let i=0;i<arr.length;i++){
       for(let j=0;j<arr[i].length;j++){
          map[arr[i][j]]=(map[arr[i][j]]||0)+1
          queue.push(arr[i][j])
       }
    }
    const maxValue  = Math.max(...Object.values(map))
   
    for(let i=0;i<queue.length;i++){
      const char = queue.shift()
       if(map[char]===maxValue){
           result+=char+''
       }
    }
    return result
  
   
  }
  
  const a = check(["flower", "flow", "flight"])
  console.log(a)