class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      vertex => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      vertex => vertex !== vertex1
    );
  }

  removeVertex(vertex){
    for(let val of this.adjacencyList[vertex]){
      this.removeEdge(vertex, val)
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("Nairobi");
graph.addVertex("Kisumu");
graph.addVertex("Mombasa");
graph.addVertex("Bungoma");
graph.addVertex("Kericho");
graph.addVertex("Narok");
graph.addVertex("Nakuru");
graph.addEdge("Nairobi", "Kisumu");
graph.addEdge("Nairobi", "Kericho");
graph.addEdge("Nairobi", "Mombasa");
graph.addEdge("Kericho", "Kisumu");
graph.addEdge("Nairobi", "Narok");
graph.addEdge("Nairobi", "Nakuru");
graph.addEdge("Bungoma", "Kisumu");
graph.addEdge("Mombasa", "Narok");
graph.addEdge("Nairobi", "Kisumu");
console.log(graph);
graph.removeVertex("Nairobi");
console.log(graph);
