let cards = {
    getCards(){
        // return fetch("https://bqardi.github.io/cards/assets/api/index.json").then(res => res.json());
        return fetch("/cards/assets/api/index.json").then(res => res.json());
    },
    createCard(imgSrc){
        let card = document.createElement("DIV");
        card.classList.add("card");
        
        let img = document.createElement("IMG");
        img.src = imgSrc;
        img.classList.add("card__image");

        card.appendChild(img);

        return card;
    }
}

export default cards;