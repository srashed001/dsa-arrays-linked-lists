/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) {
      this.push(val)
      
    };
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    this.length ++
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
   
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    this.length ++
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("list is empty");
    this.length --
    let prevNode;
    let currentNode = this.head;

    if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      return currentNode.val;
    }

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;
    prevNode.next = null;
    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("list is empty");
    this.length --

    const head = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return head.val;
    }

    this.head = head.next;
    return head.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) throw new Error("list is empty");
    let i = 0;
    let currentNode = this.head;

    while (i < idx) {
      if (!currentNode || !currentNode.next) {
        throw new Error("index is invalid");
      }

      currentNode = currentNode.next;
      i++;
    }

    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let i = 0;
    let prevNode;
    let currentNode = this.head;

    while (i < idx) {
      if (!currentNode || !currentNode.next) {
        throw new Error("index is invalid");
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode === this.head) this.head = newNode;

    if (currentNode === this.tail) this.tail = newNode;

    newNode.next = currentNode.next;
    if (prevNode) prevNode.next = newNode;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);

    let i = 0;
    let prevNode;
    let currentNode = this.head;

    while (i < idx) {
      if (!currentNode || !currentNode.next) {
        throw new Error("index is invalid");
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode === this.head) this.head = newNode;
    if(currentNode === this.tail) this.tail = newNode

    newNode.next = currentNode;
    if (prevNode) prevNode.next = newNode;
    this.length ++
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let i = 0;
    let prevNode;
    let currentNode = this.head;

    while (i < idx) {
      if (!currentNode || !currentNode.next) {
        throw new Error("index is invalid");
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode === this.head)
      currentNode.next ? (this.head = currentNode.next) : (this.head = null);

    if (currentNode === this.tail)
      prevNode ? (this.tail = prevNode) : (this.tail = null);

    if (prevNode) prevNode.next = currentNode.next;

    this.length --
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let total = 0;
    let count = 0;

    while (currentNode) {
      total += currentNode.val;
      count++;
      currentNode = currentNode.next;
    }

    return count ? total / count : 0;
  }
}

module.exports = LinkedList;
