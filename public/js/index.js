"use strict"
 
const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};
async function getRandomImage() {
    const client_id = process.env.client_id;
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
   try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;
 
        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.error(error);
    }
}
getRandomImage();

const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },
 
    {
        quote: "Doh!",
        author: "Homer Simpson",
    },
 
    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    },

    {
        quote: "To the desert go prophets and hermits; through desert go pilgrims and exiles. Here the leaders of the great religions have sought the therapeutic and spiritual values of retreat, not to escape but to find reality.",
        author: "Paul Shepard’s Man in the Landscape",
    }
];
function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 5000);
}
setTimeout(loopThroughQuotes, 5000);
