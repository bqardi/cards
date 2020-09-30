let cards = {
    back: null,
    deckDiscard: false,
    list: [],
    deck: [],
    inPlay: [],
    discardPile: [],
    reset(){
        this.deck = this.list;
        this.inPlay = [];
        this.discardPile = [];
    },
    shuffleDeck(){
        for (let i = this.deck.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = tmp;
        }
    },
    shuffleDiscardPile(){
        for (let i = this.discardPile.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = this.discardPile[i];
            this.discardPile[i] = this.discardPile[j];
            this.discardPile[j] = tmp;
        }
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
    },
    find(id){
        return this.list.find(card => card.id === id);
    }
}

function getCards(callback){
    fetch("https://bqardi.github.io/cards/api/index.json")
        .then(res => res.json())
        .then(data => {
            cards.back = data.back;
            cards.list = data.cards;
            cards.reset();
            callback(cards);
        });
}

export default getCards;