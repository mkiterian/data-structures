class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BinaryTree {
   constructor(val){
    this.root = null;
   }

   insert(val){
     const newNode = new Node(val);
     if(!this.root) {
       this.root = newNode;
       return this;
     } else {
       let currentNode = this.root;
       while(true){
         if(val === currentNode.val){
          currentNode.count += 1;
          return this;
         }
         if(val < currentNode.val){
           if(!currentNode.left){
             currentNode.left = newNode;
             return this;
           } else {
             currentNode = currentNode.left;
           }
         } else if(val > currentNode.val){
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
         }
       }
     }
   }
}

const bTree = new BinaryTree();
bTree.insert(20);
console.log(bTree);
console.log('---------------------------')
bTree.insert(12);
console.log(bTree);
console.log('---------------------------')
bTree.insert(8);
bTree.insert(6);
bTree.insert(20);
bTree.insert(22);
bTree.insert(33);
console.log(bTree);
console.log('---------------------------')