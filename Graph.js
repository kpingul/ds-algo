//What is a graph?
//represented by a set of vertices and sets of edges
//edges are defined in 2 pairs eg: (v1, v2) where v1 and v2 are vertices
//eg of a graph: map
//each state is a vertex and the connection of roads to other states(vertices) are called edges
//2 types: directed(diagraph) and unordered graph
//edges are represented by adjacent lists (array)
    //why?
    //edges are stored as a vertex of indexed array of lists of the vertices adjacent to each vertex
//edges are ALSO represented by adjacent matrix 
    //why?
    //edges are two dimensial array in which the lemeents of the array indicate whether and edge exists b/w two vertices
function o(mes){console.log(mes)}

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 4);
g.bfs(0);
var vertex = 4;
var source = 0;

var paths = g.pathTo(source, vertex);

g.showPath(paths);
function pathTo(source, vertex) {
    if(!this.hasPathTo(vertex)) {
        return undefined;   
    }
    var path = [];
    for(var i = vertex; i != source; i= this.edgeTo[i] ) {
        path.push(i);   
    }
    path.push(source);
    return path;
}
function hasPathTo(v) {
    return this.marked[v];   
}

function showPath(paths) {
    while(paths.length > 0 ) {
        if(paths.length > 1) {
            o(paths.pop() +'-');   
        } else {
            o(paths.pop());   
        }
    }
}
function bfs(s){
    //queues
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
 
    while( queue.length > 0 ) {
        var v = queue.shift();
        if( v !== undefined ) {
            o('Visited Vertex: ' + v);   
        }
        
        for( var i = 0; i < this.adj[v].length; i++ ) {
            var w = this.adj[v][i];
            if(!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w)
            }
        }
        
    }
}


function dfs(v) {
    this.marked[v] = true;
    
    if( this.adj[v] !== undefined ) {
        o('Visited Vertex: ' + v );   
    }
    
    for(var i = 0; i < this.adj[v].length; i++) {
        var w = this.adj[v][i];
        if( !this.marked[w] ) {
             this.dfs(w);  
        }
    }
    
    
}

function showGraph(){
    
    for( var i = 0; i < this.vertices; i++) {
        o('Vertex: ' + i + ' -> ');
        for( var j = 0; j < this.adj[i].length; j++ ) {
            if( this.adj[i][j] != undefined ) {
                   o( this.adj[i][j] + ' ');
            }
        }
        
    }
    
}

function addEdge(v1, v2) {
    this.adj[v1].push(v2);
    this.adj[v2].push(v1);
    this.edges++;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.edgeTo = [];
    this.adj = [];
    for(var i = 0; i <this.vertices; i++) {
        this.adj[i] = [];   
    }
    this.marked =[];
    for(var i = 0 ; i < this.vertices; i++) {
        this.marked[i] = false;   
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.showPath = showPath;
}