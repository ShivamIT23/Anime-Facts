import {random} from "./random.js";

let quotes = document.querySelector("#quote-child");

let randomQuotes = random();
quotes.children[0].innerHTML= randomQuotes[0];
quotes.children[1].innerHTML= `<b>By</b> - ${randomQuotes[1]}`;


setInterval(()=>{
    let randomQuotes = random();
    quotes.children[0].innerHTML= randomQuotes[0];
    quotes.children[1].innerHTML= `<b>By</b> - ${randomQuotes[1]}`;
} ,7000);