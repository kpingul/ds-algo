
function o(message){console.log(message);}
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findPrevious = findPrevious;
}
function findPrevious(item) {
    var currNode = this.head;   
    while( currNode.next !== null && currNode.next.element !== item ) {
        currNode = currNode.next;
    }   
  
    o(currNode);
    return currNode;
}

function remove(item) {
    var currNode = this.find(item);
    if ( currNode.next !== null ) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous
        currNode.next = null
        currNode.previous = null;
    }else {
        currNode.previous.next = null;
        currNode.next = null;
        currNode.previous = null;
    }
}

function find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while( currNode.next !== null ) {
        o(currNode.next.element);
        currNode = currNode.next;
    }
}

var cities = new LList();

cities.insert("SF", "head");
cities.insert("DC", "SF");
cities.insert("KC", "DC");
cities.insert("LA", "KC");

cities.remove("DC");

cities.display();