let cards = {
    getCards(callback){
        fetch("https://bqardi.github.io/cards/api/index.json").then(res => {
                console.log(res);    
                return res.json();
            })
            .then(callback);
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