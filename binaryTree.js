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

  search(value){
    if(this.root.val === value){
      return true;
    }
    let currentNode = this.root;
    while(true){
      if(value > currentNode.val){
        if(currentNode.right){
          if (currentNode.right.val === value) return true
        } else {
          return false;
        }
      }
    }
  }
}

const bTree = new BinaryTree();
bTree.root = new Node("20");
bTree.insert(15);
bTree.insert(25);
bTree.insert(22);
bTree.insert(17);
bTree.insert(15);
console.log(bTree);
console.log(bTree.search(22));
