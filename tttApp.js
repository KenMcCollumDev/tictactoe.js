'use strict'; //strict mode

$(function() {

	var tttkGjs = new tic_tac_toe.Game;

    var module = {}

		var moveButtons = $(".button").on("click", function(e) {
			var _this  = $(this); //keeps the button within scope...
			_this.html(tttkGjs.player_turn); //sets the html to a property of Game i.e. x or o
			tttkGjs.setTurn();
			console.log("flag1");
			//console.log(tttkGjs.board);	
			
			if (tttkGjs.turn_count >= 5)
				{
					var weiner = tttkGjs.getWinner()
					console.log("flag2 " + weiner + " type of weiner " + typeof weiner);
						if (weiner != null) 
							{
								alert(weiner + " has won the game! :\) Congratulations Weiner!  ... cue to 'we are the champions!', etc");
								console.log("flag3");
							}
						else if (tttkGjs.turn_count == 9 && tttkGjs.getWinner() === null) {
						alert("Tie Game!")
				}

			}
			
		});
	 
		var saveGameButton = document.getElementById("saveGame");
			saveGameButton.onclick = function (){
			var gameSave = prompt("please enter a file path and name", "/home/a/gamesave");
			// to do
		}
	
		var newGameButton = document.getElementById("newGame");
		newGameButton.onclick = function (){
			var playOnPlayer = prompt("Play 'vs Human' or 'vs AI'?", "vs Human");
			tttkGjs.getBoard;
			console.log("hello");//success
			//console.log(tttkGjs.board);//success
		};
		/*
			**THIMGS TO DO**

			1) check the winner.  I'm gonna replace the tictactoe.Game.getWinner() and/or tictactoe.Game.checkSame() with ones of my own using the lgoic in arraysEqualV2() as discussed on trello

			2) clear the board.  if I cant successfully call tictactoe.Game.getBoard, I can write my own nested loops to zero all board elements... not very D.R.Y., but time to move forward...

			3) save game / display games / load game with AJAX
				//saveBoard: function(){
				//jquery //$.post(url,data callbackfunc); //
				//}//getGame ;)

			4) finish the AI.  some basic game-unaware functions are already coded + tested .  I can build upon them in the modular way
		*/
		
  }) //closes the tttApp

//game.place(_this.data('xCoord'), _this.data('yCoord'));















//pasted in from here


var moduleTest = (function(){
var module = {}
module.myPrecious = function(name ) {
    this.crap = 12345;
  this.silly = function() {
    console.log("Hello " + name);
  }//closes function silly
}//closes module myPrecious
return module;
})()

//moduleTest.silly("Jello Fellow");
//moduleTest.myPrecious.silly("Jello Fellow");
//to here.  end pasted in
