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
    if(this.head === null){
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
}

list = new DoublyLinkedList();
list.push(21);
console.log(list);
list.push(22);
console.log(list);