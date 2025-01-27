// factory fn we can create private variable through closure
function human(){
    let _userName=''
    return{
        name:_userName,
        age:null,
        info:function() {
             return {name:this.name,age:this.age}
            }
    }
}

console.log(human())