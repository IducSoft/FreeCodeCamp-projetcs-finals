import React, { useState } from 'react'

const Calculator = () => {

    const [inputNumber, setInputNumber] = useState("0")


    const addNumber = (number)=>{
        console.log(number)
        if(inputNumber === "0" && number === "0"){
            return
        }

        if(number !== "0" && inputNumber !== "0"){

            let input ="";
            input += number;
            setInputNumber( input)
        }


    }

  return (

    <div className='calculator-container'>

        <div className='calculator-box'>
            <div className='formula-screen' id="display-result">
                {inputNumber}
            </div>
            <div className='output-screen' id="display">
                result
            </div>

            <div className='numbers-and-operations'>
                <button id='clear'  className='clear' value={"AC"} style={{background: "rgb(172, 57, 57)"}}> AC</button>
                <button id='divide' value={"/"} style={{background: "rgb(102, 102, 102)"}}> / </button>
                <button id='multiply' value={"X"} style={{background: "rgb(102, 102, 102)"}}> X </button>
                <button id='seven' onClick={(e)=>addNumber("7")} value={"7"} style={{background: "rgb(102, 102, 102)"}}> 7 </button>
                <button id='eight' onClick={(e)=>addNumber("8")} value={"8"} style={{background: "rgb(102, 102, 102)"}}> 8 </button>
                <button id='nine' onClick={(e)=>addNumber("9")} value={"9"} style={{background: "rgb(102, 102, 102)"}}> 9 </button>
                <button id='subtract' value={"-"} style={{background: "rgb(102, 102, 102)"}}> - </button>
                <button id='four' onClick={(e)=>addNumber("4")} value={"4"} style={{background: "rgb(102, 102, 102)"}}> 4 </button>
                <button id='five' onClick={(e)=>addNumber("5")} value={"5"} style={{background: "rgb(102, 102, 102)"}}> 5 </button>
                <button id='six' onClick={(e)=>addNumber("6")} value={"6"} style={{background: "rgb(102, 102, 102)"}}> 6 </button>
                <button id='add'  value={"+"} style={{background: "rgb(102, 102, 102)"}}> + </button>
                <button id='one' onClick={(e)=>addNumber("1")} value={"1"} style={{background: "rgb(102, 102, 102)"}}> 1 </button>
                <button id='two' onClick={(e)=>addNumber("2")} value={"2"} style={{background: "rgb(102, 102, 102)"}}> 2 </button>
                <button id='three' onClick={(e)=>addNumber("3")} value={"3"} style={{background: "rgb(102, 102, 102)"}}> 3 </button>
                <button id='zero'  onClick={(e)=>addNumber("0")} value={"0"} style={{background: "rgb(102, 102, 102)"}}> 0 </button>
                <button id='negative'  onClick={(e)=>addNumber("negative")} value={"-1"} style={{background: "rgb(102, 102, 102)"}}> -1 </button>
                <button id='decimal' value={"."} style={{background: "rgb(102, 102, 102)"}}> . </button>
                <button id='equals' value={"="} style={{background: "rgb(0, 68, 102)"}}> = </button>
            </div>

        </div>

    </div>
  )
}

export default Calculator;