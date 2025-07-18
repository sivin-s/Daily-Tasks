class MaxHeap{
    constructor(){
        this.heap=[]
    }
    _parentIndex(index){
        return Math.floor((index-1)/2);
    }
    _leftChildIndex(index){
        return (2*index+1);
    }
    _rightChildIndex(index){
        return (2*index+2);
    }
    _swap(index1,index2){
        let tmp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = tmp;
    //   [this.heap[index1],this.heap[index2]]=[this.heap[index1],this.heap[index2]]
    }
    _heapifyUp(index){
        while(index>0){
            let parentIndex = this._parentIndex(index);
            if(this.heap[parentIndex]>=this.heap[index]){
                break;
            }
            this._swap(parentIndex,index);
            index = parentIndex;
        }
    }
    insert(val){
        this.heap.push(val);
        this._heapifyUp(this.heap.length-1);
    }
    delete(){
         let val =  this.heap[0]
         this.heap[0] =   this.heap.pop()
         this._heapifyDown(0)
         return val;
    }
    _heapifyDown(index){
        while(true){
            let leftChild = this._leftChildIndex(index)
            let rightChild = this._rightChildIndex(index)
            let largest = index;
            if(leftChild<this.heap.length && this.heap[leftChild]>this.heap[largest]){
                largest = leftChild
            }
            if(rightChild<this.heap.length &&  this.heap[rightChild]>this.heap[largest]){
                largest = rightChild
            }
            if(largest===index){
                break;
            }
            this._swap(index,largest)
            index = largest;
        }
    }
}

function heapSorted(arr){
    const sorted = []
    const heap1 = new MaxHeap()
    for(let i=0;i<arr.length;i++){
        heap1.insert(arr[i])
    }
    // for(let i=0;i<arr.length;i++){
    //     sorted.push(heap1.delete())
    // }
    return heap1;
}
console.log(heapSorted([1,20,-1,40,60]))