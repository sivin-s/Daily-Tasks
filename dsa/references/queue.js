// FIFO using Arr
// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     enqueue(element){
//         this.items.push(element)  // O(1)
//     } 
//     dequeue(){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     size(){
//        return this.items.length
//     }
//     print(){
//         if(!this.isEmpty()){
//            return this.items.toString()
//         }
//         return null
//     }
//     // clear(){
//     //     if(!this.isEmpty()){
//     //         return this.items.length=0
//     //     }
//     //     return null
//     // }
// }

// const queue = new Queue()
// queue.enqueue(5)
// queue.enqueue(50)
// console.log('removed > ', queue.dequeue());
// console.log(queue.clear());
// console.log(queue.print())


// instead of array object in Queue

// using as object
class Queue{
   constructor(){
      this.items={}
      this.front=0  // tracker pointer
      this.rear=0 // tracker pointer
   }
   enqueue(element){
       this.items[this.rear]=element
       ++this.rear
   }
   size(){
      return (this.rear-this.front)
   }
   isEmpty(){
      return (this.rear-this.front)===0
   }
   dequeue(){
      if(!this.isEmpty) return delete this.items[this.front]
      ++this.front
   }
   clear(){
     if(!this.isEmpty){
        this.items={}
        this.front=0
        this.rear=0
     }
        
     return null
   }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(5)
console.log(queue.size());



