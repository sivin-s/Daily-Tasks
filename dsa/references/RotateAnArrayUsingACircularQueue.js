/* Rotate an Array Using a Circular Queue
 Rotate an array k times to the right using a circular queue.
  Input: [1, 2, 3, 4, 5], k = 2
  Output: [4, 5, 1, 2, 3]
*/

// shifting the values 

class Queue{
    constructor(capacity){
       this.capacity=capacity
       this.items= new Array(this.capacity)
       this.front=-1
       this.rear=-1
       this.currentCapacity=0;
    }
    isFull(){
       return this.capacity===this.currentCapacity
    }
    isEmpty(){
       return this.currentCapacity===0
    }
    enqueue(val){
       if(!this.isFull()){
          this.rear = ((this.rear+1)%this.capacity)
          this.items[this.rear]=val
          ++this.currentCapacity
          if(this.front===-1){
              this.front=this.rear
          }
       }else{
          console.log('queue is full');
          return null
       }
    }
    dequeue(){
       if(this.isEmpty()){
          console.log('Queue is empty');
          return null
       }
      
           const item=this.items[this.front]
           this.items[this.front]=null
           this.front=((this.front+1)%this.capacity)
           --this.currentCapacity
           if(this.isEmpty()){
              this.front=-1
              this.rear=-1
           }
       return item
    }
 
    print(){
       if(this.isEmpty()){
          console.log('Queue is empty!');
          return null
       }
     
       let frontTemp=this.front
       let res=''
       while(frontTemp!==this.rear){
          res+=this.items[frontTemp]+','
          frontTemp=(frontTemp+1)%this.capacity
       }
       res+=this.items[frontTemp]
       return res
      
    }
 
    rotate(k){
       if(this.isEmpty()){
          console.log('Queue is empty!');
          return null
       }
       k=k%this.capacity
       for(let i=0;i<k;i++){
          const item=this.dequeue()
          this.enqueue(item) 
       } //! ex:  5,50,500,300,100 : 50,500,300,100,5 ( If k is 1 )
    }
    
 
 
 }
 
 
 const q = new Queue(5)
 q.enqueue(5)
 q.enqueue(50)
 q.enqueue(500)
 q.enqueue(300)
 q.enqueue(100)
 
 q.rotate(1)
 q.print()
 
 console.log(q);
 console.log(q.print());
 