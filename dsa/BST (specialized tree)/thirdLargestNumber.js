class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        this.root = this._insertRe(this.root,value)
    }
    _insertRe(node,value){
        if(!node) return new Node(value)
        if(value<node.value){
            node.left =   this._insertRe(node.left,value)
        }
        if(value>node.value){
            node.right = this._insertRe(node.right,value)
        }
        return node
    }
    search(node,value){
        if(!node) return false
        if(node.value===value) return true
        if(value<node.value){
          return   this.search(node.left,value)
        }else{
          return  this.search(node.right,value)
        }
    }
   // 3rd largest 
   thirdLargest(){
     let count=0
     let stack=[]
     let current = this.root
     while(stack.length>0||current){
        while(current){
            stack.push(current)
            current = current.right
        }

        current = stack.pop()
        ++count
        if(count===1) return current.value
        current = current.left
     }
   }
}

const bst = new BST()
bst.insert(300)
bst.insert(100)
bst.insert(600)
bst.insert(6000)

console.log(bst.search(100))

console.log(bst.thirdLargest())