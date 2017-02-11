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

init();

//wrong guesses collected in a separate container. Right guesses fill in the blanks

$("body").on("keypress", function(e) {
	if (!gameOver) {
	var guess = e.key;
	var alreadyGuessed = wrongGuess.indexOf(guess);
	var rightGuess = answer.indexOf(guess);
	if (rightGuess >= 0) {
		newAnswer = replaceEmptyLetter(newAnswer, guess, rightGuess, answer);
		$("#newAnswerDiv").text(newAnswer);
	} else if (alreadyGuessed == -1) {
		maxGuesses--;
		wrongGuess.push(e.key);
        $("#guessedWrong").text(wrongGuess.join(", "));
        console.log(wrongGuess);
        console.log(e.key);
    } else {
    	$("#warning").text("Whoops! You've already guessed " + e.key + ". Try a different letter!").fadeIn(250).fadeOut(3000);
    	}
	}	
})
	$("body").on("keyup", function() {
	if (gameOver) {
		init();
	}
	if (newAnswer === answer) {
    	// alert("You WON!");
    	winCount++;
    	gameOver=true;
	} 	else if (maxGuesses === 0) {
		// alert("You LOST!");
		lossCount++ ;
		gameOver=true;
	}
		$("#winCount").text(winCount);
		$("#lossCount").text(lossCount);
	})
function init() {
	answer = wordBank[Math.floor(Math.random() * wordBank.length)];
	wrongGuess = [];
	newAnswer = "";
	maxGuesses = 7;
	gameOver = false;
	for (var i = 0; i < answer.length; i++) {
		newAnswer = newAnswer + "_";
	} 
	var newAnswerDiv = $('<div id="newAnswerDiv"></div>');
	$("#answer").text("");
	$("#answer").append(newAnswerDiv);
	$("#newAnswerDiv").append(newAnswer);
	$("#guessedWrong").text("");
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


