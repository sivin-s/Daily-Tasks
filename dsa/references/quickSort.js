
// recursion

function quickSort(arr=[22,29,100,-23,32,40]){
  // s-> 40 
  // [22,29,-23,32][40][100] // 40 -l <->  [100] base case encountered
  // [22,29,-23][32][] // 32 -l <->  [] -r base case  encountered
  // [][-23][22,29] // -23 -l <->  [22,29]  -r base case   encountered
                                 // [22][29]
                                 // [22]
  // [] // base case encountered
 // res: 
 // [-23,22,29,32,40,100]
  console.log();
   if(arr.length<2){
        return arr
   }
   let leftArr=[]
   let rightArr=[] 
   let pivot=arr[arr.length-1]

   for(let i=0;i<arr.length;i++){
        if(arr[i]>pivot){
           rightArr.push(arr[i])
        }else if(arr[i]<pivot){
           leftArr.push(arr[i])
        }
   }
   return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

// console.log(quickSort())

// worst case complexity - O(n^2) 
// Avg case complexity - O(nlogn) //log n -> recursively divided arr into smaller arrays , n for for loop