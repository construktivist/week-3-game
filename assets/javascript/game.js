var wins = 0;

initialize();
function initialize(){
	var gameWords = ["pig", "chicken", "cow"];
	var word = gameWords[Math.floor(Math.random()*gameWords.length)];
	var wordArray = [];
	var blanks = []; // Holds blanks.
	var guessedLetters = [];
	var guesses = 15; //# of guesses.

		for (var i = 0; i < word.length; i++){
			wordArray.push(word.charAt(i));
		}
		
		 for (var i = 0; i < word.length; i++){
			blanks.push("_");
		}
		// document.getElementById("current-word").innerHTML = blanks;
		//document.getElementById("wins").innerHTML = wins;
	// For debugging.
	// console.log(gameWords);
	// console.log(blanks);
	// console.log(word);
	// console.log(wordArray);
	// console.log(guesses);
	//Function that startes the game on key select
	document.onkeyup=function(){
		var x = event.key;
		var key = x.toLowerCase();
		if(guessedLetters.indexOf(key) !== -1){
			return;
		}
		guessedLetters.push(key);
		var match = false;
		checkGuesses();
		console.log(key);

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
			console.log("Good guess!");
			console.log(guessedLetters);
		}

		else{
			guesses--
			console.log(guesses);
			console.log(guessedLetters);
		}

		if(blanks.join() == wordArray.join()){
			alert("You won!");
			wins++;
			console.log(wins);
			initialize();
		}
		document.getElementById("current-word").innerHTML = blanks;
		document.getElementById("guess-number").innerHTML = guesses;
		document.getElementById("guessed-letters").innerHTML = guessedLetters;
	}

	function checkGuesses(){
		if (guesses < 1){
			alert("You lose. Try again!");
			initialize();	
		}
	}

}



