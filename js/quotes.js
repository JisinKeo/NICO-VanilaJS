const quotes = [
    {
        quote : "Energy is eternal delight.",
        author : "William Blake",
    },
    {
        quote : "Great minds have purposes, others have wishes.",
        author : "Washington Irving",
    },
    {
        quote : "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author : "Albert Einstein",
    },
    {
        quote : "Punctuality is the soul of business.",
        author : "Thomas Halyburton",
    },
    {
        quote : "Laughter is by definition healthy.",
        author : "Doris Lessing",
    },
    {
        quote : "What we dwell on is who we become.",
        author : "Oprah Winfrey",
    },
    {
        quote : "Ability is of little account without opportunity.",
        author : "Napoleon Bonaparte",
    },
    {
        quote : "Respect yourself and others will respect you.",
        author : "Confucius",
    },
    {
        quote : "Only in the agony of parting do we look into the depths of love.",
        author : "George Eliot",
    },
    {
        quote : "What is a friend? A single soul dwelling in two bodies.",
        author : "Aristotle",
    }
]   

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
