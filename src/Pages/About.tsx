import React from 'react'
import { Card, Button, Row, Col} from "react-bootstrap";
import mission from '../img/mission.png';
import vision from '../img/vision.png';
import pencils from '../img/pencils.png';
import Tone from '../img/Tone.png';
import Ttwo from '../img/Ttwo.png';
import Tthree from '../img/Tthree.png';
import Tfour from '../img/Tfour.png';
import Tfive from '../img/Tfive.png';
import Tsix from '../img/Tsix.png';

const About: React.FC = () => {
  return (
    <>
    <div>
      <main>
      <div>
      <Row className="mt-5">
        <Col> 
              <h2> About The School </h2>
              <p><span></span></p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Sit nisi in sagittis arcu pellentesque ac nam tellus. Etiam sed
                  donec proin nec. Lorem leo ac luctus vulputate ultricies tincidunt.
                   Commodo at fermentum rhoncus eget. Id sollicitudin dui velit 
                   ipsum massa volutpat sed metus. Duis vel, purus in sed faucibus 
                   risus, erat. Tempor, enim, est eget rutrum. Bibendum faucibus luctus 
                   mauris egestas tellus porttitor volutpat amet.Mattis mauris egestas 
                   ullamcorper dolor metus. Egestas lectus dis amet orci tellus aliquam sed. 
                   Vel, bibendum dolor sed ullamcorper volutpat pellentesque. Amet nascetur id 
                   sed dictum eleifend congue commodo. Pellentesque cras tempor varius lacus eu.
                  Vulputate id ut nisl vestibulum vel. Blandit leo dui purus at. Aliquet sed sagittis
                  commodo, varius condimentum..
              </p></Col>
        <Col><img
          className="d-block w-100"
          src={pencils}
          alt="pencils"
        /></Col>
      </Row>
    </div>
    <Row className="mt-5 mb-5 text-center">
      <Col className="mt-5"> <h4 style={{color: "#6A1724" }}>Our Vision</h4> 
      <p><span></span></p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Sit nisi in sagittis arcu pellentesque ac nam tellus. Etiam sed
                  donec proin nec. Lorem leo ac luctus vulputate ultricies tincidunt. 
              </p>
      </Col>
      <Col><img
          className="d-block w-100"
          src={vision}
          alt="mission"
        /></Col>
    </Row>
    <Row className="mt-5 mb-5 text-center">
      <Col className="mt-5"> <h4 style={{color: "#6A1724" }}>Our Mission</h4> 
      <p><span></span></p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Sit nisi in sagittis arcu pellentesque ac nam tellus. Etiam sed
                  donec proin nec. Lorem leo ac luctus vulputate ultricies tincidunt. 
              </p>
      </Col>
      <Col><img
          className="d-block w-100"
          src={mission}
          alt="mission"
        />
        </Col>
    </Row>
    <div className='mt-5' style={{backgroundColor: "#F4B92D" }}>
    <div  className="text-center mb-3 mt-3 pt-3" > <h2 style={{color:"#6A1724"}}>Meet the Trustee and
    Members of the Governing Boards</h2> </div>
    <div>
      <Row className="px-5">
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={Tone} alt="Ttwo"  className="rounded"/>
              <Card.Body>
                <Card.Title>Soyemi Emmanuel</Card.Title>
                <div>President, Board of Trustee</div>
             </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={Ttwo} alt="Ttwo"  className="rounded"/>
              <Card.Body>
                <Card.Title>David Tobiloba</Card.Title>
                <div>Chairman, Governing Body</div>
             </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={Tthree} alt="pharm"  className="rounded"/>
              <Card.Body>
                <Card.Title>Sharon Peters</Card.Title>
                <div>Member</div>
             </Card.Body>
            </Card>
        </Col>
      </Row>

      <Row className="px-5">
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={Tfour} alt="Tfour"  className="rounded"/>
              <Card.Body>
                <Card.Title>Soyemi Emmanuel</Card.Title>
                <div>Member</div>
             </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={Tfive} alt="Tfive"  className="rounded"/>
              <Card.Body>
                <Card.Title>David Tobiloba</Card.Title>
                <div>Member</div>
             </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={Tthree} alt="pharm"  className="rounded"/>
              <Card.Body>
                <Card.Title>Sharon Peters</Card.Title>
                <div>Member</div>
             </Card.Body>
            </Card>
        </Col>
      </Row>
    </div>



    </div>
      </main>
    </div>
    </>
  )
}

export default About;