'use strict'; //strict mode

$(function() {

	var tttkGjs = new tic_tac_toe.Game;

    var module = {}

		var newGameButton = document.getElementById("newGame");
		newGameButton.onclick = function ()
			{
				var playOnPlayer = prompt("Play 'vs Human' or 'vs AI'?", "vs Human");
				//window.location.reload(); // the simple way to remder the board for the new game
				tttkGjs.turn_count = 0
				//console.log(tttkGjs.turn_count);
				tttkGjs.player_turn = "x"
				//console.log(tttkGjs.player_turn);
				tttkGjs.getBoard(); // the API way to render the board... but it doesn't draw the new board. this means I need a loop to hit each square in the table
				var moveButtons = $(".button"); 
				for(var buttonCounter = 0; buttonCounter < 9; buttonCounter++)
					{
						//console.log(buttonCounter);
						moveButtons[buttonCounter].innerHTML = "";
					}

			console.log("We successfully made a new game");
/*
			for (var loopCounter = 0; loopCounter < @; loopCounter ++)
				{
					var _this  = $(this);
					_this.html(null);	

*/
			console.log(tttkGjs.board);//success
				};


		var moveButtons = $(".button").on("click", function(e) {
			var _this  = $(this); //keeps the button within scope...
			console.log("fuckyou"  + _this.data('x') + _this.data('y'));
			//if (_this.html != "x" && _this.html != "o"){  //it doesnt pick up null or undefined either.  What exactly is this value?
			var boardNow = tttkGjs.printBoard();
			var moveNow = _this.data('x').toString() + _this.data('y').toString();
			console.log("moveNow says " + moveNow);
			var boardPosition = 0;
			
				switch (moveNow)
				{
					case "00":
						boardPosition = 0;
						break;
					case "01":
						boardPosition = 1;
						break;
					case "02":
						boardPosition = 2;
						break;
					case "10":
						boardPosition = 3;
						break;
					case "11":
						boardPosition = 4;
						break;
					case "12":
						boardPosition = 5;
						break;
					case "20":
						boardPosition = 6;
						break;
					case "21":
						boardPosition = 7;
						break;
					case "22":
						boardPosition = 8;
						break;
					default:
						console.log("WTF moveNow" + moveNow);
						break;
				} 
			console.log("boardNow says" + boardNow);
			console.log("boardPosition " + boardPosition);
			console.log("bNBP ", boardNow[boardPosition]);
			console.log("bNBP0 ", boardNow[0]);
			console.log("bNBP_test of board coords", boardNow[_this.data('x')][_this.data('y')]);

			//@ask joseph, re console.log: what does "bNBP ,," mean?
			if (boardNow[_this.data('x')][_this.data('y')] == 0){
			_this.html(tttkGjs.player_turn); //displays on the board.  sets the html to a property of Game i.e. x or o
				tttkGjs.place(_this.data('x'), _this.data('y')) // makes the game aware of the screen placement

				//tttkGjs.setTurn();
				console.log("Flag 14: " + tttkGjs.printBoard() );
			}
			else{
				alert("That space is taken.  Pick an empty square.");
			}
			//console.log("flag1 " + tttkGjs.board);	
			
			if (tttkGjs.turn_count >= 5)
				{
					var weiner = tttkGjs.getWinner()
					console.log("flag2 " + weiner + " type of weiner " + typeof weiner);
						if (weiner != null) 
							{
								alert(weiner + " has won the game! :\) Congratulations Weiner!  ... cue to 'we are the champions!', etc");
							newGameButton.onclick();
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
	
  }) //closes the tttApp

//game.place(_this.data('xCoord'), _this.data('yCoord'));


