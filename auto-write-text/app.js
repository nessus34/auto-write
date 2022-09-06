const container = document.getElementById("text");

const text = "Je t’aime mon amour ; c’est toi mon seul but dans la vie, tu es mon présent et mon avenir. Je ne vis que pour toi et je ne pense qu’à toi. J’aimerais te voir rapidement parce que j’ai tant de baisers, tant de douceur, tant d’amour à te donner. Je t’aime et je t’aimerai pour toujour";


const interval = 50;
const limit = text.length;
let index = 0;

const idInteval = setInterval(function() {
    if (index <= limit) {

        container.innerText = text.slice(0, index++)
    } else {
        clearInterval(idInteval)
    }

}, interval)