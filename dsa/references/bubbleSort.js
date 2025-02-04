const arr=[4,1,2,3,5]
let swapped;
do{
    swapped=false // O(1)
    for(let i=0;i<arr.length-1;i++){ // O(n)
       if(arr[i+1]>arr[i]){
           [arr[i],arr[i+1]]=[arr[i+1],arr[i]] // O(1)
           swapped=true  // O(1)
       }
    }
}while(swapped) // O(n)

console.log(arr);

// O(n^2) + O(3)
// T-> O(n^2)
// S-> O(1)

