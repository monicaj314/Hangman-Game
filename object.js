var josh = generatePlayer('Josh');
var max = generatePlpayer('Max');
game.play();
game.whoWon();


var game = {
	player1: {},
	player2: {},
	setPlayers: function(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
},
	play: function() {
	this.player1.generatePoints(),
	this.player2.generatePoints(),
},
	whoWon: function() {
		if (this.player1.points > this.player2.points) {
		this.player1.printWinMessage();
		this.player2.printLoseMessage();
		} 	else if (this.player2.points > this.player1.points) {
		this.player2.printWinMessage();
		this.player1.printLoseMessage();
		} else {
		this.player1.printDrawMessage();
		this.player2.printDrawMessage();
		}
	}

}

function generatePlayer(playerName) {
	var player = {
	name: playerName,
	points: 0,
	generatePoints: function() {
		this.points = Math.floor(Math.random() * 5);
	},
	printWinMessage: function () {
	console.log("Win");
	},
	printLoseMessage: function() {
	console.log("Lose");
	},
	printDrawMessage: function() {
		console.log("Draw");
	}
}



