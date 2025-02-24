function a(n,fn){
    return fn(n)
 }
 function b(n,fn){
      return fn(n)
 }
 function c(n,fn){
     return fn(n)
 }
 
 console.log(a(5,(n)=>{
    return  b(n,(n)=>{
       return  c(n,(n)=>{
              return n+1
         })
     })
 }))
 
 