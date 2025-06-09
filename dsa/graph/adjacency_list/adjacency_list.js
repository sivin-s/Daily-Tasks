// "has loop" checking method  is pending eg: B --> B
// adjacency list use not every node "few nodes" connected which each other

class GRAPH{  // undirected graph (use in sparse graph)
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(const adjacencyVertex in this.adjacencyList){
             this.removeEdge(vertex,adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }

    bfs(startVertex){  // traverse
        const queue=[startVertex];
        const visited = {};
        const result = []
        visited[startVertex]=true
        while(queue.length>0){
            const current_vertex = queue.shift();
            result.push(current_vertex)
            this.adjacencyList[current_vertex].forEach((neighbor,_)=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queue.push(neighbor);
                }
            })
        }
        return result
    }

    dfs(startVertex){  // traverse
        const visited={}
        const stack = [startVertex]
        const result =[]
        visited[startVertex]=true
        while(stack.length>0){
            const current_vertex = stack.pop()
            result.push(current_vertex)
            this.adjacencyList[current_vertex].forEach((neighbor,_)=>{ // foreach loop use we use set the remove duplicate to prevent revisiting vertex again.
                if(!visited[neighbor]){ //  ignore visited 
                    visited[neighbor]=true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    display(){
        for(const adjacencyVertex in this.adjacencyList){
            console.log(adjacencyVertex +" "+ "-->" +" "+ [...this.adjacencyList[adjacencyVertex]])
        }
    }

    
}

const graph = new GRAPH()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")

// console.log(graph.hasEdge("A","C"))

// before removing the edge.
// graph.display()

// graph.removeEdge("A","B")

// after removing the edge.

// graph.display()
// console.log("...............")
// graph.removeVertex("B")
graph.display()

console.log(graph.bfs("B"))
console.log("..............")
console.log(graph.dfs("B"))


