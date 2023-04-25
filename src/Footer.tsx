import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Facebook, Twitter,Youtube} from 'react-bootstrap-icons';

// import { Redirect } from "react-router-dom";
// import {
//   Container,
//   Navbar,
//   Nav
//   // Form,
//   // FormControl,
//   // Button
// } from "react-bootstrap";


const Footer: React.FC = () => {
  return (
    <div>
  <main role="main" className="container">
  <div className="mt-5" style={{backgroundColor: "14574F"}}>
  <div className="my-3 p-3 rounded shadow-sm">
    <Row className="mb-5">

      <Col lg={3} className="text-center" ><h6 className="text-white">Shining Brain</h6>
          <p><span></span></p>
          <div className="text-white">61, community road, Akoka, Yaba, Lagos</div>

      </Col>
      <Col sm={3} className="text-center "><h6 className="text-white"> Main Navigation</h6>
      <p><span></span></p>
      <div  className="text-white">Home</div>
      <p><span></span></p>
      <div  className="text-white">About</div>
      <p><span></span></p>
      <div className="text-white">Gallery</div>
      <p><span></span></p>
      <div  className="text-white">Events</div>
      <p><span></span></p>
      <div className="text-white">Blog</div>
      </Col>
      <Col sm={3} className="text-center"><h6 className="text-white"> Social Media</h6>
      <p><span></span></p>
      <div className="text-white"><Facebook/> </div>
      <p><span></span></p>
      <div className="text-white"><Twitter/></div>
      <p><span></span></p>
      <div className="text-white"><Youtube/> </div>
      </Col>
    
      <Col sm={3} className="text-center "><h6 className="text-white"> Contact</h6>
      <p><span></span></p>
      <div className="text-white">08034657796</div>
      <p><span></span></p>
      <div className="text-white">78697840600</div>
      <p><span></span></p>
      <div className="text-white">info@shiningbrain.com</div>
      </Col>
    </Row>
    </div>
     </div>
      </main>
      </div>
     
  );
};
export default Footer;
