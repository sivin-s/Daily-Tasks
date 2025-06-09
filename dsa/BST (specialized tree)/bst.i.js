class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }
    _min(node){
        if(!node) return null
        if(node.left){
          return  this._min(node.left)
        }
        return node.value
    }

    _max(node){
        if(!node) return null
        if(node.right){
          return  this._max(node.right)
        }
        return node.value
    }

    insert(value){
        this.root = this.insert_recursion(this.root,value)
        return
    }

    insert_recursion(node,value){
        if(!node) return new Node(value)
        if(value<node.value){
            node.left =  this.insert_recursion(node.left,value)
        }else if(value>node.value){
            node.right= this.insert_recursion(node.right,value)
        }
        return node
    }
    // traverse
    // DFS
    // pre-order
    // in-order
    in_order(node=this.root){
        if(node){
            this.in_order(node.left)
            console.log(node.value)
            this.in_order(node.right)
        }
    }
    pre_order(node=this.root){
        if(node){
            console.log(node.value)
            this.pre_order(node.left) 
            this.pre_order(node.right) 
        }
    }
    post_order(node=this.root){
        if(node){
            this.post_order(node.left)
            this.post_order(node.right) 
            console.log(node.value) 
        }
    }

    // bfs

    bfs(){
        const queue = []
        const result = []
        if(!this.root) return null
        queue.push(this.root)
        while(queue.length>0){
           const cur_node = queue.shift();
           result.push(cur_node.value)
           if(cur_node.left){
              queue.push(cur_node.left)
           } 
           if(cur_node.right){
             queue.push(cur_node.right)
           }
        }
        return result
    }

    delete(value){
        if(value===undefined) return null
        this.root=this.delete_recursion(this.root,value)
    }
    delete_recursion(node,value){
        if(!node) return null
        if(value<node.value){
           node.left  = this.delete_recursion(node.left) 
        }else if(value>node.value){
          node.right=  this.delete_recursion(node.right)
        }else{
            if(!node.left&&!node.right){ // leaf node
                return null
            }else if(!node.left){ // 1 children
                return node.right
            }else if(!node.right){
                return node.left
            }

            // 2 children
            const min_value = this._min(node.right)
            node.value= min_value
            node.right = this.delete_recursion(node.right,min_value)
        }
        return node
    }

    



}

const bst = new BST()
bst.insert(100)
bst.insert(400)
bst.insert(10)
bst.insert(-1)

// bst.delete(400)
// bst.in_order()
// console.log(".......")
// bst.pre_order()
// console.log(".......")
// bst.post_order()
console.log(bst.bfs())
