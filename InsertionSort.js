function o(mes){console.log(mes);}

var nums = [100, 22, 120, 33, 1];

			
insertionSort(nums);

function insertionSort(arr) {
	var temp,
        inner;
    
    for(var outer = 1; outer < arr.length; outer++) {
    	temp = arr[outer];
        inner = outer;
        while( inner > 0 && (arr[inner - 1] >= temp) ) {
        	arr[inner] = arr[inner - 1];
            inner--;
        }
        //inner contains the index at which to swap temp into
        arr[inner] = temp;
    }

}

o(nums);
