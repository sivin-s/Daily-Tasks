class HashTable{
    // #_table
    // #_size
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    #_hash(key){
        let hash=0
        const prime = 31
        for(let i=0;i<key.length;i++){
            // console.log(i,'<.>',key.charCodeAt(i));
           hash = (hash * prime + key.charCodeAt(i) )%this.size
        }
        return total%this.size  // converting string key to hash numerical index (key) ( thats' why we use % 'modular operator' to ensure).
        // why we use size for n of array is 5 range 1-5 we want 0-4 range.
    }
    set(key,value){
      
        const index= this.#_hash(key);
        // this.#_table[index]=value  
        const bucket = this.table[index]
        if(!this.table[index]){   // handling collisions as store [[key,value]]
           this.table[index]=[[key,value]]
        }else{
           const sameKeyItem=bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
  
    }
    get(key){
        const index=this.#_hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
       const index=this.#_hash(key)
        // this.table[index]=undefined
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
             if(this.table[i]){  // no value then it undefined if don't work
                console.log(i, this.table[i]);
             }
        }
    }
}

const hashTable = new HashTable(50)
hashTable.set('hello','anu')
hashTable.set('hello','anu1')
hashTable.set('hello','anu1')
hashTable.set('hello','anu7')
hashTable.display()

