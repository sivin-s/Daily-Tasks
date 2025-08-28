class Private_demo{
    // private name: string;
    // protected age: string;
    constructor(name,age){
       this.name=name;
       this.age=age;
    }
    test(){
        console.log(this.age)
    //   return this.age
    }
    hi(){
        return this.test()
    }
    get getValue(){
        return this.name;
    }
    set setValue(name){
        this.name=name
    }
    
}


const p = new Private_demo("hi",'7')
// console.log(p.test())
console.log(p.setValue="7")
console.log(p.getValue)

// export{}