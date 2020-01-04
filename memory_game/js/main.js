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


let cards= [queenHearts,queenDiamonds,kingHearts,kingDiamonds];
const cardsInPlay=[];

let score=0;
let scoreText=document.getElementById('Score');

const gameBoard=document.getElementById('game-board');
const resetButton=document.getElementById('ResetButton');

//Functions
function checkForMatch(){
	let matchMessage;

	if (cardsInPlay[0]===cardsInPlay[1]) {
		score++;
		
		scoreText.textContent=score;

		matchMessage ="You found a match!";
	} else {
		matchMessage ="Sorry, try again.";
	}


	alert(matchMessage);
}

function printCardInfo(cardId){
	console.log("User flipped "+cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

function flipCard(){

	let cardId=this.getAttribute('data-id');

	/* Only flip a card under the following conditions:
		* If the game isn't over (the number of cards played is less than 2).
		* If the card is facing down.
	*/
	if (cardsInPlay.length<2) {

		if (this.getAttribute('src')==="Images/back.png") {
			cardsInPlay.push(cards[cardId].rank);

			printCardInfo(cardId);

			this.setAttribute('src',cards[cardId].cardImage);
	
			if (cardsInPlay.length===2) {
				checkForMatch();
			}
		}
	}
}


function createBoard(){
	let cardElement;

	shuffle(cards);

	for (let i = 0; i < cards.length; i++) {
		//Create an image element
		cardElement=document.createElement('img');

		//Set its attributes
		cardElement.setAttribute('data-id',i);
		cardElement.setAttribute('src',"Images/back.png");

		//Add an event listener and append the card element to the game board
		cardElement.addEventListener('click',flipCard);
		gameBoard.appendChild(cardElement);
	}
}

function ResetGame(){
	//Empty the cards in play
	while (cardsInPlay.length!=0){
		cardsInPlay.pop();
	}

	//Flip all cards face-down
	for (let i = 0; i < gameBoard.children.length; i++) {
		gameBoard.children[i].setAttribute('src',"Images/back.png");
	}

	//Shuffle cards
	shuffle(cards);
}


function shuffle(array) {
	let j;
    for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


createBoard();

resetButton.addEventListener('click',ResetGame);
