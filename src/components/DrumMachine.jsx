import React from 'react'

const DrumMachine = () => {



  return (

    <div id="drum-machine" className='drum-machine'>

        <div className='display-drum'>
            
            <div className='buttons-group'>
                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-one'>Q</button>
                </div>

                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-two'>W</button>
                </div>

                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-three'>E</button>
                </div>

                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-four'>A</button>
                </div>

                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-five'>s</button>
                </div>

                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-six'>D</button>
                </div>

                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-seven'>z</button>
                </div>

                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-eight'>x</button>
                </div>

                <div className='button-container-drum'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-nine'>c</button>
                </div>
            </div>

            <div className='controls-container'>
              <h4 className='text-center'>Power</h4>
              <div class="form-check form-switch w-100  align-middle" style={{paddingLeft:"9.5em"}}>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              </div>

              <div id='display'>

              </div>
            </div>
        </div>

    </div>
  )
}

export default DrumMachine;