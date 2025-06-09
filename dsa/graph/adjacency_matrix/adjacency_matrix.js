// undirected graph (use in dense graph) -> adjacency matrix (bidirectional connection,use back-tracking).
// adjacency matrix use "every node" connected which each other
/*
    A - B
    A - c
    B - D
*/

const adjacency_matrix = [  // why i use 0 B --> B , because their is no loop.
        // A  B  C  D
 /* A */  [0, 0, 0, 0], 
 /* B */  [0, 0, 0, 0], 
 /* C */  [0, 0, 0, 0], 
/*  D */  [0, 0, 0, 0],  //4x4 (nxn)
]

function add_edge(vertex1,vertex2){
    adjacency_matrix[vertex1][vertex2]= 1
    adjacency_matrix[vertex2][vertex1]= 1
}

add_edge(0,1)

console.log(adjacency_matrix)