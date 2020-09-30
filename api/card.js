let cards = {
    back: null,
    deckDiscard: false,
    list: [],
    deck: [],
    inPlay: [],
    discardPile: [],
    shuffle(){
        this.deck = this.list.reduce((newArr, current, i) => {
            var rnd = i + (Math.floor( Math.random() * (newArr.length - i)));
            [newArr[rnd], newArr[i]] = [current, newArr[rnd]];
            return newArr;
        }, [...this.list]);
    },
    draw(){
        let drawn = this.deck.shift();
        this.inPlay.push(drawn);
        return drawn;
    },
    discard(card){
        if (!this.inPlay.includes(card)) {
            if (this.deckDiscard) {
                if (!this.deck.includes(card)) {
                    console.error(`${card.name} is ALREADY discarded!`);
                    return;
                }
                this.discardPile.push(this.deck.shift());
            } else {
                console.error(`${card.name} is NOT in play!`);
                return;
            }
        }
        this.discardPile.push(this.inPlay.shift());
    }
}

function getCards(callback){
    fetch("https://bqardi.github.io/cards/api/index.json")
        .then(res => res.json())
        .then(data => {
            cards.back = data.back;
            cards.list = data.cards;
            cards.deck = data.cards;
            callback(cards);
        });
}

export default getCards;