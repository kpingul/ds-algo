function o(mes){console.log(mes);}
var arr = [100, 22, 24];

selectionSort(arr);

function selectionSort(arr) {
	var min,
        temp;
	
    for( var outer = 0; outer < arr.length - 1; outer++ ) {
        //min contains cached value of outer
    	min = outer;
        for( var inner = outer + 1; inner < arr.length; inner++ ) {
            if( arr[inner] < arr[min] ) {
            	//why min and not outer?
                //when the min value has been found
                //min will need to contain the value to be
                //compared to because if not, IT WILL ONLY 
                //COMPARE IT TO OUTER which will not be the correct
                //comparison value
                min = inner;
            }
    	}
        
        temp = arr[min];
        arr[min] = arr[outer];
        arr[outer] = temp;
    }
    
    o(arr);
}
