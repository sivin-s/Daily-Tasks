class StackUsingQueue{
    constructor(){
        this.queue1=[]
        this.queue2=[]
    }
    push(val){
        this.queue2.push(val);
        while(this.queue1.length>0){
            this.queue2.push(this.queue1.shift());
        };
        [this.queue1,this.queue2]=[this.queue2,this.queue1];
    }

    isEmpty(){
        return this.queue1.length===0
    }

    pop(){
        if(!this.isEmpty()){
          return  this.queue1.shift()
        }else{
            return null
        }
    }
    peak(){
        if(!this.isEmpty()){
            return this.queue1[0]
        }else{
            console.log("Stack is empty");
            
            return null
        }
    }

}  

