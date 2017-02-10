//generate a random word from array      
 
var wordBank = ["warlock","counterspell", "battlegrounds", "dungeons", "trinkets", "legendary",
"bloodlust", "guildmaster", "arcane", "hearthstone"] 
var answer = wordBank[Math.floor(Math.random() * wordBank.length)];
var wrongGuess = [];
var newAnswer = "";
var winCount = 0;
var lossCount = 0;

//blank out letters of the answer
	for (var i = 0; i < answer.length; i++) {
		newAnswer = newAnswer + "_"
	} 
	var newAnswerDiv = $("<div id='newAnswerDiv'></div>");;
	$("#answer").append(newAnswerDiv);
	$("#newAnswerDiv").append(newAnswer);
	console.log(answer);

//wrong guesses collected in a separate container. Right guesses fill in the blanks

$("body").on("keypress", function(e) {
	var guess = e.key;
	var alreadyGuessed = wrongGuess.indexOf(guess);
	var rightGuess = answer.indexOf(guess);
	if (rightGuess >= 0) {
		newAnswer = replaceEmptyLetter(newAnswer, guess, rightGuess, answer);
		$("#newAnswerDiv").text(newAnswer);
	} else if (alreadyGuessed == -1) {
		wrongGuess.push(e.key);
        $("#guessedWrong").append(e.key + " ");
        console.log(wrongGuess);
        console.log(e.key);
    } else {
    	$("#warning").text("You've already guessed " + e.key + ". Try another letter!").fadeIn().fadeOut(1000);
    }
	
})
		function replaceEmptyLetter(word, letter, index, replaceMultiple) {
	var result = word.substr(0,index) + letter + word.substr(index + 1, word.length);
	if(replaceMultiple) { // determines if the letter guessed replaces multiple blanks
		for(var i=0; i < replaceMultiple.length; i++) {
				if(replaceMultiple[i] === letter) {
					result = replaceEmptyLetter(result, letter, i);
				}
			}

		}
		return result
	}
	$("body").on("keyup", function() {
	if (newAnswer === answer) {
    	alert("You WIN!");
    	winCount = winCount + 1;
	}
	})

