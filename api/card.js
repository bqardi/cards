let cards = {
    back: null,
    list: [],
    initialize(callback){
        fetch("https://bqardi.github.io/cards/api/index.json")
            .then(res => res.json())
            .then(data => {
                this.back = data.back;
                this.list = data.cards;
                callback();
            });
    },
    create(imgSrc){
        if (!this.back) {
            return;
        }
        let card = document.createElement("DIV");
        card.classList.add("card");
        
        let img = document.createElement("IMG");
        img.src = imgSrc;
        img.classList.add("card__image");

        card.appendChild(img);

        return card;
    },
    shuffle(array){
        if (!this.back) {
            return;
        }
        return array.reduce((newArr, current, i) => {
            var rnd = i + (Math.floor( Math.random() * (newArr.length - i)));
            [newArr[rnd], newArr[i]] = [current, newArr[rnd]];
            return newArr;
        }, [...array]);
    },
    shuffleOldWay(array){
        if (!this.back) {
            return;
        }
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

export default cards;