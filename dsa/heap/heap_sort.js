function heapSort(arr){
    const n = arr.length;
    // build a Max Heap
    for(let i = Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }

    // Extract elements one by one
    for(let i=n-1;i>0;i--){
        // swap the root (maximum) with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]]

        // Heapify the reduced heap
        heapify(arr,i,0)
    }
    return arr;
}

// Helper fn to maintain the Max Heap property
function heapify(arr,n,i){
    let largest = i ;
    const left = 2*i+1;
    const right = 2*i+2;
    if(left < n && arr[left] > arr[largest]){
        largest=left
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right
    }
    if(largest!==i){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

const arr = [12,11,13,5,6,7];

console.log("sorted arr : ", heapSort(arr))