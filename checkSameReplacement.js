/*Design of replacement algorithm
(1) convert printBoard coords to array of pairs ex [00,11,22]
	function call to 
X 	(2) convert list of WINNING_COORDINATES into 9 such pair arrays
(3) for each player, cycle through each WINNING_COORDINATE pair array.
(4) if that player has a match against any of the 9 pair arrays return that player is winner.

lookup list
javascript API calls
javascript how to call methods inside closure modules



*/

var coordsConvert = function (arrayIn){
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

console.log("Tests against coordsConvertV5")
console.log(coordsConvertV5(WINNING_COORDINATES));
console.log("Tests against coordsConvertV5")
console.log(coordsConvertV5(WINNING_COORDINATES));



//there is no point in coding more until I can use Kurtis API... and test these against his stuff
