/*
 ##### Note ######
  " ! " -> " non-null assertion " we give explicity tells typescript it willn't be a null ('i checked it').
  " as  HTMLInputElement" -> " type assertion " or type casting
*/


const button = document.querySelector("button")!;
const input1= document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;


function add(num1:number,num2: number){ 
    return num1+num2;
}
//! Note : js return input value as string even it number ..
button?.addEventListener("click",function(){
    console.log(add(+input1.value,+input2.value));
})