/*
  if the stack is empty return true is matched eg: '('===')'
  if not ')'==='(' return false mismatch  
*/

function IsValid(){
    this.stack=[]
    this.map={
        '(':')',
        '{':'}',
        '[':']'
    }
    this.check=function(str){
                    
         for(let i=0;i<str.length;i++){
            console.log(str[i]);
            
             const char=str[i];             
             if(this.map[char]){     
                this.stack.push(char);
             }else{
                if(this.stack.length===0||this.map[this.stack.pop()]!==char){
                    return false;
                }  
             }
         }
         return this.stack.length===0
    }
}

const i= new IsValid()
console.log(i.check("()")) // Output: true
