class MinHeap{
    constructor(){
        this.heap=[]
    }
    _parentIndex(index){
        return Math.floor((index-1)/2);
    }
    _leftChildIndex(index){
        return ((2*index)+1);
    }
    _rightChildIndex(index){
        return ((2*index)+2);
    }
    _swap(index1,index2){  
        let tmp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = tmp
    }
    insert(val){
        this.heap.push(val)
        this._heapifyUp(this.heap.length-1)
    }
    _heapifyUp(index){
        while(index>0){
            let parentIndex  = this._parentIndex(index)
            if(this.heap[parentIndex]<=this.heap[index]){
                break; // breaking the loop
                // means : parent is already small there is no need of swapping parent and child node. It cause loop
                // cause error.
            }
            this._swap(parentIndex,index)
            index= parentIndex
        }
    }
    _heapifyDown(index){
        while(true){
            let leftChild= this._leftChildIndex(index);
            let rightChild= this._rightChildIndex(index);
            let smallest= index;
            if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[smallest]){
                smallest= leftChild
            }
            if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[smallest]){
                smallest= rightChild // 3 < 10
            }
            if(smallest===index){
                break;
            }
            this._swap(index,smallest)
            index = smallest
        }
    }
    delete(){
        if(this.heap.length===0) return undefined
        if(this.heap.length===1) return this.heap.pop() // prevents from loop. deleting last element and again insert same index.

        const val = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._heapifyDown(0)
        return val
    }
    isEmpty(){
        return this.heap.length===0
    }
    isPeek(){
        return this.heap[0]
    }
    extractMin(){
        if(this.heap.length===0) return undefined
        if(this.heap.length===1) return this.heap.pop()
        const min = this.heap[0]
         this.heap[0]= this.heap.pop()
         this._heapifyDown(0)
         return min
    }
}

function heapSorted(arr){
    const sorted= [];
    const heap1 = new MinHeap()
    for(let i=0;i<arr.length;i++){
        heap1.insert(arr[i])
    }
   while(!heap1.isEmpty()){
       sorted.push(heap1.delete())
   }
    return sorted
}

console.log(heapSorted([2,1,-4,800,3,-5,300]))