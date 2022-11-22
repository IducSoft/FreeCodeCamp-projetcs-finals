import React, { useState, useEffect } from 'react';
import arrows from "../Images/arrow-to-top.png";

const ClockTimerPomodoro = () => {

    const [breakTime, setBreakTime] = useState(5);
    const [breakSecondTime, setBreakSecondTime] = useState(0);
    const [breakStartingTime, setBreakStartingTime] = useState(false);
    

    const [starting,setStarting] = useState(false);
    const [play,setPlay] = useState(false);


    
    
    const [sessionTime, setSessionTime] = useState(25);
    const [secondsSession, setSecondsSession] = useState(0);

    

    const establecerSession=(minutes, second)=>{

        let min = minutes,
            sec = second;
        
        

            if(second <=60){

                sec --;
            }

        if(second === 0){

            min--;
            sec = 59;
        }
        

        return{

            minutos:min,
            segundos:sec
        }
    }

    useEffect(() => {
        
        const interval = setInterval(() => {
            
            if(play === true){
                console.log("iterando")
                
                if(sessionTime === 0 && secondsSession === 0){

                    setPlay(false);
                    setBreakStartingTime(true);
                    return
                }

                let {minutos, segundos} = establecerSession(sessionTime, secondsSession);

                setSessionTime(minutos);
                setSecondsSession(segundos);
            }

            if(breakStartingTime === true){

                if(breakTime === 0 && breakSecondTime === 0){

                    // setPlay(true);
                    // setBreakStartingTime(false);
                    // setSessionTime(copySessionTime);
                    resetTime()
                    return
                }

                let {minutos, segundos} = establecerSession(breakTime, breakSecondTime);
                setBreakSecondTime(segundos);
                setBreakTime(minutos)
            }



        }, 1000);
        
        return () => {
        clearInterval(interval);
        }
    }, [breakTime, breakSecondTime, sessionTime, play, secondsSession, breakStartingTime])

    const resetTime=()=>{

        setBreakTime(5);
        setBreakSecondTime(0)
        setSessionTime(25);
        setSecondsSession(0);
        setBreakStartingTime(false)

        setPlay(false);
        setStarting(false);
    }

    const start =()=> {

        if(play === false){

            setPlay(!play);
            setStarting(true)
            breakStartingTime(true)
        }
    }

    const pauseFunc = () => {
        setPlay(false);
        setStarting(false);
        breakStartingTime(false)
        
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

            {breakStartingTime === false ? (

                <div id='timer-wrapper' className='mx-auto'>
                <h1 id="timer-label">Session</h1>

                <h2 id="time-left">{sessionTime} :  {secondsSession === 0 ? "00" : secondsSession}</h2>
                </div>
            ) :(

                <div id='timer-wrapper' className='mx-auto'>
                <h1 id="timer-label">Break</h1>

                <h2 id="time-left">{breakTime} :  {breakSecondTime === 0 ? "00" : breakSecondTime}</h2>
                </div>
            )}

            


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