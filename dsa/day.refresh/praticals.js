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
    // min
    min(node){
        if(node.left){
            this.min(node.left)
        }
        return node.value
    }
    max(node){
        if(node.right){
            this.max(node.right)
        }
        return node.value
    }
    insert(value){
       this.root= this._insert_recursion(this.root,value)
    }
    _insert_recursion(node,value){
        if(!node){
            return new Node(value)
        }else if(value<node.value){
            node.left = this._insert_recursion(node.left,value)
        }else if(value>node.value){
            node.right= this._insert_recursion(node.right,value)
        }
        return node
    }
    delete(value){
        this.root=this._delete_recursion(this.root,value)
    }
    _delete_recursion(node,value){
        if(!node){
            return null
        }
        if(value<node.value){
           node.left=  this._delete_recursion(node.left,value)
        }else if(value>node.value){
          node.right=  this._delete_recursion(node.right,value)
        }else{
            // leaf
            if(!node.left&&!node.right){
                return null
            }
            if(!node.left){ // single child
                return node.right
            }else if(!node.right){
                return node.left
            }
            const min_value = this.min(node.right)
            node.value = min_value
            node.right = this._delete_recursion(node.right,min_value)
        }
        return node
    }
    // traversal
    //dfs
    // pre-order
    pre_order(node=this.root,result=[]){
        if(node){
            result.push(node.value)
            this.pre_order(node.left,result)
            this.pre_order(node.right,result)
        }
        return result
    }

    in_order(node=this.root,result=[]){
        if(node){
            this.in_order(node.left,result)
            result.push(node.value)
            this.in_order(node.right,result)
        }
        return result
    }

    post_order(node=this.root,result=[]){
        if(node){
            this.post_order(node.left,result)
            this.post_order(node.right,result)
            result.push(node.value)
        }
        return result
    }

    // bfs
   bfs(node=this.root){
    const queue = []
    const result= []
    if(!node) return null
    queue.push(node)
        while(queue.length>0){
            const cur_node = queue.shift()
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



}

// const bst = new BST()

// bst.insert(5)
// bst.insert(50)
// bst.insert(500)
// bst.insert(1)

// console.log(bst.bfs())

// graph


class   GRAPH{
    constructor(){
        this.adjacency_list={}
    }
    addVertex(vertex){
        if(!this.adjacency_list[vertex]){
            this.adjacency_list[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacency_list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacency_list[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacency_list[vertex1].add(vertex2)
        this.adjacency_list[vertex2].add(vertex1)
    }
    remove_vertex(vertex){
        if(!this.adjacency_list[vertex])   return null
        
        this.adjacency_list[vertex].forEach((nei,_)=>{
            this.adjacency_list[vertex].delete(nei)
        })

        delete this.adjacency_list[vertex]
        
    }

    remove_Edge(vertex1,vertex2){
        this.adjacency_list[vertex1].delete(vertex2)
        this.adjacency_list[vertex2].delete(vertex1)
    }

    bfs(startVertex){
        if(!this.adjacency_list[startVertex]) return []
        const queue = []
        const visited= {}
        const result=[]
        queue.push(startVertex)
        if(this.adjacency_list[startVertex]){
            while(queue.length>0){
                const current_vertex = queue.shift()
                result.push(current_vertex)
                if(!visited[current_vertex]){
                    queue.push(current_vertex)
                    visited[current_vertex]=true
                }
            }
        }
        return result
    }

    dfs(startVertex){
        const stack=[]
        const result=[]
        const visited={}
        if(this.adjacency_list[startVertex]){
           while(stack.length>0){
             const current_vertex = stack.pop()
             if(!visited[current_vertex]){
                 stack.push(current_vertex)
                 visited[current_vertex]=true
             }
           }
        }
        return result
    }
    hasLoop(){
        for(const vertex in this.adjacency_list){
            if(this.adjacency_list[vertex].has(vertex)){
                return true
            }
        }
        return false
    }
    display(startVertex){
        for(const adjacencyVertex of this.adjacency_list[startVertex]){
            console.log(startVertex + "--->" + [...this.adjacency_list[startVertex]])
        }
    }
}

const graph = new GRAPH()

// graph.addVertex("A")
// graph.addVertex("E")
graph.addEdge("A","B")
graph.addEdge("B","E")
graph.addEdge("A","B")

graph.display("E")

console.log('p>',graph.hasLoop())



// has loop ... todo..

class TrieNode{
    constructor(){
        this.children={}
        this.isEndsOfWord=false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        if(!word) return null
        let cur_node = this.root
        for(const char of word){
            if(!cur_node.children[char]){
                cur_node.children[char]= new TrieNode()
            }
            cur_node = cur_node.children[char]
        }
        cur_node.isEndsOfWord=true
    }
    search(word){
        if(!word){
            return null
        }
        let current_node = this.root
        for(const char of word){
            if(!current_node.children[char]) return false
            current_node=current_node.children[char]
        }
        return current_node.isEndsOfWord
    }

    startwith(prefix){
        const cur_node = this.root
        for(const char of prefix){
            if(!cur_node.children[char]){
                return false
            }
            cur_node = cur_node.children[char]
        }
        return true
    }

}

const t = new Trie()
t.insert("hello")
console.log(t.search("hello"))

console.log(t)

