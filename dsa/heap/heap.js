class MinHeap{   //eg: min-heap : parent node (value -> 0) -> left node (value -> 1) -> right node (value -> 2)
    constructor(){  // eg : max-heap : parent node (value -> 2) -> left node (value -> 1) -> right node (value -> 0)
        this.heap=[]
    }
    swap(i,j){  // swap
        [[this.heap[i]],[this.heap[j]]]=[[this.heap[j]],[this.heap[i]]]
    }

    parentIndex(i){ // to get parent index (helper fn)
        return Math.floor((i-1)/2);
    }

    leftChildIndex(i){ // to  get right index (helper fn)
        return 2*i+1;
    }

    rightChildIndex(i){ // to get right child index (helper fn)
        return 2*i+2;
    }

    insert(value){
        this.heap.push(value)
        let currentIndex = this.heap.length-1;
        while(currentIndex>0 && this.heap[currentIndex] < this.heap[this.parentIndex(currentIndex)]){
            this.swap(currentIndex,this.parentIndex(currentIndex));
            currentIndex = this.parentIndex(currentIndex)
        }
    }

    // extract the minimum element (root)  from the heap
    extractMin(){
        if(this.heap.length===0) return null;
        const min = this.heap[0];  // Root is the minimum element
        const lastElement = this.heap.pop();  // Remove the last element
        if(this.heap.length>0){
            this.heap[0] = lastElement // Move the last element to the root
            this.heapifyDown(0);  // Heapify down to restore the heap property
        }
        return min;
    }

    // heapify down to maintain the heap property
    heapifyDown(index){
        let smallest = index;
        const left = this.leftChildIndex(index)
        const right = this.rightChildIndex(index)

        // find the smallest among the current node and its children
        // why we use " left < this.heap.length " take heap length because to avoid out of boundary error.
        if(left<this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left
        }
        if(right<this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right
        }
        // if the smallest isn't the current node, swap and continue heapifying.
        if(smallest !== index){
            this.swap(index,smallest);
            this.heapifyDown(smallest);
        }
    }

    peek(){
        return this.heap[0]
    }

    size(){ // get the size of the heap
        return this.heap.length
    }
}

const minHeap = new MinHeap()
minHeap.insert(10)
minHeap.insert(5)
minHeap.insert(20)
minHeap.insert(1)

console.log("Heap :",minHeap.heap);
console.log("Extract MIn :", minHeap.extractMin())
console.log("Heap after extraction : ", minHeap.heap);