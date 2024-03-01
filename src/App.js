import Navbar from "./componets/Navbar/navbar";
import Intro from "./componets/Intro/intro";
import About from "./componets/About/about";
import Education from "./componets/Education/education";
import Contact from "./componets/Contact/contact";
import Footer from "./componets/Footer/footer";

function App () {
   return (
     <div className="App">
      <Navbar />
       <Intro />
      <About />
       <Education />
      <Contact />
      <Footer />

     </div>
   );
 }

 export default App; 



































































// // // import * as React from "react";
// // // import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
// // // import Navbar from "react-bootstrap/Navbar";
// // // import Container from "react-bootstrap/Container";
// // // import Row from "react-bootstrap/Row";
// // // import Col from "react-bootstrap/Col";
// // // import "bootstrap/dist/css/bootstrap.css";
// // // import Nav from "react-bootstrap/Nav";
// // // import Home from "./Home";
// // // import About from "./About";
// // // import Education from "./Education";
// // // import Contact from "./Contact";
// // // import API from "./API";
// // // import logo from '../../frontend/src/assets/background1.jpg'
// // // import './App.css'
// // // import Navbar from "./componets/Navbar/navbar";

// // // //import background2 from "../src/assets/background2.jpg"; 
// // // //import "bootstrap/dist/css/bootstrap.min.css";

// // // function App() {
// // //   return (
// // //     <div className="App">
     
// // //     <Router>
// // //     <Navbar bg="transparent"  data-bs-theme="transparent">
// // //     <Container>
          
// // //           <Navbar.Brand href="#home"><img src={logo} alt="logo" height={10} width={10} className="background"/>
// // //           </Navbar.Brand>
          
      
        
// // //           <Nav className="me-auto">
// // //             <Nav.Link as={Link} to={"/home"} className="text-decoration-none text-white"><b>Home</b></Nav.Link>
// // //             <Nav.Link as={Link} to={"/about"} className="text-decoration-none text-white"><b>About</b></Nav.Link>
// // //             <Nav.Link as={Link} to={"/education"} className="text-decoration-none text-white"><b>Education</b></Nav.Link>
// // //             <Nav.Link as={Link} to={"/contact"} className="text-decoration-none text-white"><b>Contact</b></Nav.Link>
// // //             <Nav.Link as={Link} to={"/api"} className="text-decoration-none text-white"><b>API</b></Nav.Link>
// // //           </Nav>
// // //         </Container>
// // //       </Navbar>
    
// // //     <Container className="mt-5">
// // //      <Row>
// // //       <Col md={12}>
// // //         <Routes>
// // //           <Route path="/home" element={<Home />}/>
// // //           <Route path="/about" element={<About />}/>
// // //           <Route path="/education" element={<Education />}/>
// // //           <Route path="/contact" element={<Contact />}/>
// // //           <Route path="/api" element={<API />}/>
// // //           </Routes>
// // //         </Col>
// // //      </Row>
// // //     </Container>



// // //     </Router>
// // //     </div>
// // //       );
// // //     }
 

// // // export default App;
