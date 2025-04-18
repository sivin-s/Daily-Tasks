/*
  we are doing implicit not in explicit ASCII conversion like "charCodeAt()"".
  while comparing javascript automatically compare with characters.
*/

function merge(left,right){
    let result=[]
    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex<left.length&&rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++
        }else{
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

function mergeSort(arr){
     if(arr.length<=1){
        return arr;
     }
      const middle=Math.floor(arr.length/2);
      const left= arr.slice(0,middle)
      const right = arr.slice(middle)
      return  merge(mergeSort(left), mergeSort(right))
}

function sortString(str){
    const charArray=str.split('');
    const sortedArray = mergeSort(charArray)
    return sortedArray.join('')
}

const inputSting = "javascript"
const sortedString = sortString(inputSting)
console.log(sortedString)






