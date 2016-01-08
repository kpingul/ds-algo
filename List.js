function o(message) {console.log(message);}
function List() {
    this.listSize = 0;
    this.pos = 0; 
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.append = append; 
    this.toString = toString;
    this.insert = insert;
    this.remove = remove;
    this.contains = contains;  
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.front = front;
    this.end = end;
    this.next = next;
    this.prev = prev;
    this.hasNext = hasNext;
    this.hasPrev = hasPrev;
}


function end() {
   
    this.pos = this.listSize - 1;
}

function front() {
    this.pos = 0;
}
function hasPrev() {

    if ( this.pos <= 0 ) {
        return false;
    } else {
        return true;   
    }
        
}


function hasNext() {
    
    if( this.pos > this.listSize - 1 ) {
        return false;
    } else { 
        return true;
    }
    
}


function next() {
    return this.dataStore[this.pos++]
}

function prev() {
    return this.dataStore[--this.pos];
}

function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}

function contains(element) {
    for( var i = 0; i < this.dataStore.length; i++ ) {
        if( element.toLowerCase() == this.dataStore[i].toLowerCase() ) {
            return true;
        }
    }
    return false;
}
function remove(element) {
    var elemPos = this.find(element);
    
    if( elemPos > -1 ) {
        this.dataStore.splice(elemPos, 1);
        this.listSize--;
        return true;
    }
    
    return false;

}

function insert(element, after) {
    var elemPos = this.find(after);

    if( elemPos > -1 ) {
        this.dataStore.splice(elemPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}
function toString() {
    return this.dataStore.toString();   
}

function clear() {
    this.listSize = 0;
    this.dataStore = [];
}
function append(element) {
    this.dataStore[this.listSize++] = element;

}
function find(element) {
    
    for(var i = 0; i < this.dataStore.length; i++ ){
        
        if( element.toLowerCase() == this.dataStore[i].toLowerCase() ) {
            return i;
        }
        
    }
    return -1;   
}

var customers = new List();
//add customers
customers.append("Kirck");
customers.append("Joe");
customers.append("Larry");
customers.append("Steve");
customers.append("Beverly");

for( customers.end(); customers.hasPrev(); ) {
    o(customers.prev());
}

