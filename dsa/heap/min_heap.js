class MinHeap{
    constructor(){
        this.heap=[]
    }
  parentIndex(index){
    return Math.floor((index-1)/2)
  }
  leftIndex(index){
    return  (2*index+1)
  }
  rightIndex(index){
    return (2*index+2)
  }
  swap(a,b){
    let temp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = temp 
   }
  insert(val){
    this.heap.push(val)
    let currIndex = this.heap.length-1
    let parentIndex = this.parentIndex(currIndex)
    while(this.heap[parentIndex]&&this.heap[parentIndex]>this.heap[currIndex]){
        this.swap(currIndex,parentIndex)
        currIndex = this.parentIndex(currIndex)
        parentIndex = this.parentIndex(currIndex)
    }
  }
  delete(){
    let val =  this.heap.shift()
    this.heap.unshift(this.heap.pop())
    let index = 0
    let left = this.leftIndex(index)
    let right = this.rightIndex(index)
    while(this.heap[left]&&this.heap[left]<this.heap[index]||this.heap[right]<this.heap[index]){
        let min = left
        if(this.heap[right]&&this.heap[right]<this.heap[index]){
            min = right
        }
        this.swap(min,index)
        left = this.leftIndex(min)
        right = this.rightIndex(min)
    }
    return val
  }
}
const arr = [5,4,3,2,1]
function heapSort(arr){
    const heap1 = new MinHeap()
    const sorted = []
    for(const ele of arr){
      heap1.insert(ele)
    }
     for(const ele of arr){
        sorted.push(heap1.delete())
     }
    return sorted
}
console.log(heapSort(arr))