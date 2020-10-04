import getCards from "../../api/card.js";

getCards(function(cards){

    // Create the drawnCards container
    let drawnCards = createDrawnCardsContainer();

    // Create the deck
    let deck = createDeck(cards, drawnCards);

    // Shuffle the cards
    cards.shuffleDeck();

    // Append the deck and the drawnCards (container) element
    let board = document.querySelector(".board");
    board.appendChild(deck);
    board.appendChild(drawnCards);
});

function createDeck(cardsObj, container){
    // Create a card with backface up (simulating the deck)
    let deck = createCard(cardsObj.back.blue.image);

    // Set an event listener to listen for clicks on the deck
    deck.addEventListener("click", function(){
        // Stop displaying the deck when there is no more cards
        if (cardsObj.deck.length === 0) {
            deck.classList.add("js-empty");
            return;
        }

        // Append each drawn card to the drawnCards element
        let drawn = createCard(cardsObj.draw().image);
        container.appendChild(drawn);
    });

    return deck;
}

function createDrawnCardsContainer(){
    // Just create an empty container and return it
    let drawnCards = document.createElement("DIV");
    drawnCards.classList.add("card__container");
    return drawnCards;
}

function createCard(imgSrc){
    // Create the card element
    let card = document.createElement("DIV");
    card.classList.add("card");
    
    // Create the img and set src to whatever is
    // passed in as an argument (imgSrc)
    let img = document.createElement("IMG");
    img.src = imgSrc;
    img.classList.add("card__image");

    // Append the img to the card
    card.appendChild(img);

    return card;
}