
class QueueUsingStack{
    constructor(){
        this.stackOne=[]
        this.stackTwo=[]
    }
    enqueue(val){
      this.stackOne.push(val)
    }
    dequeue(){
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
o.enqueue(5)
o.enqueue(50)
o.dequeue()
o.dequeue()
console.log(o);

