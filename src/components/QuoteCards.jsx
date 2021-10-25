
import React from "react"

function QuoteCards({simpsonQuote}) {
    return(
        <>
            <h1>{simpsonQuote.character}</h1>
            <img src={simpsonQuote.image} alt="" />
            <p>{simpsonQuote.quote}</p>
        </>
    )
};

export default QuoteCards;