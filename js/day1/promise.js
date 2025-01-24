const tmpArr=[]
const BASE_URL_ONE = 'https://api.github.com/users{/username}'
const BASE_URL_TWO = 'https://api.github.com/users{/username}'
let isIternate=0
do{
  const promiseOne = fetch(BASE_URL_ONE)
  .then((response)=>response.json())
  .then((data)=> (data))
  const promiseTwo = fetch(BASE_URL_TWO)
  .then((response)=> response.json())
  .then((data)=>(data))
  tmpArr.push(promiseTwo,promiseOne)
  ++isIternate
}while(isIternate<1)
console.log('tmpArr > ',tmpArr);
Promise.any(tmpArr).then((data)=> console.log(data)).catch((e)=>console.log('ERROR >',e))
