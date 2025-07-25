class TrieNode{
    constructor(){
        this.children= {},
        this.isEndOfWord = false;
    }
}

class Trie{
    constructor(){
        this.root= new TrieNode()
    }
    add(word){
        let curr = this.root
        for(const char of word){
            if(!curr.children[char]){
                curr.children[char]= new TrieNode()
            }
            curr= curr.children[char]
        }
        curr.isEndOfWord= true;
    }
    longestPrefix(){
        let curr=  this.root;
        let prefix= ''
        while(curr){
            const keys= Object.keys(curr.children)
            if(keys.length!==1||curr.isEndOfWord) {
                // keys.length for diverge eg : in diverge we 2 keys. To prevent from diverge.
                // curr.isEndOfWord is for prevent infinite loop.
                break;
            }
            const char = keys[0]
            prefix+=char
            curr = curr.children[char]
        }
        return prefix
    }
}

const t = new Trie()
// t.add("hello")
t.add("hello world")
t.add("hello p")
console.dir(t,{depth: null,colors: true})
console.log(t.longestPrefix())