import React from 'react';
import arrows from "../Images/arrow-to-top.png"

const ClockTimerPomodoro = () => {


  return (
    <div className='clock-container'>
        <div className='pomodoro'>
            <h1 className='text-center'>Pomodoro</h1>
            
            <div className='controls-container'>
            <div className='break-control'>
                <h2 id="break-label" className='text-center mb-3'>Break Length</h2>

                <div className='text-center'>
                <button className='btn mx-1 butoons ' id="break-increment">
                    <img src={arrows} alt="arrows" className='arrows' />
                </button>
                
                <span className='mx-3' id="break-length">5</span>

                <button className='btn mx-1 butoons' id="break-decrement">
                    <img src={arrows} alt="arrows" className='arrows rotated-180' />
                </button>
                </div>
            </div>
            <div className='length-control'>
                <h2 id="session-label" className='text-center mb-3'>session length</h2>
                <div className='text-center'>
                <button className='btn mx-1 butoons' id="session-increment">
                    <img src={arrows} alt="arrows" className='arrows' />
                </button>
                <span className='mx-3' id="session-length">25</span>

                <button className='btn mx-1 butoons' id="session-decrement">
                    <img src={arrows} alt="arrows" className='arrows rotated-180' />
                </button>
                </div>
            </div>
            </div>

            <div id='timer-wrapper' className='mx-auto'>
                <h1 id="timer-label">Session</h1>

                <h2 id="time-left">25 : 00</h2>
            </div>


            <div className='time-controls text-center'>
                <div className='mt-3'>
                    <button className='btn fs-1' id="start_stop">
                    <i class="bi bi-play-circle"></i>
                    </button>

                    <button className='btn fs-1'>
                    <i class="bi bi-pause-btn"></i>
                    </button>

                    <button className='btn fs-1' id="reset">
                    <i class="bi bi-arrow-clockwise"></i>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ClockTimerPomodoro;