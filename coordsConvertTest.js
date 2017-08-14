WINNING_COORDINATES = [
			[
				[1, 2],
				[3, 4],
				[5, 6]
			],
			[
				[1, 0],
				[1, 1],
				[1, 2]
			],
			[
				[2, 0],
				[2, 1],
				[2, 2]
			],
			[
				[0, 0],
				[1, 0],
				[2, 0]
			],
			[
				[0, 1],
				[1, 1],
				[2, 1]
			],
			[
				[0, 2],
				[1, 2],
				[2, 2]
			],
			[
				[0, 0],
				[1, 1],
				[2, 2]
			],
			[
				[0, 2],
				[1, 1],
				[2, 0]
			]
		]

var coordsConvertV1 = function (arrayIn){
	var arrayOut = [];
	for (var loopCounter = 0; loopCounter < arrayIn.length; loopCounter ++){
		arrayOut = arrayIn[loopCounter];
	}
	return arrayOut;
}

var coordsConvertV2 = function (arrayIn){
	var arrayIntermediate = [];
	for (var winningCoordsCounter = 0; winningCoordsCounter < arrayIn.length; winningCoordsCounter ++){
		arrayIntermediate = arrayIn[winningCoordsCounter];
		console.log("arrayIntermediate" + arrayIntermediate);
			for (var loopCounter = 0; loopCounter < arrayIntermediate.length; loopCounter ++){	
				arrayOut = arrayIntermediate[loopCounter];
				console.log("arrayOut" + arrayOut);
		}
	}
	return arrayOut;
}


var coordsConvertV3 = function (arrayIn){
	var arrayIntermediate = [];
	for (var winningCoordsCounter = 0; winningCoordsCounter < 1; winningCoordsCounter ++){
		arrayIntermediate = arrayIn[winningCoordsCounter];
		console.log("arrayIntermediate" + arrayIntermediate);
		console.log("arrayIntermediate Length " + arrayIntermediate.length);
			for (var loopCounter = 0; loopCounter < arrayIntermediate.length; loopCounter ++){	
				arrayOut = arrayIntermediate[loopCounter];
				
				console.log("arrayOut" + arrayOut);
		}
	}
	return arrayOut;
}

var coordsConvertV4 = function (arrayIn){
	var arrayIntermediate = [];
	var arrayCoords = [];
	var pairOut = "";
	var convertedArray = []
	for (var winningCoordsCounter = 0; winningCoordsCounter < 1; winningCoordsCounter ++){
		arrayIntermediate = arrayIn[winningCoordsCounter];
		console.log("arrayIntermediate" + arrayIntermediate);
		console.log("arrayIntermediate Length " + arrayIntermediate.length);
			for (var loopCounter = 0; loopCounter < arrayIntermediate.length; loopCounter++){	
				pairOut = arrayIntermediate[loopCounter] + arrayIntermediate[loopCounter + 1];//should be the right way
				//pairOut = arrayIntermediate[loopCounter].toString()//fails
				//pairOut = arrayIntermediate[loopCounter]
				//pairOut = pairOut[0];
				//console.log("pairOut" + pairOut);
				pairOut = arrayIntermediate[loopCounter].toString()[0] + arrayIntermediate[loopCounter].toString()[2];
		}
	}
	return pairOut;
}

var coordsConvertV5 = function (arrayIn){
	var arrayIntermediate = [];
	var arrayCoords = [];
	var pairOut = "";
	var convertedArray = [];
	var conversionCounter = 0;
	for (var winningCoordsCounter = 0; winningCoordsCounter < arrayIn.length; winningCoordsCounter ++){
		arrayIntermediate = arrayIn[winningCoordsCounter];
		console.log("arrayIntermediate" + arrayIntermediate);
		console.log("arrayIntermediate Length " + arrayIntermediate.length);
			for (var loopCounter = 0; loopCounter < arrayIntermediate.length; loopCounter++){	
				pairOut = arrayIntermediate[loopCounter] + arrayIntermediate[loopCounter + 1];
				pairOut = arrayIntermediate[loopCounter].toString()[0] + arrayIntermediate[loopCounter].toString()[2];
				convertedArray[conversionCounter] = pairOut;
				conversionCounter++;
		}
	}
	return convertedArray;
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

console.log("Tests against coordsConvertV1")
console.log(coordsConvertV1(WINNING_COORDINATES));
console.log(coordsConvertV1(coordsConvertV1(WINNING_COORDINATES)));
console.log("Tests against coordsConvertV2")
console.log(coordsConvertV2(WINNING_COORDINATES));
console.log("Tests against coordsConvertV3")
console.log(coordsConvertV3(WINNING_COORDINATES));
console.log("Tests against coordsConvertV4")
console.log(coordsConvertV4(WINNING_COORDINATES));
console.log("Tests against coordsConvertV5")
console.log(coordsConvertV5(WINNING_COORDINATES));


