var gameWords = ["chicken", "pig", "cow"]
var word = gameWords[Math.floor(Math.random()*gameWords.length)];
var guesses = 10

console.log(gameWords);
console.log(word);
console.log(guesses);

if (guesses === 0){
	alert("You lose!");
	location.reload();	
}

document.onkeyup = function(){
	
}