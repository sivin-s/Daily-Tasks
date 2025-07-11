// https://youtu.be/5cU1ILGy6dM?list=PL_aHnKR6K2T-HAk5zE4w6Sy_NTLa1xngW&t=408

// class  TreeNode{
//     constructor(val){
//         this.val=val;
//         this.left=null;
//         this.right=null;
//     }
// }

// class BST{
//     constructor(){
//         this.root=null
//     }
//     add(val){
     
//         const node = this.root;
//         if(node===null){
//             this.root = new TreeNode(val)
//             return;
//         }else{
//            const searchTree  = (node)=>{
//               if(val<node.val){
//                  if(node.left===null){
//                      node.left = new TreeNode(val)
//                      return;
//                  }else{
//                       return  searchTree(node.left)
//                  }
//               }else if(val>node.val){
//                      if(node.right===null){
//                         node.right = new TreeNode(val)
//                         return
//                      }else{
//                         return searchTree(node.right)
//                      }
//               }else{
//                   return null
//               }
//            }
//            return searchTree(node)
//         }

//     }
//     // dfs
//     inOrder(node){
//             if(node!==null){
//                 this.inOrder(node.left) // 1 
//                 console.log(node.val)
//                 this.inOrder(node.right)
//             }
//        }
//     postOrder(node){
//         if(node!==null){
//             this.inOrder(node.left)
//             this.inOrder(node.right)
//             console.log(node.val)
//         }
//     }
//     preOrder(node){
//         if(node!==null){
//             console.log(node.val)
//             this.preOrder(node.left)
//             this.preOrder(node.right)
//         }
//     }
//     min(){
//         let curr = this.root
//         while(curr.left!==null){
//             curr = curr.left
//         }
//         console.log(curr.val)
//     }

//     // search(value,node){  // recursion
       
//     //     if(node===null) return false
//     //     if(value===node.val) return {status:true,value: node.val}
//     //     if(value<node.val){
//     //         return this.search(value,node.left)
//     //     }else if(value>node.val){
//     //         return this.search(value,node.right)
//     //     }
//     // }

//     search(value){
//         let node = this.root
//         while(node!==null){
//             if(node.val===value){
//                 return true
//             }
//             if(value<node.val){
//                 node = node.left
//             }else{
//                 node = node.right
//             }
//         }
//         return false
//     }

//     //TODO: bfs pending ..

//     // remove(value){
//     //     const removeNode = (node,value)=>{
//     //         if(node===null){
//     //             return null;
//     //         }
//     //         if(node.val===value){
//     //               //  leaf (no children)
//     //           if(node.left === null && node.right === null){
//     //             return null
//     //           }
//     //           // single child left or right node
//     //           if(node.left===null){
//     //               return node.right
//     //           }
//     //           if(node.right===null){
//     //             return node.left
//     //           }
//     //           // two children node
//     //           // find the successor
//     //           let tempNode = node.right
//     //           while(tempNode.left!==null){
//     //             tempNode= tempNode.left
//     //           }
//     //           node.val=tempNode.val
//     //           node.right = removeNode(node.right,tempNode.val)
//     //           return node;
//     //         }else if(value<node.val){
//     //           node.left =  removeNode(node.left,value)
//     //          
//     //         }else if (value>node.val){
//     //             node.right =  removeNode(node.right,value)
//     //            
//     //         }
//     //     return node
//     //     }
//     //     this.root =  removeNode(this.root,value) 
//     // }

//     remove(value){
//         this.root = removeNode(this.root,value)
//         function removeNode(node,value){
//             if(node===null){ // base case
//                 return null
//             }
//             if(value===node.val){
//                 if(node.left===null && node.right===null){
//                     return null
//                 }
//                 if(node.left===null){
//                     return node.right
//                 }
//                 if(node.right===null){
//                     return node.left
//                 }
//                 let successor = node.right
//                 while(successor.left!==null){
//                     successor = successor.left
//                 }
//                 node.val= successor.val
//                 // delete duplicate successor
//                 node.right = removeNode(node.right,successor.val)
//                 return node
//             }else if(value<node.val){
//                 node.left =  removeNode(node.left,value)
//                 return node
//             }else{
//                 // greater the node value
//                 node.right = removeNode(node.right,value)
//                 return node
//             }
        
//         }
//     }

//     bfs(){
//         const queue = []
//         const result = []
//         let curr = this.root
//         queue.push(curr)
//         while(queue.length>0){
//             const curr= queue.shift()
//             result.push(curr.val)
//             if(curr.left) queue.push(curr.left)
//             if(curr.right) queue.push(curr.right)
//         }
//      return result
//     }


    
// }

// const bst = new BST()
// bst.add(2)
// bst.add(100)
// bst.add(-3)
// bst.add(40)
// // bst.preOrder(bst.root)
// // console.log(bst)
// // console.log(bst.search(-3,bst.root))
// // console.log(bst.search(-0.3))
// // console.log(bst.remove(2))
// // bst.preOrder(bst.root)
// console.log(bst.bfs())

//  correct version bst


class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root= null;
    }
    add(val){
        if(this.root===null){
            this.root=new Node(val)
            return;
        }else{
            return this.root= _addNewNode(this.root,val)
            function _addNewNode(node,val){
                if(node===null) return new Node(val); // base case
                if(val<node.val) node.left = _addNewNode(node.left,val)
                else if (val>node.val) node.right = _addNewNode(node.right,val)
                else return null;
                return node;
            }
        }
    }
    bfs(){
        const queue = [this.root]
        const res = []
        while(queue.length>0){
            const curNode = queue.shift();
            res.push(curNode.val);
            if(curNode.left!==null){
                queue.push(curNode.left)
            }
            if(curNode.right!==null){
                queue.push(curNode.right)
            }
        }
        return res
    }
    kthLargest(k){
        let count=0;
        let stack=[]
        let current = this.root;
        while(stack.length>0||current){
            while(current!==null){
                stack.push(current)
                current = current.right;
            }
            const curNode = stack.pop()
            count++;
            if(count===k) return curNode.val;
            current = curNode.left
        }
    }
    kthSmallest(k){
        let count = 0;
        let stack=[]
        let current = this.root
        while(stack.length>0||current){
            while(current!==null){
                stack.push(current)
                current = current.left
            }
            let curNode = stack.pop()
            count++;
            if(count===k) return curNode.val
            current = curNode.right
        }
    }
    // delete
    delete(val){
       this.root = _deleteNode(this.root,val)
        function _deleteNode(node,val){
            if(node===null){ // base case
                return null
            }
            if(val===node.val){
                if(node.left===null&&node.right===null){
                    return null
                }
                if(node.left===null){
                    return node.right
                }
                if(node.right===null){
                    return node.left
                }
                let successor = node.right
                while(successor.left!==null){
                    successor=successor.left
                }
                node.val=successor.val
                node.right = _deleteNode(node.right,successor.val)
                return node;
            }else if(val<node.val){
                node.left = _deleteNode(node.left,val)
            }else{
                node.right = _deleteNode(node.right,val)
            }
            return node;
        }
    }
}

const bst = new BST()
bst.add(10)
bst.add(30)
bst.add(-1)
bst.add(4)
console.log(bst.bfs())
// console.log(bst.kthSmallest(1))
console.log(bst.delete(-1))
console.log(bst.delete(4))
console.log(bst.bfs())
