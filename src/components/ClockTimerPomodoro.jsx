import React, { useState, useEffect } from 'react';
import arrows from "../Images/arrow-to-top.png";

const ClockTimerPomodoro = () => {

    const [breakTime, setBreakTime] = useState(5);
    const [sessionTime, setSessionTime] = useState(25);

    const [starting,setStarting] = useState(false);
    const [play,setPlay] = useState(false);


    // const [minutesSession] = useState(breakTime);
    // const [secondsSession] = useState(59);

    useEffect(() => {
        
        const interval = setInterval(() => {
            
            if(play === true){
                console.log("iterando")
                let session = sessionTime;
                if(!(session <= 1)){
                    setSessionTime(sessionTime - 1);
                }
            }
        }, 1000);
        
        return () => {
        clearInterval(interval);
        }
    }, [breakTime, sessionTime, play])

    const resetTime=()=>{

        setBreakTime(5);
        setSessionTime(25);

        setPlay(false);
        setStarting(false);
    }

    const start =()=> {

        if(play === false){

            setPlay(!play);
            setStarting(true)
        }
    }

    const pauseFunc = () => {
        setPlay(false);
        setStarting(false);
        
    }

    const incrementBreakTime = ()=>{

        let breakes = breakTime;

        if(!(breakes >= 60)){

            setBreakTime(breakTime + 1);
        }

        
    }

    const decrementBreakTime =()=>{

        let breakes = breakTime;

        if(!(breakes <= 1)){

            setBreakTime(breakTime - 1);
        }

        
    }

    const incrementSessionTime =()=>{

        let session = sessionTime;

        if(!(session >= 60)){

            setSessionTime(sessionTime + 1);
        }

        
    }


    const decrementSessionTime =()=>{

        let session = sessionTime;

        if(!(session <= 1)){

            setSessionTime(sessionTime - 1);
        }

        
    }
    


  return (
    <div className='clock-container'>
        <div className='pomodoro'>
            <h1 className='text-center'>Pomodoro</h1>
            
            <div className='controls-container-pomodoro'>
            <div className='break-control'>
                <h2 id="break-label" className='text-center mb-3'>Break Length</h2>

                <div className='text-center'>
                {
                    starting === false ? <button className='btn mx-1 butoons ' id="break-increment" onClick={(e)=> incrementBreakTime()}>
                    <img src={arrows} alt="arrows" className='arrows' />
                </button> : <button className='btn mx-1 butoons ' id="break-increment" disabled>
                    <img src={arrows} alt="arrows" className='arrows' />
                </button>
                }
                
                
                <span className='mx-3' id="break-length">{breakTime}</span>

                
                {
                    starting === false ? <button className='btn mx-1 butoons' id="break-decrement" onClick={(e)=> decrementBreakTime()}>
                    <img src={arrows} alt="arrows" className='arrows rotated-180' />
                </button> : <button className='btn mx-1 butoons' id="break-decrement" disabled>
                    <img src={arrows} alt="arrows" className='arrows rotated-180' />
                </button>
                }
                </div>
            </div>
            <div className='length-control'>
                <h2 id="session-label" className='text-center mb-3'>session length</h2>
                <div className='text-center'>

                {
                    starting === false ? <button className='btn mx-1 butoons' id="session-increment" onClick={(e)=> incrementSessionTime()}>
                    <img src={arrows} alt="arrows" className='arrows' />
                </button> : <button className='btn mx-1 butoons' id="session-increment" disabled>
                    <img src={arrows} alt="arrows" className='arrows' />
                </button>
                }
                
                <span className='mx-3' id="session-length">{sessionTime}</span>

                {
                    starting === false ? <button className='btn mx-1 butoons' id="session-decrement" onClick={(e)=> decrementSessionTime()}>
                    <img src={arrows} alt="arrows" className='arrows rotated-180' />
                </button> : <button className='btn mx-1 butoons' id="session-decrement" disabled>
                    <img src={arrows} alt="arrows" className='arrows rotated-180' />
                </button>
                }

                
                </div>
            </div>
            </div>

            <div id='timer-wrapper' className='mx-auto'>
                <h1 id="timer-label">Session</h1>

                <h2 id="time-left">{sessionTime} : 00</h2>
            </div>


            <div className='time-controls text-center'>
                <div className='mt-3'>
                    <button className='btn fs-1' id="start_stop" onClick={(e)=> start()}>
                        <i className="bi bi-play-circle"></i>
                    </button>
                    <button className='btn fs-1' onClick={(e)=> pauseFunc()}>
                        <i className="bi bi-pause-btn"></i>
                    </button>
                    <button className='btn fs-1' id="reset" onClick={(e)=> resetTime()}>
                        <i className="bi bi-arrow-clockwise"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClockTimerPomodoro;