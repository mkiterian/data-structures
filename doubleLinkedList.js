class Node {
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    const newNode = new Node(val);
    if(!this.head){
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

  pop(){
    if(!this.tail) return undefined;
    const nodeToPop = this.tail;
    if(this.length === 1) {
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

  shift(){
    if(!this.head) return undefined;
    const nodeToRemove = this.head;
    if(this.length === 1){
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

  unshift(val){
    const newNode = new Node(val);
    if(!this.head){
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

  get(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index <= this.length/2){
      let currentNode = this.head;
      for(let i = 0; i <= this.length/2; i++){
        if(i === index){
          break;
        }
        currentNode = currentNode.next;
      }
    } else {
      let currentNode = this.tail;
      for(let i = this.length; i > this.length/2; i--){
        if(i === index){
          break;
        }
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }
}
