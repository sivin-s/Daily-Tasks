// extract reso  :  https://reginafurness.medium.com/implementing-a-max-heap-in-javascript-b3e2f788390c
function heapSort(arr){
    let sorted= [];
    let heap1 = new MaxHeap();
    for(let i=0;i<arr.length;i++){
        heap1.insert(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        sorted.push(heap1.delete());
    }
    return sorted;
}

class MaxHeap{  
    constructor(){
        this.heap=[]
    }
    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    leftChildIndex(index){
        return (2*index+1);
    }
    rightChildIndex(index){
        return (2*index+2);
    }
    swap(a,b){
        let temp = this.heap[a];
        this.heap[a]= this.heap[b];
        this.heap[b] = temp;
        //     [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }
    insert(item){
        this.heap.push(item);
        let index = this.heap.length-1
        let parent = this.parentIndex(index)
        while(this.heap[parent]&&this.heap[parent]<this.heap[index]){
            this.swap(parent,index)
            index = this.parentIndex(index)
            parent =this.parentIndex(index)
        }
    }
    delete(){
        let item  = this.heap.shift()
        this.heap.unshift(this.heap.pop())
        let index = 0;
        let leftChild = this.leftChildIndex(index);
        let rightChild = this.rightChildIndex(index);
        while(this.heap[leftChild] && this.heap[leftChild] > this.heap[index] || this.heap[rightChild] > this.heap[index]){
            let max =  leftChild;
            if(this.heap[rightChild] && this.heap[rightChild]>this.heap[max]){
                max = rightChild
            }
            this.swap(max,index)
            index = max;
            leftChild = this.leftChildIndex(max);
            rightChild = this.rightChildIndex(max);
        }
        return item;
    }
   
} // class

let arr = [1,6,2,3,7,3,4,6,9];
arr = heapSort(arr);
console.log(arr);
