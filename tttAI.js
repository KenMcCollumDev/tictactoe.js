'use strict'; //strict mode
var Mathy = require ("./libMathy.js");

var tttAI = function() {

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

  var module = {}

  this.bucketedRandomSpectrum = function(lowerBound, upperBound) {
      /*this function randomly chooses numbers within a specified range*/
      var randy = Math.random();
      var bucketedRandom = Math.ceil(randy / (1 / (upperBound - lowerBound + 1))); /*Kens Original Recipe: (1) get the range and divide into buckets.  (2) get the random number (3) divide it and round down to find the bucket*/
      return bucketedRandom; /*its finga licking good yall*/
    } //closes function bucketedRandomSpectrum
    //tested 20170802.  this still works right

  this.chooseFirstMove = function() {
    //AI randomly picks from corners and middle for first move.
    var choice1to6 = Mathy.bucketedRandomSpectrum(1, 6);
    console.log(choice1to6);
    var moveHere = [];
    switch (choice1to6) {
      case 1:
        moveHere = [0, 0] //pick a corner
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
        moveHere = [1, 1]
        break;
    }
    return moveHere;
  }
  console.log(chooseFirstMove())
  return module
}

this.checkForAiWinNextTurn = function() {
  var currentBoard = tttkjs.Game.getBoard;
  for (var xCounter = 0; xCounter == 3; xCounter++) {
    for (var yCounter = 0; yCounter == 3; yCounter++) {
      if (tttkjs.Game.checkSame != "X" && tttkjs.Game.checkSame != "O") {
        tttkjs.Game.place(xCounter, yCounter);
        if (tttkjs.Game.getWinner != null) {
          //the AI should make that move
          tttkjs.Game.setTurn;
          return;
        }
      }
    }
  }
  //reload the currentBoard
	return;
}
return module
})()
