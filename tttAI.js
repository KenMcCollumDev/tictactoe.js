'use strict'; //strict mode

var tttAI = function() {

  var module = {}

  var tttkjs = require('tic_tac_toe.js');

  this.bucketedRandomSpectrum = function(lowerBound, upperBound) {
      /*this function randomly chooses numbers within a specified range*/
      var randy = Math.random();
      var bucketedRandom = Math.ceil(randy / (1 / (upperBound - lowerBound + 1))); /*Kens Original Recipe: (1) get the range and divide into buckets.  (2) get the random number (3) divide it and round down to find the bucket*/
      return bucketedRandom; /*its finga licking good yall*/
    } //closes function bucketedRandomSpectrum
    //tested 20170802.  this still works right

  this.chooseFirstMove = function() {
    //AI randomly picks from corners and middle for first move.
    var choice1to6 = bucketedRandomSpectrum(1, 6);
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
  return module
  console.log(chooseFirstMove())
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
  //how to reload the currentBoard?
}
return module

})()