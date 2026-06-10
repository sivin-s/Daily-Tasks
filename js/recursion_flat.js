const arr =  [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

function flat(arr,d=1){
  if(d<=0) return []
  const tmp=[]
  for(const ele of arr){
    if(Array.isArray(ele)){
        tmp.push(...flat(ele,d-1))
    }else{
      tmp.push(ele)
    }
  }
  return tmp
}

console.log(flat(arr))