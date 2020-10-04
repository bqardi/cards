let cards = {
    back: null,
    deckDiscard: false,
    list: [],
    deck: [],
    inPlay: [],
    discarded: [],
    reset(){
        this.deck = [...this.list];
        this.inPlay = [];
        this.discarded = [];
    },
    inPlayToDeck(){
        this.deck = [...this.inPlay];
        this.inPlay = [];
    },
    discardedToDeck(){
        this.deck = [...this.inPlay];
        this.inPlay = [];
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
        for (let i = this.discarded.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = this.discarded[i];
            this.discarded[i] = this.discarded[j];
            this.discarded[j] = tmp;
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
                    console.error(`${card.name} has ALREADY been discarded!`);
                    return;
                }
                let index = this.deck.indexOf(card);
                this.discarded.push(this.deck.splice(index, 1));
            } else {
                console.error(`${card.name} is NOT in play!`);
                return;
            }
        }
        let index = this.inPlay.indexOf(card);
        this.discarded.push(this.inPlay.splice(index, 1));
    },
    findCard(id){
        return this.list.find(card => card.id === id);
    }
}

function getCards(callback, preloadImages = false){
    fetch("https://bqardi.github.io/cards/api/index.json")
        .then(res => res.json())
        .then(data => {
            cards.back = data.back;
            cards.list = data.cards;
            cards.reset();
            if (preloadImages) {
                getImages().then(function(images){
                    cards.images = images;
                    cards.getImage = (id) => this.images.find(obj => obj.id === id).image;
                    callback(cards);
                });
            } else {
                callback(cards);
            }
        });
}

function getImages(){
    let images = cards.list.map(loadImage);
    return Promise.all(images);
}

function loadImage(obj){
    let img = new Image();
    img.src = obj.image;
    return {
        id: obj.id,
        image: img
    };
}

export default getCards;