function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}
function betterHash(str) {
    var H = 31,
        total = 0;
    for( var i = 0; i < str.length; i++ ) {
        total += H * total + str.charCodeAt(i);
    }
    
    total = total % this.table.length;
    if( total < 0 ) {
        total += this.table.length-1;
    }
    
    return parseInt(total);
}

function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDistro() {
    var n = 0;
    for( var i = 0; i < this.table.length; ++i ) {
        if( this.table[i] != undefined ) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function simpleHash(data) {
    var total = 0;
    for( var i = 0; i < data.length; ++i ) {
        total += data.charCodeAt(i);
    }
    
    return total % this.table.length
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan" ];

var hTable = new HashTable(someNames);

for( var i = 0; i < someNames.length; i++ ) {
    hTable.put(someNames[i]);
}

hTable.showDistro();