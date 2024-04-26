//quote generator
//document.querySelector()
//addEventListener()
//Math Object()
//InnerText

// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"twoj stary je pojary"`,
    person: ` Mahatma Gandhi`
}, {
    quote: `"Halo"`,
    person: `Jan Pawel II`
}, {
    quote: `"Twoja stara to gitara"`,
    person: `Marek Aureliusz`
}, {
    quote: `Zawsze sie troche gwalci`,
    person: `Jonasz Koran Mekka`
},
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})