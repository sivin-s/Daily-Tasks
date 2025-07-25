class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  _addNewNode(node, val) {
    if (node.left === null) {
      node.left = new Node(val);
    } else if (node.right === null) {
      node.right = new Node(val);
    } else {
      this._addNewNode(node.left, val);
    }
    return node;
  }
  add(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return;
    } else {
      return (this.root = this._addNewNode(this.root, val));
    }
  }
  bfs() {
    const res = [];
    const queue = [this.root];
    while (queue.length > 0) {
      const cur = queue.shift();
      res.push(cur.val);
      if (cur.left !== null) {
        queue.push(cur.left);
      }
      if (cur.right !== null) {
        queue.push(cur.right);
      }
    }
    return res;
  }
  maxDepthBFS() {
    // max depth means first longest path by depth
    const queue = [this.root];
    let depth = 0;
    while (queue.length > 0) {
      let level = queue.length;
      depth++;
      for (let i = 0; i < level; i++) {
        const node = queue.shift();
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
    return depth;
  }
  delete(val) {
    return (this.root = this._deleteNode(this.root, val));
  }
  _deleteNode(node, val) {
    if (node === null) {
      return null;
    }
    if (node.val === val) {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      let successor = node.right;
      while (successor.left !== null) {
        successor = successor.left;
      }
      node.val = successor.val;
      node.right = this._deleteNode(node.right, successor.val);
      return node;
    } else {
      node.left = this._deleteNode(node.left, val);
      node.right = this._deleteNode(node.right, val);
    }
    return node;
  }
//   minDepth() {
//     const queue = [[this.root, 1]];
//     while (queue.length > 0) {
//       // shortest path: means  encounter  first leaf node
//       const [node, depth] = queue.shift();
//       if (node.left === null && node.right === null) {
//         return depth;
//       }
//       if (node.right !== null) {
//         // Note: i'm n't increasing the depth each time like ++depth
//         // like use this depth+1 to keep value constant in same level.
//         // ensuring that all nodes at the same level share the same depth value.
//         queue.push([node.left,  depth + 1]);
//       }
//       if (node.left !== null) {
//         queue.push([node.right, depth + 1]);
//       }
//     }
//   }
   minDepth(){
    const queue = [this.root]
    let depth=0;
    while(queue.length>0){
        const level = queue.length
        depth++
        for(let i=0;i<level;i++){
            const node = queue.shift()
            if(node.left===null&&node.right===null){
                return depth;
            }
            if(node.left!==null){
                queue.push(node.left)
            }
            if(node.right!==null){
                queue.push(node.right)
            }
        }
    }
   }
}

const binaryTree = new BinaryTree();
binaryTree.add(5);
binaryTree.add(50);
binaryTree.add(100);
binaryTree.add(-100);
binaryTree.add(-300);
binaryTree.add(300);
console.log(binaryTree.bfs());
binaryTree.delete(-100);
console.log(binaryTree.bfs());
// console.log(binaryTree.maxDepthBFS())
console.log(binaryTree.minDepth());
