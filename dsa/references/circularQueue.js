class circularQueue{
    constructor(capacity){
      this.capacity=capacity
      this.rear=-1
      this.front=-1
      this.items= new Array(capacity)
      this.currentLength=0
    }
    isFull(){
        return this.currentLength===this.capacity
    }
    enqueue(element){
        if(!this.isFull()){
            // after incrementing initial(-1) become 0 (-1+1=0)
            // this.rear++
            this.rear=((this.rear+1)%this.capacity)
            this.items[this.rear]=element
            ++this.currentLength
            if(this.front===-1){
                 this.front=this.rear
            }
        }
    }
    isEmpty(){
        return this.currentLength===0
    }
    dequeue(){
       if(this.isEmpty()){
          return null
       }
       const item = this.items[this.front]
       this.items[this.front]=null
    //    this.front++
       this.front=((this.front+1)%this.capacity) // to ensure //ex: capacity is 5 range goes 1-5 , to ensure it goes 0 to 4
       this.circularQueue--
        if(this.isEmpty()){
            this.front=-1
            this.rear=-1
        }
        return item
    }
    peek(){
       if(!this.isEmpty()){
        return this.items[this.front]
       } 
       return null
    }
    print(){
        if(this.isEmpty()){
             console.log("Queue is Empty!!");
             
             return null
        }else{
            let i=this.front
            let result=''
            while(i!==this.rear){
              result+=this.items[i]+'';
              i=(i+1)%this.capacity
            }
            result+=this.items[this.rear]
            console.log("Queue: "+result);
            
        }
    }
}

const queue = new circularQueue(5)
queue.enqueue(5)
queue.enqueue([])
queue.enqueue(()=>console.log("e"))
queue.enqueue(59)
queue.print()

