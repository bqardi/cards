let cards = {
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