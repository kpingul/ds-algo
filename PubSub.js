
//Pub-sub implementation
//requirements
	//1). Publish total and inputvalue
	//2). Subscribe to totaland inputvalue

var events = {
  	subscribers: {},
  	
    subscribe: function(eventName, fn) {
     	if ( !this.subscribers[eventName] ) {
         	this.subscribers[eventName] = [];   
        }

        this.subscribers[eventName].push(fn);

    },
    
    unsubscribe: function(eventName, fn) {
      if( this.subscribers[eventName] ) {
       	for( var i = 0; i < this.subscribers[eventName].length; i++ ) {
 
            if( this.subscribers[eventName][i] === fn ) {
             	this.subscribers[eventName].splice(i, 1);
                break;
            }
        }   
      }
        
    },
    
    
    publish: function(eventName, value) {
     	if ( this.subscribers[eventName] ) {
         	this.subscribers[eventName].forEach(function(fn) {
                fn(value);
             });
        }
    }
    
};

