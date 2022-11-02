import React from 'react'

const DrumMachine = () => {

  // const DrumPad = ({ drumKey, song,handleClick,url }) => {
  //   return (
  //       <button className="drum-pad" id={song} onClick={handleClick(drumKey,song)}>
  //           {drumKey}
  //           <audio className="clip" src={url} id={drumKey}/>
  //       </button>
  //   );
  // };

  return (

    <div id="drum-machine" className='drum-machine'>

        <div className='display-drum'>
            
            <div className='buttons-group'>
                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-one'>Q</button>

                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-two'>W</button>

                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-three'>E</button>

                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-four'>A</button>

                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-five'>s</button>

                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-six'>D</button>

                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-seven'>z</button>

                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-eight'>x</button>

                  <button className='my-btn box-shadow-buttons drum-pad' id='heater-nine'>c</button>
            </div>

            <div className='controls-container'>
              <h4 className='text-center'>Power</h4>
              <div class="form-check form-switch w-100  align-middle" style={{paddingLeft:"9.5em"}}>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              </div>

              <div id='display' className='my-3'>

              </div>

              <div className='volume.slider'>
                <input type={"range"} max={"1"} min={"0"} step={"0.01"} className="form-range"/>
              </div>

              <h4 className='text-center'>Bank</h4>
              <div class="form-check form-switch w-100  align-middle" style={{paddingLeft:"9.5em"}}>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              </div>
            </div>
        </div>

    </div>
  )
}

export default DrumMachine;