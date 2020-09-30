import getData from "./modules/fetch.js";
import cards from "./modules/card.js";

getData("./api/index.json").then(onLoadData);

function onLoadData(data){
    let board = document.querySelector(".board");
    let card = cards.createCard(data.cards[12].image);
    board.appendChild(card);
}