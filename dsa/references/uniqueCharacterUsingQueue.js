// First Unique Character in a String using queue
/* 
Input: "aabbcddce"
Output: "e"
*/

function uniqueCharacter(str){
     let queue=[]
     let frequency= new Map()
     for(let i=0;i<str.length;i++){
        frequency.set(str[i],(frequency.get(str[i])||0)+1)
        queue.push(str[i])
     }
     while(queue.length>0){
        const char = queue.shift()
        if(frequency.get(char)===1){
            return char
        }
     }
     return -1
}

console.log(uniqueCharacter("aabbcddce"))