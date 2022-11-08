import React from 'react'

const Calculator = () => {
  return (

    <div className='calculator-container'>

        <div className='calculator-box'>
            <div className='formula-screen'>
                578.98
            </div>
            <div className='output-screen'>
                578.9
            </div>

            <div className='numbers-and-operations'>
                <button id='clear' className='clear' value={"AC"} style={{background: "rgb(172, 57, 57)"}}> AC</button>
                <button id='divide' value={"/"} style={{background: "rgb(102, 102, 102)"}}> / </button>
                <button id='multiply' value={"X"} style={{background: "rgb(102, 102, 102)"}}> X </button>
                <button id='seven' value={"7"} style={{background: "rgb(102, 102, 102)"}}> 7 </button>
                <button id='eight' value={"8"} style={{background: "rgb(102, 102, 102)"}}> 8 </button>
                <button id='nine' value={"9"} style={{background: "rgb(102, 102, 102)"}}> 9 </button>
                <button id='subtract' value={"-"} style={{background: "rgb(102, 102, 102)"}}> - </button>
                <button id='four' value={"4"} style={{background: "rgb(102, 102, 102)"}}> 4 </button>
                <button id='five' value={"5"} style={{background: "rgb(102, 102, 102)"}}> 5 </button>
                <button id='six' value={"6"} style={{background: "rgb(102, 102, 102)"}}> 6 </button>
                <button id='add' value={"+"} style={{background: "rgb(102, 102, 102)"}}> + </button>
                <button id='one' value={"1"} style={{background: "rgb(102, 102, 102)"}}> 1 </button>
                <button id='two' value={"2"} style={{background: "rgb(102, 102, 102)"}}> 2 </button>
                <button id='three' value={"3"} style={{background: "rgb(102, 102, 102)"}}> 3 </button>
                <button id='zero' value={"0"} style={{background: "rgb(102, 102, 102)"}}> 0 </button>
                <button id='decimal' value={"."} style={{background: "rgb(102, 102, 102)"}}> . </button>
                <button id='equals' value={"="} style={{background: "rgb(0, 68, 102)"}}> = </button>
            </div>

        </div>

    </div>
  )
}

export default Calculator;