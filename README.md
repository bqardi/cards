# Cards API
A simple API for playing cards, stored in a JSON file.

Fetch the JSON data (cards object) from [https://bqardi.github.io/cards/api/](https://bqardi.github.io/cards/api/):
```JavaScript
fetch("https://bqardi.github.io/cards/api/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
```

# OR use the API:

### Handling (JavaScript API)

An API for handling the cards (shuffling, discarding, draw card, find card, etc.) can be imported like this:
```JavaScript
import getCards from "https://bqardi.github.io/cards/api/card.js";

// Pass in true as the preload argument for preloading all images, when calling getCards(callback, preload)
// (if no argument is passed in, the default is false, meaning the images are NOT preloaded).

// To actually get the <img> call cardObj.getImage(id); where 'id' is the suit
// and the value (for example: "ha", (h = suit (hearts) and a = ace)).

let preload = true;

getCards(data => {
    var cardsObj = data;
    console.log(cardsObj);
}, preload);
```

#### List of card suits and value:

##### Suits:
- h = hearts
- s = spades
- d = diamonds
- c = clubs

##### Value:
- 2 - 10 = their respective value
- a = ace
- j = jack
- q = queen
- k = king

#### Methods:

```JavaScript
// The following methods are methods that only affects the cards object:

// Resets the card object
cardsObj.reset();

// Moves all cards in play to the deck
cardsObj.inPlayToDeck();

// Moves all discarded cards to the deck
cardsObj.discardedToDeck();

// Shuffles the deck
cardsObj.shuffleDeck();

// Shuffles the discard pile
cardsObj.shuffleDiscardPile();

// Returns the first card in the deck and sends it into play (the inPlay array)
cardsObj.draw();

// Discards the card passed in as an argument
// (sends it to the discard pile. NOTE! Must be the card object, NOT the card HTML element!)
cardsObj.discard(card);

// Finds and returns a card with a given id
// (for example: cardsObj.findCard("dj"); // Finds the Jack of Diamonds)
cardsObj.findCard(id);

// This method is ONLY available if 'preload' is set to true!
// Returns the <img> with the preloaded card image (if proper card 'id' is passed as an argument)
cardsObj.getImage(id);
```

### OPTIONAL Styling:

A default CSS can be imported from the api folder:
```CSS
@import "https://bqardi.github.io/cards/api/card.css";
```
The CSS import is optional. It just gives the cards a more "playing-card" -look with border and shadow.
If this is not desired, just create your own CSS styling.
This is how the cards are styled with the imported CSS styling:
```CSS
.card {
    padding: 0.5em;
    border: 2px solid black;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 150ms ease-out;
}

.card:hover {
    transform: scale(1.02);
    box-shadow: 5px 5px 12px 0 rgba(0, 0, 0, 0.25);
    transition: all 300ms ease-out;
}

.card__image {
    display: block;
    width: 100%;
}
```
