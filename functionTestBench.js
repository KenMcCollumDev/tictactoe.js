var xYZ = function () {
	var x = null;
	if (x === null) {
		console.log( "x === null");
	}
}

var aBC = function () {
WINNING_COORDINATES = [
			[
				[0, 0],
				[0, 1],
				[0, 2]
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
		];
	
			
	var ken = [[0,2,],[1,2],[2,2]];	
//	var ken = [0,2,1,2,2,2];
/*
	var ken = 			[
				[0, 2],
				[1, 2],
				[2, 2]
			]	
*/
	console.log(ken);
	for(loopCounter = 0; loopCounter < 8; loopCounter++){
		console.log("testing line" + loopCounter + ": " + ken + " / " + WINNING_COORDINATES[loopCounter])
		if (ken == WINNING_COORDINATES[loopCounter])
			{
				console.log("test passed")
return;
		}
	}
console.log("test failed")
}



//xYZ();
aBC();


