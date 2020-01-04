//Global variables
const queenHearts={
	rank: "queen",
	suit: "hearts",
	cardImage: "Images/queen-of-hearts.png"
}
const queenDiamonds={
	rank: "queen",
	suit: "diamonds",
	cardImage: "Images/queen-of-diamonds.png"
}
const kingHearts={
	rank: "king",
	suit: "hearts",
	cardImage: "Images/king-of-hearts.png"
}
const kingDiamonds={
	rank: "king",
	suit: "diamonds",
	cardImage: "Images/king-of-diamonds.png"
}
const cards= [queenHearts,queenDiamonds,kingHearts,kingDiamonds];
const cardsInPlay=[];

//Functions
function checkForMatch(){
	let matchMessage;

	matchMessage=(cardsInPlay[0]===cardsInPlay[1])?"You found a match!":"Sorry, try again.";

	alert(matchMessage);
}

function printCardInfo(cardId){
	console.log("User flipped "+cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

function flipCard(cardId){
	cardsInPlay.push(cards[cardId].rank);

	printCardInfo(cardId);
	
	if (cardsInPlay.length===2) {
		checkForMatch();
	}
}


//Main
flipCard(0);
flipCard(2);