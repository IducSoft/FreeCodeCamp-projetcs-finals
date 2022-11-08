import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import QuotesApp from './components/QuotesApp';
import MarkDownPreviewer from './components/MarkDownPreviewer';
import DrumMachine from './components/DrumMachine';
import Calculator from './components/Calculator';


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
    </Routes>
  </div>
  );
}

function Home() {
  return (
    <>
      <main className='mt-5 pt-5 text-center'>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        
      </main>
      
    </>
  );
}




export default App;
