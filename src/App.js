import React from 'react';
import QuoteCards from './components/QuoteCards';
import axios from 'axios';
import './App.css';

const simpson = {
  "quote":"In theory, Communism works! In theory.",
  "character":"Homer Simpson",
  "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  "characterDirection":"Right"}

function App() {
  const [simpsonQuote, setSimpsonQuote] = React.useState(simpson);
  const getSimpsonQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0])
        setSimpsonQuote(data[0]);
      });
  };
  return (
    <div className="App">
      <QuoteCards simpsonQuote={simpsonQuote}/>
      <button type="button" onClick={getSimpsonQuote}>Get quote</button>
    </div>
  );
}

export default App;
