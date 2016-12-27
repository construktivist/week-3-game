var wins;
var wordArray = [];
var blanks = [];
var guessedLetters = [];
var word;
var guesses; 

//Call to initialize the game.
initialize();

//Calls key verification when a key is pressed.
document.onkeyup=verifyKey;







//Initializes the game.
function initialize(){

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
	console.log(blanks)

	//Sets the guesses to 15.
	var guesses = 15;
	console.log(guesses)
}






//This function checks if the key pressed is a letter or number.
function verifyKey(){

	//Converts key pressed to lower case.
	var key = event.key.toLowerCase();
	console.log(key);

	//Calls checkGuess function if key is a letter.
	if(/[a-z]/.test(key)){
		checkGuess(key);
	}

	//Displays alert if key is a number. 
	else{
		alert("Incorrect input. You can only guess letters.");
	}
};

//var inp = String.fromCharCode(event.keyCode);
// if (/[a-zA-Z0-9-_ ]/.test(inp))
//     alert("input was a letter, number, hyphen, underscore or space");






// initialize();
// function initialize(){
// 	var gameWords = ["pig", "chicken", "cow", "goat", "sheep", "horse"];
// 	var word = gameWords[Math.floor(Math.random()*gameWords.length)];
// 	var wordArray = [];
// 	var blanks = []; 
// 	var guessedLetters = [];
// 	var guesses = 15;
// 	var state = false;
// 	var victory = "You won! Press any key to continue";

// 		for (var i = 0; i < word.length; i++){
// 			wordArray.push(word.charAt(i));
// 		};
		
// 		 for (var i = 0; i < word.length; i++){
// 			blanks.push("_");
// 			document.getElementById("current-word").innerHTML = blanks;
// 		};

// 	document.onkeyup=function(){

// 		if (state === false){
// 			var x = event.key;
// 			var key = x.toLowerCase();
			
// 			if(guessedLetters.indexOf(key) !== -1){
// 				return;
// 			};
// 			guessedLetters.push(key);
// 			var match = false;
// 			checkGuesses();
// 			console.log(key);

// 			for(var i = 0; i < word.length; i++){
// 				if (key === word.charAt(i)){
// 				console.log("match");
// 				blanks[i] = key;
// 				var match = true;
// 				console.log(blanks);
// 				}

// 				else{
// 				console.log("key does not match " + word.charAt(i));
// 				}
// 			};

// 			console.log(match);
// 			if (match === true){
// 				console.log("Good guess!");
// 				console.log(guessedLetters);
// 				document.getElementById("current-word").innerHTML = blanks;
// 			}

// 			else{
// 				guesses--
// 				console.log(guesses);
// 				console.log(guessedLetters);
// 			};

// 			if(blanks.join() == wordArray.join()){
// 				document.getElementById("wins").innerHTML = blanks;
// 				document.getElementById("wins").innerHTML = wins;
// 				wins++;
// 				state = true;
// 			};
// 			document.getElementById("guess-number").innerHTML = guesses;
// 			document.getElementById("guessed-letters").innerHTML = guessedLetters;
// 		}

// 		else{
// 			document.getElementById("victory").innerHTML = victory;
// 			state = false;
// 		};
// 	}
	
	

// 	function checkGuesses(){
// 		if (guesses < 1){
// 			alert("You lose. Try again!");
// 			initialize();	
// 		};
// 	};

// };



