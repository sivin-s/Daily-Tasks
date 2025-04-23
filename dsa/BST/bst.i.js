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

    insert(value){
        this.root= this.insert_recursion(this.root,value)
    }

    insert_recursion(node,value){
      if(!node){
        return new Node(value)
      } 
      else if(value<node.value){
          node.left = this.insert_recursion(node.left,value)
      }else{
         node.right = this.insert_recursion(node.right,value)
      }
      return node
    }

    min(node){
        if(!node) return null
        if(node.left){
            return this.min(node.left)
        } 
        return node.value
    }

    max(node){
        if(!node) return null
        if(node.right){
           return this.max(node.right)
        }
        return node.value
    }

    delete(value){
        this.root = this.delete_recursion(this.root,value)
    }

    delete_recursion(node,value){
        if(!node) return null
        if(value<node.value){
            node.left =  this.delete_recursion(node.left,value)
        }else if(value>node.value){
            node.right = this.delete_recursion(node.right,value)
        }else{
            if(!node.left&&!node.right){
                return null
            }else if(!node.left){
                return node.right
            }else if(!node.right){
                return node.left
            }else{
                const min_value = this.min(node.right)
                node.value = min_value
                node.right = this.delete_recursion(node.right,min_value)
            }
        }
        return node
    }

    inOrder(node){
        if(node){
            this.inOrder(node.left)
            console.log(node.value)
            this.inOrder(node.right) 
        }
    }

    preOrder(node){
        if(node){
            console.log(node.value)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    postOrder(node){
        if(node){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.value)
        }
    }


}

const bst = new BST()
bst.insert(-1)
bst.insert(300)
bst.insert(30)
bst.insert(-2)
bst.insert(2000)

// bst.delete(-1)
bst.inOrder(bst.root)
bst.postOrder(bst.root)

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// console.log(bst)