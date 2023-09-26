var Teddy = document.getElementById("Teddy");

var cardArray = [];

var videoGamesCard = {
    img: "./assets/images/erik-mclean-42UM-xVrKko-unsplash.jpg",
    title: "Video Games",
    content: "I like video games becaues they are fun"
};

cardArray.push(videoGamesCard);


var mountainBikeCard = {
    img: "./assets/images/james-hoey-T0eAoLwZB88-unsplash.jpg",
    title: "Mountain Biking",
    content: "I like mountainBike"
}

cardArray.push(mountainBikeCard);

function cardFactory(cardArray) {

    cardArray.forEach(item => {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h3");
        const content = document.createElement("p");

        img.src = item.img;
        title.textContent = item.title;
        content.textContent = item.content;

        img.classList = "cardImg";

        card.append(img, title, content);

        card.classList = "hobbyCard";

        Teddy.appendChild(card);
    });
}

cardFactory(cardArray);

function carel () {
    console.log("Run");
}