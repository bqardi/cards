let cards = {
    back: null,
    list: [],
    shuffled: [],
    shuffle(){
        if (!this.back) {
            return;
        }
        this.shuffled = this.list.reduce((newArr, current, i) => {
            var rnd = i + (Math.floor( Math.random() * (newArr.length - i)));
            [newArr[rnd], newArr[i]] = [current, newArr[rnd]];
            return newArr;
        }, [...this.list]);
    },
    shuffleOldWay(){
        if (!this.back) {
            return;
        }
        for (let i = this.list.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.list[i];
            this.list[i] = this.list[j];
            this.list[j] = temp;
        }
    }
}

function initializeCards(shuffle, callback){
    fetch("https://bqardi.github.io/cards/api/index.json")
        .then(res => res.json())
        .then(data => {
            cards.back = data.back;
            cards.list = data.cards;
            if (shuffle) {
                cards.shuffle();
            }
            callback(cards);
        });
}

export default initializeCards;