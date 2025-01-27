//
class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        this.items.pop()
    }
    isEmpty(){
        return this.items===0
    }
    push(element){
       return this.items.push(element)
    }
}
