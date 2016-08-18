var gameWords = ["pig", "chicken", "cow"];
var word = gameWords[Math.floor(Math.random()*gameWords.length)];
var blanks = [];
var guessedLetters = [];
var guesses = 10;

for (var i = 0; i < word.length; i++){
	blanks.push("_");
}

console.log(gameWords);
console.log(blanks);
console.log(word);
console.log(guesses);

document.onkeyup=function(){
	var x = event.key;
	var key = x.toLowerCase();
	var match = false;
	checkGuesses();
	console.log(key);
	guessedLetters.push(key);
	for(var i = 0; i < word.length; i++){
		if (key === word.charAt(i)){
			console.log("match");
			blanks[i] = key;
			var match = true;
			console.log(blanks);
		}
		else{
			console.log("key does not match " + word.charAt(i));
		}
	}
	console.log(match);
	
	if (match === true){
		console.log("Good guess!")
		console.log(guessedLetters);
	}	
	else{
		guesses--
		console.log(guesses)
		console.log(guessedLetters);
	}
}

function checkGuesses(){
	if (guesses < 1){
		alert("You lose. Try again!");
		location.reload();	
	}
}