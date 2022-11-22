import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import QuotesApp from './components/QuotesApp';
import MarkDownPreviewer from './components/MarkDownPreviewer';
import DrumMachine from './components/DrumMachine';
// import Calculator from './components/Calculator';
import Calculator from './components/CalculatorOther';
import ClockTimerPomodoro from './components/ClockTimerPomodoro';
import video from "./Images/pexels-cup-of-couple-8473762.mp4";
import { Link } from "react-router-dom";
// import { useMemo } from 'react';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/quote" element={<QuotesApp/>} />
      <Route exact path="/markdown" element={<MarkDownPreviewer/>} />
      <Route exact path="/drum" element={<DrumMachine/>} />
      <Route exact path="/calculator" element={<Calculator/>} />
      <Route exact path="/pomodoro" element={<ClockTimerPomodoro/>} />
    </Routes>
  </div>
  );
}

function Home() {

  

  const VideComponente =()=>{

    return(
      <video muted loop autoPlay src={video} type='video/mp4'>
      </video>
    )
  }

  

  return (
    <>
      <main className='mt-5 pt-5 text-center homePage' id='hero'>
        
        <div className='promo'>
          <div className='promo-inter'>
          <h1>Welcome to the homepage!</h1>
          <p>there are the mini projects for to obtain the FreeCodeCamp Certificaction!!</p>
          <Link className='btn btn-success' to="/quote">
            Get started
          </Link>
          </div>
        </div>

        <VideComponente/>

        <div className='capa'></div>
        
      </main>
      
    </>
  );
}




export default App;
