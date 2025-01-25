function mergeSorted(arr){
    if(arr.length<2) return arr;
    const mid = Math.floor(arr.length/2);
    const leftArr=arr.slice(0,mid);
    const rightArr=arr.slice(mid);
    
    console.log("mergeSorted(rightArr) > ",mergeSorted(rightArr),'mergeSorted(leftArr)',mergeSorted(leftArr));
    
    return merge(mergeSorted(leftArr),mergeSorted(rightArr));
}

function merge(leftArr,rightArr){
    console.log("leftArr merge() > ",rightArr,"rightArr merge() >",leftArr);
    
    const sortedArr=[];
    while(leftArr.length&&rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr,...leftArr,...rightArr];
}

const arr=[8,20,-2,4,-6]
console.log(mergeSorted(arr));
