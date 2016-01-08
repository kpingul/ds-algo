function o(message){console.log(message)}

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;

}
function clear() {
    this.top = 0;
    this.dataStore.length = 0;
}
function length() {
    return this.top;
}
function peek() {
    return this.dataStore[this.top - 1];
}
function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function isPalindrome(word) {
    var stack = new Stack();
    var rvStr = "";
    for( var i = 0; i < word.length; i++ ) {
        stack.push(word[i]);
    }
    
    while( stack.length() > 0 ) {
        //stack.pop() decrements the length so
        //when stack.length() is called
        //it automatically decrements the stack
        o(stack.length());
        rvStr += stack.pop();
    }
    
    if( rvStr.toLowerCase() == word.toLowerCase() ){
        o('true');
    } else {
        o('false');
        
    }

}

isPalindrome("racecar");


