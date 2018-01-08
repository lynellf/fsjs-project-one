// Each quote object in the quotes array should have the following properties:
// A quote property 
// A source property 
// A citation property (optional)
// A year property  (optional)

const quotes = [{
            quote: 'After some other mistakes, I learned to go into business only with people whom I like, trust and admire',
            source: 'Warren Buffett',
            citation: 'Chairman\'s Letter',
            year: '1989',
            tags: 'Management'
        },
        {
            quote: 'There are people who want to achieve--and then there are sane people',
            source: 'Richard Koch',
            citation: 'The 80/20 Principle: The Secret to Achieving More with Less',
            year: '1997',
            tags: 'Motivational'
        },
        {
            quote: 'Small, smart choices + consistency + time = radical difference',
            source: 'Darren Hardy',
            citation: 'The Compound Effect',
            year: '1987',
            tags: 'Motivational'
        },
        {
            quote: 'Invention and discoveries have emanated from creative minds that have been constantly working and imagine the outcome',
            source: 'A. P. J. Abdul Kalam',
            citation: 'Rajya Sabha TV',
            year: '2012',
            tags: 'Motivational'
        },
        {
            quote: 'Monotony is poverty, whether in speech or in life',
            source: 'Dale Carnegie',
            citation: 'Art of Public Speaking',
            year: '1915',
            tags: 'Motivational'
        }
    ],

    // The function named getRandomQuote which:
    // selects a random quote object from the quotes array
    // returns the randomly selected quote object

    getRandomQuote = (array) => {
        const min = 0,
            max = Math.floor(array.length);
        let randomNum = Math.floor(Math.random() * (max - min) + min);
        return array[randomNum];
    },

    printQuote = () => {
        // printQuote calls the getRandomQuote function and stores the returned quote object in a variable
        // printQuote generates three separate rgb values up to 250. 
        // 255, 255, 255, is all white which would clash with the text.
        const quote = getRandomQuote(quotes),
            rgbaMin = 0,
            rgbaMax = 250,
            body = document.querySelector('body');
        quoteBox = document.querySelector('#quote-box');
        let quoteHtml,
            randomColor1 = Math.floor(Math.random() * (rgbaMax - rgbaMin) + rgbaMin),
            randomColor2 = Math.floor(Math.random() * (rgbaMax - rgbaMin) + rgbaMin),
            randomColor3 = Math.floor(Math.random() * (rgbaMax - rgbaMin) + rgbaMin);

        // printQuote doesn't add a for a missing citation or a if the year property is missing
        if (quote.citation === '') {
            quoteHtml =
                `
            <p class ="quote"> ${quote.quote} </p>
            <p class ="source"> ${quote.source} 
                <span class ="year">${quote.year}</span> 
            </p>
    
            `;
        } else if (quote.year === '') {
            quoteHtml =
                `
            <p class ="quote"> ${quote.quote} </p>
            <p class ="source"> ${quote.source} 
                <span class ="citation"> ${quote.citation} </span>  
            </p>
    
            `;
        } else {
            quoteHtml =
                `
            <p class ="quote"> ${quote.quote} </p>
            <p class ="source"> ${quote.source} 
                <span class ="citation"> ${quote.citation} </span> 
                <span class ="year">${quote.year}</span> 
            </p>
    
            `;
        }
        // printQuote displays the final HTML string to the page.
        quoteBox.innerHTML = quoteHtml;

        // random background color for each quote
        body.style.backgroundColor = `rgba(${randomColor1}, ${randomColor2}, ${randomColor3})`;

    }

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// printQuote function is called at 5 second intervals.

setInterval(() => {
    printQuote();
}, (10 * 1000));