// keli's code here
$(document).ready(function() {

//Alert Player of Music
	alert("Enjoy some theme music while yoy play!");//


var words = ["gallifrey", "dalek", "tardis", "bowtie", "fantastic", "cybermen", "master", "scarf"];
// var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 // random word selector
var randomword = words[Math.floor(Math.random() * words.length)];

 // answer array
  var answers = [];
    for (var i = 0; i < words.length; i++) {
      $("#answers").append(" _ ");
    }
    $("body").on("keyup"), function(e) {
	var letters = e.key
};
var remainingLetters = randomword.length;
var lettersguessed= letters;
var wrongletters=(lettersguessed = false);
var correctletters=(lettersguessed = true);

  



});
	