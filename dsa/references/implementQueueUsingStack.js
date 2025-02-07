
class QueueUsingStack{
    constructor(){
        this.stackOne=[]
        this.stackTwo=[]
    }
    push(val){
      this.stackOne.push(val)
    }
    pop(){
       if(this.stackTwo.length===0){
           while(this.stackOne.length>0){
                this.stackTwo.push(this.stackOne.pop())
           }
       }
       if(this.stackTwo.length>0){
         return  this.stackTwo.pop()
      }else{
        console.log('queue is empty');
        return null
      }
    }
    isEmpty(){
        return this.stackOne.length===0&&this.stackTwo.length===0
    }
}

const o = new QueueUsingStack()
o.push(5)
o.push(50)
o.pop()
o.pop()
console.log(o);

