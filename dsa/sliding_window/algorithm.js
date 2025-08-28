
/*
### NOTE ####  sliding window work.
1. [1,2,3] => sum=6 initial window 3 range , 0-3 
2. [2,3,4] => one value add and same subtract from sum , sum = 6+4-1 = 9
3. [3,4,5] => ,,      ,,            ,,         ,,      , sum = 9+5-2 = 12
4. [4,5,6] => ,,      ,,            ,,         ,,      , sum = 12+6-3 = 15
5. [5,6,7] => ,,      ,,            ,,         ,,      , sum = 15+7-4 = 18
max value is 18
*/
// Time complexity -> O(2n) -> O(n) linear
const arr=[1,2,3,4,5,6,7]
const windowSize = 3;

let count = 0;
for(let i=0;i<windowSize;i++){
    count+=arr[i]
}
let max=count;
let n= arr.length
for(let i=1;i<=(n-windowSize);i++){
   count = count-arr[i-1] + arr[i+windowSize-1]
   if(count>max){
     max= count
   }
}
console.log(count)