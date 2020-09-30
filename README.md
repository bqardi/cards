# Cards API
A simple API for playing cards, stored in a JSON file.

---

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

An API for handling the cards (shuffling, sorting, getting cards, etc.) can be imported like this:
```JavaScript
import cards from "https://bqardi.github.io/cards/api/card.js";

cards.getCards(data => {
    console.log(data);
});
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
