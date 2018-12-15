class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else if (value === currentNode.val) {
        currentNode.count += 1;
        return this;
      }
    }
  }

  search(value) {
    if (this.root.val === value) {
      return true;
    }
    let currentNode = this.root;
    let found = false;
    while (current && !found) {
      if (value < currentNode.val) {
        currentNode = currentNode.left;
      } else if (value > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return currentNode;
  }

  bfs(){
    const values = [];
    const queue = [];
    let currentNode = this.root;
    queue.push(currentNode);
    while(queue.length){
      currentNode = queue.shift();
      values.push(currentNode.val);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return values;
  }

  dfsPreOrder(){
    const visited = [];
    let currentNode = this.root;
    const result = this.traverse(currentNode, visited);
    return result;
  }

  traverse(node, visited){
    visited.push(node.val);
    if(node.left){
      this.traverse(node.left, visited);
    }
    if(node.right){
      this.traverse(node.right, visited);
    }
    return visited;
  }
}

const bTree = new BinaryTree();
bTree.root = new Node(10);
bTree.insert(6);
bTree.insert(15);
bTree.insert(3);
bTree.insert(8);
bTree.insert(20);
// console.log(bTree);
console.log(bTree.dfsPreOrder());
