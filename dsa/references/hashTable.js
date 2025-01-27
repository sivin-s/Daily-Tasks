class HashTable{
    #_table
    #_size
    constructor(size){
        this.#_table=new Array(size)
        this.#_size=size
    }
    #_hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            // console.log(i,'<.>',key.charCodeAt(i));
           total+=key.charCodeAt(i) 
        }
        return total%this.#_size // converting string key to hash numerical index (key) ( thats' why we use % 'modular operator' to ensure).
        // why we use size for n of array is 5 range 1-5 we want 0-4 range.
    }
    set(key,value){
        const index= this.#_hash(key)
        this.#_table[index]=value
    }
    get(key){
        const index=this.#_hash(key)
        return this.#_table[index]
    }
    remove(key){
       const index=this.#_hash(key)
        this.#_table[index]=undefined
    }
    display(){
        for(let i=0;i<this.#_table.length;i++){
             if(this.#_table[i]){  // no value then it undefined if don't work
                console.log(i, this.#_table[i]);
             }
        }
    }
}

const hashTable = new HashTable(50)
hashTable.set('hello','anu')
hashTable.set('helol','wow')
hashTable.display()
console.log(hashTable)
console.log(hashTable)

