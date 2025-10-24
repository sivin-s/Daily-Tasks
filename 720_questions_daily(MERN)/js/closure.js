function  call(){
    let tmp= 5
    return ()=>{
        let a=tmp+1
        console.log(a)
    }
}

const fn = call()
fn()