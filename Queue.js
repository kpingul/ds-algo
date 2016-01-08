function o(message){console.log(message);}

function Queue() {
	this.dataStore = [];
    this.length = length; 
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function empty() {
	if( this.length !== 0 ) {
    	return true;
    }else {
     	return false;   
    }
    
}
function toString() {
	return this.dataStore.toString();
}

function back() {
	return this.dataStore[this.length - 1 ];
}

function front() {
	return this.dataStore[0];
}

function dequeue() {
	return this.dataStore.shift();
}

function enqueue(element) {
	this.dataStore.push(element);
}

function length() {
	return this.dataStore.length;
}

var q = new Queue();
q.enqueue("Bob");
q.enqueue("Jason");
q.enqueue("Kelly");
q.enqueue("Steve");
q.dequeue();

o(q.toString());


