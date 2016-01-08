
function o(message){console.log(message);}
function Node(element) {
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new Node('head');
    this.head.next = this.head;
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
    var prevNode = this.findPrevious(item);
    if ( prevNode.next !== null ) {
        prevNode.next = prevNode.next.next;
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
	while( currNode.next !== null & currNode.next.element !== "head" ) {
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