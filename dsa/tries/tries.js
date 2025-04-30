class TrieNode{
   constructor(){
     this.children={}
     this.isEndOfWord=false
   }
}

class Trie{
    constructor(){
        this.root= new TrieNode()
    }
    insert(word){
        let current_node = this.root
        for(const char of word){
            if(!current_node.children[char]){
                current_node.children[char] = new TrieNode()
            }
           current_node= current_node.children[char]
        }
        current_node.isEndOfWord=true
    }
    search(word){
        let current_node = this.root
        for(const char of word){
            if(!current_node.children[char]){
                return false
            }
            current_node=current_node.children[char]
        }
        return current_node.isEndOfWord;
    }

    // prefix
    startWith(prefix){
        let  current_node = this.root
        for(const char of prefix){
            if(!current_node.children[char]){
                return false
            }
           current_node= current_node.children[char]
        }
        return true; // prefix exists in the trie 
    }
    
}

const trie  = new Trie()
trie.insert("usehello")
console.log(trie.startWith("is"))
console.log(trie)

