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
}

list = new DoublyLinkedList();
list.push(21);
console.log(list);
list.push(22);
console.log(list);
list.push(23);
console.log(list);
console.log('POPPED', list.pop());
console.log(list)