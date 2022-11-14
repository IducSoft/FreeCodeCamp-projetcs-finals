import React, { useState } from 'react'

const DrumPad = ({ drumKey, song, handleClick, url, power }) => {
    return (
      <div>
        {
          power ? <button className="drum-pad my-btn box-shadow-buttons" id={song} onClick={(e)=>{handleClick(drumKey, song)}}>
        {drumKey}
        <audio className="clip" src={url} id={drumKey}/>
        </button> :  <button className="drum-pad my-btn box-shadow-buttons" id={song} onClick={(e)=>{handleClick(drumKey, song)}} disabled>
            {drumKey}
            <audio className="clip" src={url} id={drumKey}/>
        </button>
        }
      </div>
    );
};

const DrumMachine = () => {

  const firstSoundsGroup = {
      drumPads: [
          {
              "key": "Q",
              "song": "Heater-1",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          },
          {
              "key": "W",
              "song": "Heater-2",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          },
          {
              "key": "E",
              "song": "Heater-3",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          },
          {
              "key": "A",
              "song": "Heater-4",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          },
          {
              "key": "S",
              "song": "Heater-6",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          },
          {
              "key": "D",
              "song": "Dsc_Oh",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          },
          {
              "key": "Z",
              "song": "Kick_n_Hat",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          },
          {
              "key": "X",
              "song": "RP4_KICK_1",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          },
          {
              "key": "C",
              "song": "Cev_H2",
              "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          }
      ],
     
      currentSongText: '',
  };

  const secondSoundsGroup = [
    {
      
      "key": 'Q',
      "song": 'Chord-1',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      "key": 'W',
      "song": 'Chord-2',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      "key": 'E',
      "song": 'Chord-3',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      
      "key": 'A',
      "song": 'Shaker',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      
      "key": 'S',
      "song": 'Open-HH',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      
      "key": 'D',
      "song": 'Closed-HH',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      
      "key": 'Z',
      "song": 'Punchy-Kick',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      
      "key": 'X',
      "song": 'Side-Stick',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      
      "key": 'C',
      "song": 'Snare',
      "url": 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];


  const [state, setState] = useState(firstSoundsGroup);
  // const [valueRanche, setValueRanche] = useState(100);
  const [power, setPower] = useState(false);
  const [bank, setBank] = useState(false);

  const handleButtonClick=(key, song)=>{
    setState({
      ...state,
      currentSongText: song
    })
    console.log(key)
    const audio = document.getElementById(key);
    
    audio.currentTime = 0;
    audio.play();
  }





  const handleChangeCheckBox=(e)=>{

    setPower(!power)
    
  }

  const handleChangeBank=(e)=>{
    setBank(!bank)
    
  }

  

  return (

    <div id="drum-machine" className='drum-machine'>

        <div className='display-drum'>
            
            <div className='buttons-group'>
              
              {
                !bank && state.drumPads.map((item)=>{

                  return(
                    <DrumPad
                      song={item.song}
                      key={item.key}
                      drumKey={item.key}
                      handleClick={handleButtonClick}
                      url={item.url}
                      power={power}
                    />
                  )
                  })
              }

              {
                bank && secondSoundsGroup.map((item)=>{

                return(
                  <DrumPad
                    song={item.song}
                    key={item.key}
                    drumKey={item.key}
                    handleClick={handleButtonClick}
                    url={item.url}
                    power={power}
                  />
                )
                })
              }
              
              
              
            </div>

            <div className='controls-container'>
              <h4 className='text-center'>Power</h4>
              <div className="form-check form-switch w-100  align-middle" style={{paddingLeft:"9.5em"}}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={(e)=>{handleChangeCheckBox(e)}}/>
              </div>

              
              <div id='display-drum' className='my-3 text-center'>
                {/* <span>  {valueRanche}     </span> */}
                <span>{state.currentSongText}</span>
              </div>

              {/* <div className='volume.slider'>
                <input value={valueRanche} type="range" max={100} min={0} step={1} className="form-range" onChange={(e)=>{handleChangeRange(e)}} />
              </div> */}

              <h4 className='text-center'>Bank</h4>
              <div className=" text-center w-100  align-middle">
                {
                  bank ? <button className='btn btn-success'  onClick={(e)=>{handleChangeBank(e)}}>smooth Piano Kit</button> :
                  <button className='btn btn-warning' onClick={(e)=>{handleChangeBank(e)}} >Heater Kit</button>
                }
              </div>
            </div>
        </div>

    </div>
  )
}

export default DrumMachine;