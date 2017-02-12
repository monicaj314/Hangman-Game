//generate a random word from array      
 
var wordBank = ["warlock","counterspell", "battlegrounds", "dungeons", "trinkets", "legendary",
"bloodlust", "guildmaster", "arcane", "hearthstone"] 
var answer = wordBank[Math.floor(Math.random() * wordBank.length)];
var wrongGuess = [];
var newAnswer = "";
var winCount = 0;
var lossCount = 0;
var maxGuesses = 7;
var gameOver = false;
var hangman = ["assets/images/gallow.jpg", "assets/images/1wrong.jpg", "assets/images/2wrong.jpg", "assets/images/3wrong.jpg", "assets/images/4wrong.jpg", "assets/images/5wrong.jpg", "assets/images/6wrong.jpg", "assets/images/7wrong.jpg"];
var wrongAnswer = 0;


//initial game state
init();
$("#message").text("Press a letter key to start.");
function setPic() {
  $("#gallowImg").attr("src", hangman[wrongAnswer]);
}

//wrong guesses collected in a separate container. Right guesses fill in the blanks

$("body").on("keyup", function(e) {
	$("#message").text("");
	if (!gameOver) {
	var guess = e.key.toLowerCase();
	var alreadyGuessed = wrongGuess.indexOf(guess);
	var rightGuess = answer.indexOf(guess);
	if (rightGuess >= 0) {
		newAnswer = replaceEmptyLetter(newAnswer, guess, rightGuess, answer);
		$("#newAnswerDiv").text(newAnswer);
	} else if (alreadyGuessed == -1) {
		maxGuesses--;
		wrongGuess.push(e.key);
		wrongAnswer++
		setPic();
		$("#guesses-remaining").text("Guesses Remaining: " + maxGuesses);
        $("#guessedWrong").text(wrongGuess.join(", "));
    } else {
    	$("#message").text("Whoops! You've already guessed " + e.key + ". Try a different letter!");
    	}
	}	
	 checkGameStatus();
})
//determines win/loss behavior based on game status
	function checkGameStatus(){
	if (gameOver) {
		init();
	}
	if (newAnswer === answer) {
    	winCount++;
    	$("#message").text("Yay, you won! (^.^) Press any key to restart.");
    	gameOver=true;
	} 	else if (maxGuesses < 1) {
		lossCount++ ;
		$("#message").text("Game over ^_^;; Press any key to restart.");
		gameOver=true;
	}
		$("#winCount").text(winCount);
		$("#lossCount").text(lossCount);
	}


//resets the game
function init() {
	answer = wordBank[Math.floor(Math.random() * wordBank.length)];
	wrongGuess = [];
	newAnswer = "";
	maxGuesses = 7;
	gameOver = false;
	wrongAnswer = 0;
	for (var i = 0; i < answer.length; i++) {
		newAnswer = newAnswer + "_";
	} 
	var newAnswerDiv = $('<div id="newAnswerDiv"></div>');
	$("#answer").text("");
	$("#answer").append(newAnswerDiv);
	$("#newAnswerDiv").append(newAnswer);
	$("#guessedWrong").text("");
	$("#message").text("");
	$("#guesses-remaining").text("Guesses Remaining: " + maxGuesses);
	setPic();
	console.log(answer);
}

function replaceEmptyLetter(word, letter, index, replaceMultiple) {
	var result = word;
	if(replaceMultiple) { // determines if the letter guessed replaces multiple blanks
		for(var i=0; i < replaceMultiple.length; i++) {
			if(replaceMultiple[i] === letter) {
			result = replaceEmptyLetter(result, letter, i);
			}
		}

	} else {
		result = word.substr(0,index) + letter + word.substr(index + 1, word.length);
		}
		return result
	}


