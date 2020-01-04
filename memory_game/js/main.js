//Global variables
const cards= ["queen", "queen", "king", "king"];
const cardsInPlay=[];

//Functions
function checkForMatch(){
	let matchMessage;

	matchMessage=(cardsInPlay[0]===cardsInPlay[1])?"You found a match!":"Sorry, try again.";

	console.log(matchMessage);
}

function flipCard(cardId){
	cardsInPlay.push(cards[cardId]);

	console.log("User flipped "+cards[cardId]);

	if (cardsInPlay.length===2) {
		checkForMatch();
	}
}


//Main
flipCard(0);
flipCard(2);