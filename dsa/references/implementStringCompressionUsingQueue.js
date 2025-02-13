/*
5. Implement String Compression
Problem: Implement a function that compresses a 
string using the counts of repeated characters.

Input: "aaabbc"
Output: "a3b2c1"
*/

function compressesStr(str){
    const map={}
    const queue=[]
    let res=""
    for(let i=0;i<str.length;i++){
       map[str[i]]=(map[str[i]]||0)+1
       queue.push(str[i])
    }
   
    while(queue.length>0){
      const char=queue.shift()
         if(map[char]){
            res+=char+map[char]+''
            delete map[char]
         }
    }
   return res
}

console.log(compressesStr("aaabbc"))