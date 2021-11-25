const inspirationQuotes = {
    beginningSentence: [
        "If you look at what you have in life, you'll always have more.",
        "Your time is limited, so don't waste it living someone else's life.",
        "Life is what happens",
        "If you set your goals ridiculously high and it's a failure,",
        "The best and most beautiful things in the world",
        "The greatest glory in living",
        "Many of life's failures are people",
        "You have brains in your head.",
        "May you live",
        "Love the life"
    ],
    middleSentence: [
        "If you look at what you don't have in life,",
        "Don't be trapped by dogma –",
        "when you're busy",
        "you will fail above",
        "cannot be seen or even touched —",
        "lies not in never falling,",
        "who did not realize how close",
        "You have feet in your shoes.",
        "all the days",
        "you live."
    ],
    endingSentence: [
        "you'll never have enough.",
        "which is living with the results of other people's thinking.",
        "making other plans.",
        "everyone else's success.",
        "they must be felt with the heart.",
        "but in rising every time we fall.",
        "they were to success when they gave up.",
        "You can steer yourself any direction you choose.",
        "your life.",
        "Live the life you love."
    ],
    authorOfSentence: [
        "Oprah Winfrey",
        "Steve Jobs",
        "John Lennon",
        "JAames Cameron",
        "Hellen Kehler",
        "Nelson Mandela",
        "Thomas A. Eidson",
        "Dr Seuss",
        "Jonatha Swift",
        "Bob Marley"
    ]
}

let generalRandomQuote;
let generalAuthor;
let quoteMark = document.querySelectorAll('.icon');

const generate = () => {
    const randomQuotes1 = inspirationQuotes.beginningSentence[Math.floor(Math.random() * inspirationQuotes.beginningSentence.length)];
    const randomQuotes2 = inspirationQuotes.middleSentence[Math.floor(Math.random() * inspirationQuotes.middleSentence.length)];
    const randomQuotes3 = inspirationQuotes.endingSentence[Math.floor(Math.random() * inspirationQuotes.endingSentence.length)];
    const randomAuthor = inspirationQuotes.authorOfSentence[Math.floor(Math.random() * inspirationQuotes.authorOfSentence.length)];
    generalRandomQuote = randomQuotes1 + " " + randomQuotes2 + " " + randomQuotes3;
    // console.log(randomAuthor);

    return '<span>'+ generalRandomQuote + '</span>';
}

generate();

let quoteBtn = document.getElementById('quote-button');
let quote1 = document.querySelector('.quote');
let quoteDrawer = document.getElementById('quote_drawer');


let quoteGen = document.getElementsByClassName('quote_gen');

for(let i=0; i<quoteGen.length; i++){
    
    quoteGen[i].addEventListener('click', ()=>{
        var htmlData = '';
        let num = i+1;
        for(let j=0; j<num; j++){
             if(num==1){
                 htmlData = generate();
             }
             if(num>1){
                htmlData +=   generate() + '<br><br>' ;
             }
            // 
            console.log(htmlData);
        }
        quoteDrawer.innerHTML = htmlData;
        htmlData = '';

        if(num>=1){
            clearInterval(myTime);
        }
    })
}


// console.log(quoteGen);


quoteBtn.addEventListener('click', () =>{
    quoteDrawer.innerHTML = generate();
    clearInterval(myTime);
})

var myTime = window.setInterval('refresh()', 10000); 	
    function refresh() {
        quoteDrawer.innerHTML = generate();
    }
    
