//Find the First Repeating Element in an Array


function findFirstRepeating(arr){
  const set = new Set()
  for(const ele of arr){
     if(set.has(ele)){
        return ele
     }else{
        set.add(ele)
     }
  }
  return null
}


console.log(findFirstRepeating([1, 2, 3, 4, 2, 5]));  
// Output: 2

console.log(findFirstRepeating(["a", "b", "c", "a", "d", "e"]));  
// Output: "a"

console.log(findFirstRepeating([10, 20, 30, 40]));  
// Output: null
