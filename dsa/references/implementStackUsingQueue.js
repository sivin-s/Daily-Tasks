class StackUsingQueue{
    constructor(){
        this.queue1=[]
        this.queue2=[]
    }            
    push(val){    //! ex: // q1->4,3,2,1 , q2->
        this.queue2.push(val);
        while(this.queue1.length>0){
            this.queue2.push(this.queue1.shift());
        };
        [this.queue1,this.queue2]=[this.queue2,this.queue1]; // Destructuring array
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

