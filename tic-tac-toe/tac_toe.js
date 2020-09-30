$(document).ready(function() {
	var turn = 1;
	var turnX = [];
	var turnO = [];

	function play () 
	{
		$("td a").on("click",function(){
			if (turn % 2 != 0) {
				$("h1").text("Your Turn X");
				$(this).text("0").css({"color":"red"}).off("click");
				turnO.push(parseInt($(this).parent().attr("id")));
				console.log(turnO)
			}else {
				$("h1").text("Your Turn O");
				$(this).text("X").off("click");
				turnX.push(parseInt($(this).parent().attr("id")))
				console.log(turnX)
			}
			turn++
				if (turn >= 5) {
					checkForWinner();
				}
		});
	};

	play();

	function checkForWinner () {
		winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

		winningCombinations.forEach(function(combo) {
			var winnerO = false 
			var winnerX = false 
			if (turnO.indexOf(combo[0]) >= 0 && turnO.indexOf(combo[1]) >=0 && turnO.indexOf(combo[2]) >= 0) {
				winnerO=true
				alert("O wins")
				playAgain();
			}else if (turnX.indexOf(combo[0]) >= 0 && turnX.indexOf(combo[1]) >=0 && turnX.indexOf(combo[2]) >= 0) {
				winnerX=true
				alert("X Wins")
				playAgain();
			}
	
		})
	}

	function playAgain() {
		$("a").off("click");
		var answer = prompt("Would you like to play again?");
	 		if (answer == "yes") {
				location.reload();
			}
	};

});