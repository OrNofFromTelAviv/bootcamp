
let quotesArray = [
    {id: 0, author: "Mae West", quote: "You only live once, but if you do it right, once is enough."},
    {id: 1, author: "Oprah Winfrey",quote: "Turn your wounds into wisdom."},
    {id: 2, author: "Robert Frost",quote: "In three words I can sum up everything I've learned about life: It goes on."},
    {id: 3, author: " Mark Twain", quote: "The two most important days in your life are the day you are born and the day you find out why."},
    {id: 4, author: "Nikki Giovanni", quote: "Mistakes are a fact of life. It is the response to the error that counts."},
    {id: 5, author: "Dolly Parton", quote: "If you don't like the road you're walking, start paving another one."},
    {id: 6, author: "Unknown", quote: "One day or day one. It's your decision."}
]

let currentId

let quotesRetriver = ()=>{
    let ids = quotesArray.map(quote=>quote.id)
    let randomIdGen =()=> ids[Math.floor(Math.random()*ids.length)];
    let randomId = currentId
    while (randomId === currentId){
        currentId = randomIdGen()
    }
    let randomQuote = quotesArray.find (quote=>quote.id === currentId)
    return randomQuote

}



let htmlFeeder = (event) => {
    let quote = document.querySelector("#quote")
    let author = document.querySelector("#author")
    let randomQuote = quotesRetriver();
    [quote, author].forEach(element => {
        element.textContent = randomQuote[element.id]    
    });
}

let quoteGen = document.querySelector("#quoteGen")
quoteGen.addEventListener("click", htmlFeeder)
