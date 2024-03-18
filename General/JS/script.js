import {random} from "./random.js";
import {img} from "./api.js";


let quotes = document.querySelector("#quote-child");

let randomQuotes = random();
quotes.children[0].innerHTML= randomQuotes[0];
quotes.children[1].innerHTML= `<b>By</b> - ${randomQuotes[1]}`;


setInterval(()=>{
    let randomQuotes = random();
    quotes.children[0].innerHTML= randomQuotes[0];
    quotes.children[1].innerHTML= `<b>By</b> - ${randomQuotes[1]}`;
} ,7000);

let smallImage = document.querySelector(".Icon-img");

const ImageChange = async ()=>{
    let url = await img();
    smallImage.src = url;
    setInterval(async ()=>{
        let url = await img();
        smallImage.src = url;
    },50000)
}

ImageChange();