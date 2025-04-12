const arr=[3,5,1,2,0]
for(let i=1;i<arr.length;i++){
    let t=arr[i]
   
   let j=i-1
  
   while(j>=0&&arr[j]>t){
      arr[j+1]=arr[j]
      --j
   }
   arr[j+1]=t
}
console.log('finally > ',arr);
