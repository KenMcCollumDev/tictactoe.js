var xyz = "stuff";

var tic_tac_toe = (function() {
//

	var module = {}

	var Board = function(length) {
		//Takes a length so that the board can be created with different sizes
		this.length = length

		this.getValues = function(length) {
			//Takes a length and return a length x length array
			var values = []
			for (var x = 0; x < length; x++) {
				//Create a new column for this row
				values[x] = []
				for (var y = 0; y < length; y++) {
					values[x][y] = ""
				}
			}
			return values
		}

		this.values = this.getValues(this.length)

		this.getBoard = function() {
			//return this.values
			return "hello Im board values1";
		}

		this.place = function(x_coord, y_coord, character) {
			this.values[x_coord][y_coord] = character; 
		}
	}


	module.Game = function() {
		this.board = new Board(3)
		this.turn_count = 0
		this.player_turn = "x"

		this.getBoard = function() {
			var board_instance = this.board
			var board_values = board_instance.getBoard()
			//console.log(".getBoard") 
			return board_values
				//Alternative to the above:
				//return this.board.getBoard()
		}

		this.setTurn = function() {
			//Increase the turn_count
			this.turn_count++
				//Figure out the value for player_turn
				if (this.turn_count % 2 == 0) {
					this.player_turn = "x"
				} else {
					this.player_turn = "o"
				}
		}

		this.place = function(x_coord, y_coord) {
			//Take the current player
			var current_player = this.player_turn
				//Place that player's mark at the given coords
			this.board.place(x_coord, y_coord, current_player)
				//Increase turn
			this.setTurn()
		}

		this.printBoard = function() {
			var board_values = this.board.getBoard()
			for (var x = 0; x < 3; x++) {
				console.log(board_values[x])
			}
		}

		this.checkSame = function(coord_list) {
			var board_values = this.getBoard()
			var value = null
			for (var index = 0; index < coord_list.length; index++) {
				var coords = coord_list[index]
				var x = coords[0]
				var y = coords[1]
				var coord_value = board_values[x][y]
				if (value == null) {
					//Always set the value equal to the first coord_value that we see
					//Because we want to check to see if all of the other coord_values match this one
					value = coord_value
					continue
				}
				if (coord_value != value) {
					return false
				}
			}
			return value
		}
/*Design of replacement algorithm
(1) convert printBoard coords to array of pairs ex [00,11,22]
(2) convert list of WINNING_COORDINATES into 9 such pair arrays
(3) for player who just moved, cycle through each WINNING_COORDINATE pair array.
(4) if that player has a match against any of the 9 pair arrays return that player is winner.
*/


//get the player turn i.,e. x or o.
//then check for if any of the sets of winning coordinates are in board, using printBoard

		this.arraysEqualV2 = function(coord_list, array_2){
			if (array_1.length == array_2.length){
				for (loopCounter = 0; loopCounter = array_1.length; loopCounter++){
					if(array_1[loopCounter] == array_1[loopCounter]){
						return true;
					}
				}	
			}
			return false;
		}

		this.WINNING_COORDINATES = [
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
		]

		this.getWinner = function() {
			//Returns the mark of the winner if there is one
			for (var index = 0; index < this.WINNING_COORDINATES.length; index++) {
				var coord_list = this.WINNING_COORDINATES[index]
				var winner = this.checkSame(coord_list)
					//Check to see if winner is not false
				if (winner != false) {
					return winner
				}
			}
			return null
		}
	}
	

	module.sayHi = function(){
		console.log("hi")
		return "hi"
		}
	

	return module

})()
/*

var test_1 = function(){
	return 5	
	}

var test_2 = (function(){
	return 5
	})()

test_1 = test_1();

*/
