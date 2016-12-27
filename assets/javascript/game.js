window.onload = function(){

	//Wins and output to DOM.
	var wins = 0;
	document.getElementById("wins").innerHTML = wins;

	//Call to initialize the game.
	runGame();

	//Initializes the game.
	function runGame(){
		
		//Default variable values.
		var wordArray = [];
		var blanks = [];
		var guessedLetters = [];
		var word;
		var guesses;

		//Value output for message and guessed letters. 
		document.getElementById("notification").innerHTML = 'Select any letter from the keyboard to start guessing!';
		document.getElementById("guessed-letters").innerHTML = guessedLetters;

		//Randomly selects words from the array.
		var gameWords = ["pig", "chicken", "cow", "goat", "sheep", "horse"];
		var word = gameWords[Math.floor(Math.random()*gameWords.length)];
		console.log(word);

		//Stores the randomly selected word in an array.
		var wordArray = word.split("");
		console.log(wordArray);

		//Pushes "_" to the blanks array based on the letters of the selected word.
		for (var i = 0; i < wordArray.length; i++) {
				blanks.push(" __ ")
		}

		//Value output for blanks to DOM.
		document.getElementById("current-word").innerHTML = blanks;

		//Sets the guesses to 15.
		var guesses = 15;
		document.getElementById("guess-number").innerHTML = guesses;


		//Calls key verification when a key is pressed.
		document.onkeyup=verifyKey;


		//This function checks if the key pressed is a letter or number.
		function verifyKey(){

			//Converts key pressed to lower case.
			var key = event.key.toLowerCase();

			//Calls checkGuess function if key is a letter.
			if(/[a-z]/.test(key)){
				checkGuess(key);
			}

			//Displays alert if key is a number. 
			else{
				alert("Incorrect input. You can only guess letters.");
			}
		};

		//This function checks the key pressed against the letters in wordArray.
		function checkGuess(guess){
			console.log(guess);
			
			//Using this variable to verify a match.
			var match;

			//Loops through wordArray to find matches and assigns them to the blanks array.
			for (var i = 0; i < wordArray.length; i++) {
				if(guess === wordArray[i]){
					blanks[i] = guess;
					console.log(blanks);
					var match = true;
				}
			};

			printResult(match, guess);
		};
		
		//This function is used to check the match output the blanks array new value to the DOM. 
		function printResult(match, guess){

			//Below will run if the guess is correct.
			if (match === true){
				document.getElementById("current-word").innerHTML = blanks;
				checkForWin();
			}

			else{
				storeIncorrectGuess(guess);
				checkGuesses();
			}
		};

		//Checks if the user is out of guesses and restarts the game.
		function checkGuesses(){
			if (guesses < 1){
				document.getElementById("notification").innerHTML = "Sorry, you are out of guesses";
				runGame();
			}

		};

		//Checks if the user has won and increments the win then resets the game. 
		function checkForWin(){
			if (wordArray.join() === blanks.join()){
				document.getElementById("current-word").innerHTML = blanks;
				wins++
				document.getElementById("wins").innerHTML = wins;
				runGame();
			}
		};


		//Verifies if the letter guessed has been used already and stores it in the lettersGuessed array. 
		function storeIncorrectGuess(guess){
			
			var letterCheck = verifyLetter();

			if (letterCheck === true){
				document.getElementById("notification").innerHTML = "You have already guessed this letter.";
			}

			else{
				guesses--
				guessedLetters.push(guess);
				document.getElementById("guess-number").innerHTML = guesses;
				document.getElementById("guessed-letters").innerHTML = guessedLetters;
			};

			//Used in storeIncorrectGuess function to verify if the letter has been used previously. 
			function verifyLetter(){
				for (var i = 0; i < guessedLetters.length; i++) {
					if(guess == guessedLetters[i]){
						return true;
					}

					else{
						return false;
					}
				}
			};	


		};

	};
};	




