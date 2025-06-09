class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfString=false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        if(!word) return
        let curNode = this.root
        for(const char of word){
            if(!curNode.children[char]){
                curNode.children[char] = new TrieNode()
            }
            curNode = curNode.children[char]
        }
        curNode.isEndOfString=true
    }
    search(word){
        if(!word) return
        let curNode = this.root
        for(const char of word){
            if(!curNode.children[char]) return false
            curNode = curNode.children[char]
        }
        return curNode.isEndOfString
    }
    // auto complete
    autoComplete(word){
        let curNode = this.root
        for(const char of word){
            if(!curNode.children[char]) return []
            curNode = curNode.children[char]
        }
        let list =[]
        this.collectWord(curNode,word,list)
        return list
    }
    collectWord(node,word,list){
        // console.log(node,word,list)
        if(node.isEndOfString){
            list.push(word) 
        }
        for(let char in node.children){
            this.collectWord(node.children[char],word+char,list)
        }
    }
}

const trie = new Trie()
trie.insert("hello")
trie.insert("world")

console.log(trie.autoComplete("h"))