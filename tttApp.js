'use strict'; //strict mode

$(function() {

	var tttkGjs = new tic_tac_toe.Game;

    var module = {}

		var moveButtons = $(".button").on("click", function(e) {
			var _this  = $(this); //keeps the button within scope...
			console.log("_this.html !  " + _this.html  + "is here");
			//if (_this.html != "x" && _this.html != "o"){  //it doesnt pick up null or undefined either.  What exactly is this value?
			if (_this.html != ""){
				_this.html(tttkGjs.player_turn); //sets the html to a property of Game i.e. x or o
				//tttkGjs.place(tttkGjs.player_turn);
				tttkGjs.setTurn();
				console.log("Flag 14: null");
				console.log("clicked square  " + _this.html);
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
			for (vart loopCounter = 0; loopCounter < @; loopCounter ++){
				var _this  = $(this);
				_this.html(null);	
*/
			console.log(tttkGjs.board);//success
		};

		
  }) //closes the tttApp

//game.place(_this.data('xCoord'), _this.data('yCoord'));

		/*
			OTHER THIMGS TO DO
		s	1) check the winner via .getWinner		
		X	2) clear the board (reuse new game)
			3) save game / display games / load game with AJAX
				//saveBoard: function(){
				//jquery //$.post(url,data callbackfunc); //
				//}//getGame ;)
		s	4) finish the AI.  some basic functions are already coded + tested
		X	5) CSS the Xs + Os larger
		*/
