'use strict'; //strict mode
var Mathy = require ("./libMathy.js");

var tttAI = (function() {

	var module = {}

	/* 
	AI Functionality:
	(1) choose first move if AI goes first
	(2) if turn_count >= 4, check if AI can win next turn	chooseFirstMove()
	(3) if AI cant win next turn, check if Human can win next turn + block it	checkForAiWinNextTurn()
	(4) if Human cant win next turn, check if Human can fork next turn (i.e force AI to block 1 of 2 possible winning moves) and block the fork.  call to checkSame()
	(5) if Human cant fork next turn, check if AI can fork next turn call to checkSame
	(6) if nothing else, play a corner that is 1 clear space away from another AI-occupied corner, or the middle, else pick randomly from whatever is left.  Get the set and pick with bucketedRandom()
	(7) return the coordinates of the chosen move and call Game.place();  
	*/ 
	console.log("this: " , this);

	var chooseFirstMove = function() 
		{
			//AI randomly picks from corners and middle for first move.
			var choice1to6 = Mathy.bucketedRandomSpectrum(1, 6);
			console.log(choice1to6);
			var moveHere = [];
			switch (choice1to6)
				 {
			  		case 1:
			   			moveHere = [0, 0] //pick a corner 2/3 of the time
						break;
				  	case 2:
				  	  	moveHere = [3, 0]
				   	 	break;
				 	case 3:
				   	 	moveHere = [0, 3]
				   	 	break;
				  	case 4:
				   		moveHere = [3, 3]
				  	  	break;
				  	default:
						moveHere = [1, 1] //pick the middle 1/3 of the time
						break;
				}
			return moveHere;
		}

  	module = {
    	chooseFirstMove: chooseFirstMove
		//OTHER FUNCTIONS AS NEEDED
  	};

	return module

})()
tttAI.chooseFirstMove();

//console.log("hello Mathy" , Mathy.randomizeArrayPositions([1,2,3,4,5,6,7,8,9,0]));

/*
  module = {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

	return module
*/





