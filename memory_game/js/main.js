const cards= ["queen", "queen", "king", "king"];
const cardsInPlay=[];
let cardOne=cards[0];
let cardTwo=cards[1];
let alertMessage;


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped "+cardOne);
console.log("User flipped "+cardTwo);



if (cardsInPlay.length===2) {
	
	alertMessage=(cardsInPlay[0]===cardsInPlay[1])?"You found a match!":"Sorry, try again.";

	alert(alertMessage);

}