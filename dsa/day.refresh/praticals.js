// stack

class Stack{
    constructor(){
        this.items=[]
    }
    push(ele){
        this.items.push(ele)
    }
    pop(){
        this.items.pop()
    }
    size(){
        return this.items.length
    }
    isEmpty(){
        return this.items.length===0
    }
    print(){
        for(let i=0;i<this.items;i++){
            console.log(this.items[i]);
            
        }
    }
}

// queue

class Queue{
    constructor (){
        this.items=[]
    }
    enqueue(ele){
        this.items.push(ele)
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }
    peek(){
       if(!this.isEmpty()){
           return this.items[0]
       }
       return null
    }
    print(){
        if(!this.isEmpty()){
            return this.items.toString()
        }
        return null
    }
}

class CircularQueue{
    constructor(capacity){
        this.capacity=capacity
        this.front=-1
        this.rear=-1
        this.currentCapacity=0
        this.items=new Array(capacity)
    }
    isFull(){
        return this.capacity===this.currentCapacity
    }
    enqueue(ele){
        if(!this.isFull()){
             this.rear=((this.rear+1)%this.capacity)
             this.items[this.rear]=ele
             this.currentCapacity++
             if(this.front===-1){
                 this.front=this.rear
             }
        }
    }
    isEmpty(){
        return this.currentCapacity===0
    }

    dequeue(){
        if(this.isEmpty()){
           return null 
        }
     
            this.items[this.front]=null
            this.front=((this.front+1)%this.capacity)
            this.currentCapacity--
      if(this.isEmpty()){
        this.front=-1
        this.rear=-1
      }
      return this.items
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }
    print(){
        if(!this.isEmpty()){
            return null
        }else{
            let i=this.front
            let result=''
            while(i!==this.rear){
                 rear+=this.items[i]+''
                 i=(i+1)%this.capacity
            }
            result+=this.items[this.capacity]
            console.log(result);
            
        }
    }
}






