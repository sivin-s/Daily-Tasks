const arr=[500,3.8,2.9,10,-1,5]

for(let i=0;i<arr.length;i++){
   for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
   }
}
console.log(arr);
