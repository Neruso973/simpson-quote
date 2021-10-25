import React from 'react';
import QuoteCards from './components/QuoteCards';
import axios from 'axios';
import './App.css';

function App() {
  const [simpsonQuote, setSimpsonQuote] = React.useState("");
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
