	var array1 = 
[[1,2],
	[3,4],
	[1,2],
	[5,6],
	[6,2],
	[3,4],
	[7,2],
	[3,4],
];
	var array2 = 
[[1,2],
	[3,4]
];
	var array3 = 
[[8,2],
	[3,4],
	[1,9],
	[55432,6],
	[6,2],
	[3,4],
	[7,2],
	[3,4]
];
	var array4 = 
[[1,2],
	[3,4],
	[1,2],
	[5,6],
	[6,2],
	[3,4],
	[7,2],
	[3,4],
];
	var array5 = [1,2,3,4];
	var array6 = [1,2,3,4];

var arraysEqual = function(array_1, array_2){
    //Returns true if array_1 contains the same items in the same order
    //Otherwise returns false
    //Does not work when comparing arrays of objects or arrays of arrays
	console.log( array_1 + " / ")
console.log( array_2 + " END TEST");
	if (array_1 == array_2) {return true;} else {return false;}
}

var arraysEqualV2 = function(array_1, array_2){
    //Returns true if array_1 contains the same items in the same order
    //Otherwise returns false
    //Does not work when comparing arrays of objects or arrays of arrays
	console.log( array_1 + " / ")
console.log( array_2 + " END TEST");
	if (array_1.length == array_2.length){
		for (loopCounter = 0; loopCounter = array_1.length; loopCounter++){
			if(array_1[loopCounter] == array_1[loopCounter]){
				return true;
			}
		}	
	}
	return false;
}

console.log("tests against version 1")
console.log("trus cases");
console.log(arraysEqual(array1,array1));
console.log(arraysEqual(array1,array4));
console.log(arraysEqual(array5,array6));
console.log("false cases");
console.log(arraysEqual(array1,array2));
console.log(arraysEqual(array3,array2));

console.log("tests against version 2")
console.log("trus cases");
console.log(arraysEqualV2(array1,array1));
console.log(arraysEqualV2(array1,array4));
console.log(arraysEqualV2(array5,array6));
console.log("false cases");
console.log(arraysEqualV2(array1,array2));
console.log(arraysEqualV2(array3,array2));
