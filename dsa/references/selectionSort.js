const arr=[500,3.8,2.9,10,-1,5]

for(let i=0;i<arr.length;i++){
    let minIndex=i; // track the index of the minimum element
   for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
           minIndex=j  // min index update frequency
        }
   }
   if(i!==minIndex){
       [arr[i],arr[minIndex]]=[arr[minIndex],arr[i ]]
   }
}
console.log(arr);
