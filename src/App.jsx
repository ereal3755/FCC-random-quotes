import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, {useState, useEffect} from 'react';


export default function App(){
  const [quote, setQuote] = useState({});
  useEffect(() =>{
    handleClick();
  }, [])
  const quotes = [
    {quote:"The purpose of our lives is to be happy.", author: 'Dalai Lama'}, 
    {quote:"Life is what happens when you're busy making other plans.", author: 'John Lennon'}, 
    {quote:"Get busy living or get busy dying", author: 'Stephen King'}, 
    {quote:"You live only once, but if you do it right, once is enough.", author: 'Mae West'}, 
    {quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.", author: 'Thomas A. Edison'}
  ];
  const colors = [
    "RGB(255, 165, 0)",
    "RGB(50, 205, 50)",
    "RGB(0, 191, 255)",
    "RGB(255, 99, 71)",
    "RGB(128, 0, 128)",
    "RGB(0, 128, 0)",
    "RGB(255, 20, 147)",
    "RGB(255, 215, 0)",
    "RGB(0, 255, 255)",
    "RGB(139, 69, 19)",
    "RGB(255, 192, 203)",
    "RGB(0, 0, 128)",
    "RGB(255, 69, 0)",
    "RGB(0, 128, 128)",
    "RGB(255, 0, 255)",
    "RGB(255, 140, 0)",
    "RGB(0, 250, 154)",
    "RGB(70, 130, 180)",
    "RGB(218, 112, 214)",
    "RGB(255, 105, 180)",
    "RGB(0, 0, 255)",
    "RGB(255, 182, 193)",
    "RGB(0, 255, 0)",
    "RGB(123, 104, 238)",
    "RGB(135, 206, 250)",
    "RGB(255, 228, 181)",
    "RGB(0, 255, 127)",
    "RGB(255, 20, 147)",
    "RGB(255, 69, 0)",
    "RGB(0, 0, 205)",
    "RGB(240, 230, 140)",
    "RGB(0, 255, 255)",
    "RGB(250, 128, 114)",
    "RGB(70, 130, 180)",
    "RGB(144, 238, 144)",
    "RGB(255, 69, 0)",
    "RGB(0, 191, 255)",
    "RGB(255, 140, 0)",
    "RGB(255, 69, 0)",
    "RGB(255, 20, 147)",
    "RGB(100, 149, 237)",
    "RGB(255, 192, 203)",
    "RGB(255, 228, 181)",
    "RGB(0, 128, 0)",
    "RGB(70, 130, 180)",
    "RGB(255, 165, 0)",
    "RGB(0, 128, 128)",
    "RGB(218, 112, 214)",
    "RGB(255, 250, 205)",
    "RGB(107, 142, 35)"
  ];
  const root = document.documentElement;
  
  
    const handleClick = (e) =>{
      if(e){
        e.preventDefault();
      }
      const randomQuote = Math.floor(Math.random()*quotes.length );
      const randomColor = Math.floor(Math.random()* colors.length);
      setQuote(quotes[randomQuote])
      root.style.setProperty('--color-scheme', colors[randomColor]);
    }
  return(
    <div id="quote-box">
      <div id="text">
      <i>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </i>
        {quote.quote}
      </div>
      <div id="author">
        - {quote.author}
      </div>
      <div className="buttons">
        <a href="https://twitter.com/intent/tweet" target="_top" id="quote-tweet">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <button id="new-quote" onClick={handleClick}>New quote</button>
      </div>
    </div>
  )
}