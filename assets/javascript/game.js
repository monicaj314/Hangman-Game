//generate a random word from array      
var wordBank = ["warlock","counterspell", "battlegrounds", "dungeons", "trinkets", "legendary",
"bloodlust", "guildmaster", "arcane", "hearthstone"] 
var answer = wordBank[Math.floor(Math.random() * wordBank.length)];

//suggested alternative (don't quite get it yet)
//var wordGuess = new Array(answer.length);
// wordGuess.fill('_'); 
// var wordGuess = wordGuess.toString().replace(/,/, g , " ");
// $("#answer").append(wordGuess);

//blank out letters of the answer
	for (var i = 0; i < answer.length; i++) {
		$("#answer").append("_ ");
	}
//for now, letters keyed are saved in a separate array, later to collect only letters not in the answer
var wrongGuesses = [];

$("body").on("keyup", function(e) {
	var guess = e.key
	var alreadyGuessed = wrongGuesses.indexOf(guess);
	if (alreadyGuessed == -1) {
        wrongGuesses.push(e.key);
        $("#guessedWrong").append(e.key);
        console.log(wrongGuesses);
        console.log(e.key);
    } else {
    	alert("You've already guessed " + e.key);
	}
})