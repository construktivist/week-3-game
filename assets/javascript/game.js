var gameWords = ["pig", "chicken", "cow"];
var word = gameWords[Math.floor(Math.random()*gameWords.length)];
var blanks = [];
var guesses = 10;

for (var i = 0; i < word.length; i++){
	blanks.push("_")
}
console.log(blanks);
console.log(gameWords);
console.log(word);
console.log(guesses);

function checkGuesses(){
	if (guesses < 0){
		alert("You lose!");
		location.reload();	
	}
}

function checkWords(){
	for(var i = 0; i < word.length; i++){
		if (key === word.charAt(i)){
			blanks[i] = key;
			var check = true;
		}

		else{
			var check = false;
		}
	}
}

document.onkeyup=function(){
	var x = event.key;
	var key = x.toLowerCase();
	console.log(key);
	checkGuesses();
	console.log(guesses);
	checkWords();

	if (check === false){
		guesses--;
	}

	else{
			console.log("Good guess!");
	}
}
