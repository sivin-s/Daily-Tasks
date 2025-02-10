/*
Input: "hello world"
Output: "world hello"
*/
function reverseWords(str){
    // no methods
  
    //  const left=[]
    //  const right=[]
    //  let currentArr=left
    //  for(let i=0;i<str.length;i++){
    //      if(str[i]===' '){
    //        currentArr=right
    //      }else{
    //       currentArr.push(str[i])
    //      }
    //  }
     
    // stack 
  
   if(false){
    const stack=[]
    const words = str.split(' ')
   
    for(const word of words){
        stack.push(word)
    }
  
    let reverseWordsStack=''
  
    while(stack.length>0){
       reverseWords+=stack.pop()+' '
    }
    console.log(reverseWords);
   }
  
  }
  reverseWords('hello world')
  /*
    hello world
    world hello
  */
  
  
  
  
  
  