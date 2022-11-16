
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import HomeImage from "../Images/stay-at-home.png"
import QuoteImage from "../Images/citas.png"
import MarkDown from "../Images/survey.png"
import DrumMachine from "../Images/drum-kit.png"
import Calculator from "../Images/calculate.png"
import Pomodoro from "../Images/tecnica-pomodoro.png"

function NavBar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed='top'>
          <Container fluid>
            <Navbar.Brand>FCC Projects</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  FCC Projects
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link>
                    <Link to="/" className='link-navbar-component'>
                        <img src={HomeImage} alt="Home_image" className='image-navLink'/>
                        Home
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/quote" className='link-navbar-component'>
                        <img src={QuoteImage} alt="Home_image" className='image-navLink'/>
                        Quotes App
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/markdown" className='link-navbar-component'>
                        <img src={MarkDown} alt="Home_image" className='image-navLink'/>
                        MarkDown
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/drum" className='link-navbar-component'>
                        <img src={DrumMachine} alt="Home_image" className='image-navLink'/>
                        Drum Machine
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/calculator" className='link-navbar-component'>
                        <img src={Calculator} alt="Home_image" className='image-navLink'/>
                        Calculator
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/pomodoro" className='link-navbar-component'>
                        <img src={Pomodoro} alt="Home_image" className='image-navLink'/>
                        Pomodoro
                    </Link>
                  </Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


export default NavBar;