import React, { useState } from 'react'

const Rectangulo = () => {
    // Estado
    const ColorDefault ={

        red: getRandomIntInclusive().toString(),
        green: getRandomIntInclusive().toString(),
        blue: getRandomIntInclusive().toString()
    }

    const [stateColor, setStateColor]= useState(ColorDefault);


    // colo de estilos por defecto
    

    // Funcion que actualiza los estilos

    function getRandomIntInclusive(min=0, max=255){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Estilos del rectangulo

    const styledRectagulo ={

        backgroundColor: `rgb(${stateColor.red}, ${stateColor.green}, ${stateColor.blue})`,
        with:"255px",
        height:"255px",
        border: "3px solid black",
        marginTop:"3rem",
        color:"white"
    }

    // Funcion que se ejecuta con el evento onMouseEnter

    const changeColor=(e)=>{

        setStateColor({
            // Aqui tenemos que convertir el dato de entero a character
            red: getRandomIntInclusive().toString(),
            green: getRandomIntInclusive().toString(),
            blue: getRandomIntInclusive().toString(),
        })
    }

  return (
    <div className='container'>
        <div id='rectagulo' style={styledRectagulo} onMouseEnter={(e)=>{changeColor(e)}} onMouseMove={(e)=>{changeColor(e)}}>
            <p >Soy un Cuadrado</p>
        </div>
    </div>
  )
}

export default Rectangulo;