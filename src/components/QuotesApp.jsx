import axios from 'axios'
import React, { useEffect, useState } from 'react'

const QuotesApp = () => {

    function getRandomIntInclusive(min=0, max=255){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const [quoteActual, setQuoteActual] =useState([]);


    const ColorDefault ={

        red: getRandomIntInclusive().toString(),
        green: getRandomIntInclusive().toString(),
        blue: getRandomIntInclusive().toString()
    }

    const [stateColor, setStateColor]= useState(ColorDefault);

    const styledRectagulo ={

        backgroundColor: `rgb(${stateColor.red}, ${stateColor.green}, ${stateColor.blue})`,
    }

    // Funcion que se ejecuta con el evento onMouseEnter

    // const changeColor=()=>{

    //     setStateColor({
    //         // Aqui tenemos que convertir el dato de entero a character
    //         red: getRandomIntInclusive().toString(),
    //         green: getRandomIntInclusive().toString(),
    //         blue: getRandomIntInclusive().toString(),
    //     })
    // }

    const getQuote=()=>{

        return axios.get(`https://api.chucknorris.io/jokes/random`)
        // return axios.get(`https://zenquotes.io/api/today`)
    }

    useEffect(()=>{

        getQuote()
            .then((response)=>{

                
                setQuoteActual(response.data)
                
                setStateColor({
                    // Aqui tenemos que convertir el dato de entero a character
                    red: getRandomIntInclusive().toString(),
                    green: getRandomIntInclusive().toString(),
                    blue: getRandomIntInclusive().toString(),
                })
                
            })
            .catch((error)=>{

                console.log(error)
            })
    }, [])


    const getQuoteFromButton=()=>{

        getQuote()
            .then((response)=>{

                
                setQuoteActual(response.data)
                
                setStateColor({
                    // Aqui tenemos que convertir el dato de entero a character
                    red: getRandomIntInclusive().toString(),
                    green: getRandomIntInclusive().toString(),
                    blue: getRandomIntInclusive().toString(),
                })
                
            })
            .catch((error)=>{

                console.log(error)
            })
    }
  return (


    <div id='quote-box-container' className='quote-box-container' style={styledRectagulo}>
        <div id="quote-box" className='quote-box'>
                <h1 id='text'>{quoteActual.value}</h1>
                <div className='author'>
                    -
                    <span id='author'>
                        Chuck Norris Jokes
                    </span>

                    <a rel="noreferrer" id='tweet-quote' href={`https://twitter.com/intent/tweet/?hashtags=${quoteActual.value}-CN-Joke`} target="_blank">
                        Tweet
                    </a>

                <div>

                
                <div className='buttons-group'>

                    <button id="new-quote" className='btn btn-success' onClick={(e)=>{getQuoteFromButton()}}>
                        New Quote
                    </button>

                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default QuotesApp;