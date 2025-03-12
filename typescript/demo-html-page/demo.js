/*
 ##### Note ######
  " ! " -> " non-null assertion " we give explicity tells typescript it willn't be a null ('i checked it').
  " as  HTMLInputElement" -> " type assertion " or type casting
*/
var button = document.querySelector("button");
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
//! Note : js return input value as string even it number ..
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
