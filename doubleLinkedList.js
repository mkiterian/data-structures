class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail.next.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    const nodeToPop = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      nodeToPop.prev = null;
      this.tail.next = null;
    }
    this.length -= 1;
    return nodeToPop;
  }

  shift() {
    if (!this.head) return undefined;
    const nodeToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      nodeToRemove.next = null;
    }
    this.length -= 1;
    return nodeToRemove;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode;
    if (index <= this.length / 2) {
      currentNode = this.head;
      for (let i = 0; i <= this.length / 2; i++) {
        if (i === index) {
          break;
        }
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length; i > this.length / 2; i--) {
        if (i === index) {
          break;
        }
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }

  set(index, value) {
    const currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    const newNode = new Node(value);
    if (index === 0) return !!this.unshift(newNode);
    if (index === this.length) return !!this.push(newNode);
    let currentNode = this.get(index - 1);
    const nextNode = currentNode.next;
    currentNode.next = newNode;
    newNode.prev = currentNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length += 1;
    return true;
  }

  remove(index){
    if (index < 0 || index >= this.length) {
      return false;
    }
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();
    const removeNode = this.get(index);
    const prevNode = removeNode.prev;
    const nextNode = removeNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removeNode.prev = null;
    removeNode.next = null;
    this.length -= 1;
    return removeNode;
  }
}

const listicle = new DoublyLinkedList();
listicle.push("Mad Max");
listicle.push("Primer");
listicle.push("Results");
listicle.push("Tucker and Dale");

console.log(listicle.remove(2));
console.log('======================================')
console.log(listicle);

