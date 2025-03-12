async function print_slow (){
    console.log('start');
    
    for(let i=1;i<=10;i++){
        console.log(i)
        await new Promise((res,rej)=> setTimeout(res,2000));
    }
    console.log('end');
    
}

print_slow()