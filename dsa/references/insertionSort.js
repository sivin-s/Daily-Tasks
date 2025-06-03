const arr=[3,5,1,2,0]
for(let i=1;i<arr.length;i++){
    let target=arr[i]
   
   let preIndex=i-1
  
   while(preIndex>=0&&arr[preIndex]>target){
      arr[preIndex+1]=arr[preIndex]
      --preIndex // why we decrement the preIndex because we want to check from 0 . if not decrement the preindex we only compare with previous and adjacent ele not all elements.
   }
   arr[preIndex+1]=target
}
console.log('finally > ',arr);
