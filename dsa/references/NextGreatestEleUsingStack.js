/*
  Q, Next Greater Element  ?
     Note : why we use " stack " to get recent value (recent value is greatest value).
     Note: why we check reverse for reduce time complexity, 
     other hand when we use L to R approach we want to check again because of that time complexity O(n) increasing.
*/

function NextGreatestEle(){
    this.stack=[]
    this.result=[]
    this.findNextGreatestEle =function (arr){
      this.result=new Array(arr.length).fill(-1);
       for(let i=arr.length-1;i>=0;i--){
          while(this.stack.length>0&&this.stack[this.stack.length-1]<=arr[i]){
              this.stack.pop()
          }
          if(this.stack.length>0){
              this.result[i]=this.stack[this.stack.length-1]
          }
          this.stack.push(arr[i]);
       }
       return this.result
    }
  }
  const a = new NextGreatestEle()
  const res = a.findNextGreatestEle([4, 5, 2, 10, 8])
  console.log(res);
  
  /*
  Input: [4, 5, 2, 10, 8]
  Output: [5, 10, 10, -1, -1]
  */
  
  