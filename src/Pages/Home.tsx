import React from 'react';
import { Card, Button, Row, Col} from "react-bootstrap";
import Sliderone from '../img/Sliderone.png';
import Slidertwo from '../img/Slidertwo.jpg';
import Sliderthree from '../img/Sliderthree.jpg';
import Gone from '../img/Gone.png';
import Gtwo from '../img/Gtwo.png';
import Gthree from '../img/Gthree.png';
import Gfour from '../img/Gfour.png';
import Gfive from '../img/Gfive.png';
import Gsix from '../img/Gsix.png';
import Gseven from '../img/Gseven.png';
import Geight from '../img/Geight.png';
import kidone from '../img/kidone.png';
import principal from '../img/principal.png';
import Carousel from 'react-bootstrap/Carousel';

const Home: React.FC = () => {
  return (
    <>
    <div>
      <main>
    <Carousel className="mt-5">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Sliderone}
          alt="First slide"
        />
        <Carousel.Caption> 
          <h3>Welcome to  Shining Brains</h3>
          <p>Our mission is to provide world-class education. We inculcate high moral 
             and ethical values into our students as we prepare them for lifelong
             learning and service and fulfilment</p>
             <div className="text-center mt-5 roundec" >
             <Button href="/Contact" style={{ backgroundColor:"#F4B92D"}}> 
             <h5 style={{ color:"#6A1724"}}>Request Application Form</h5></Button>
             </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Slidertwo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Life Long Learner</h3>
          <p>Readers are learners, We learn to before we earn. 
          At Shining Brains, we raise life long learners</p>
          <div className="text-center mt-5 roundec" >
             <Button href="/Contact" style={{ backgroundColor:"#F4B92D"}}>
             <h5 style={{ color:"#6A1724"}}>Request Application Form</h5></Button>
             </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Sliderthree}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Learning is Progressive</h3>
          <p>
            The essence of education is to provide critical thinking
          </p>
          <div className="text-center mt-5 roundec" >
             <Button href="/Contact" style={{ backgroundColor:"#F4B92D"}}> 
             <h5 style={{ color:"#6A1724"}}>Request Application Form</h5></Button>
             </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div>
      <Row className="mt-5">
        <Col> 
              <h2> An  Welcome Address </h2>
              <h2> From the Principal</h2>
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
          src={principal}
          alt="principal"
        /></Col>
      </Row>
    </div>

    <div>
      <Row className='text-center mt-5'>
      <h2> Quality Education For Your Children </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et malesuada
         feugiat eget. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli </p>
      </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={kidone} alt="kidone"  className="rounded"/>
              <Card.Body>
                <Card.Title>Learning Never Stops</Card.Title>
                <Card.Text>
                <p>
                Our pharm solution affords patients easy access
                to prescription medications from our online retail pharmacy
                </p>
                </Card.Text>
                <Button style={{ backgroundColor: "#6A1724"}}>Read More</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={kidone} alt="kidone"  className="rounded"/>
              <Card.Body>
                <Card.Title>Learning Never Stops</Card.Title>
                <Card.Text>
                <p>
                Our pharm solution affords patients easy access
                to prescription medications from our online retail pharmacy
                </p>
                </Card.Text>
                <Button style={{ backgroundColor: "#6A1724"}}>Read More</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={kidone} alt="pharm"  className="rounded"/>
              <Card.Body>
                <Card.Title>Learning Never Stops</Card.Title>
                <Card.Text>
                <p>
                Our pharm solution affords patients easy access
                to prescription medications from our online retail pharmacy
                </p>
                </Card.Text>
                <Button style={{ backgroundColor: "#6A1724"}}>Read More</Button>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </div>
    <div>
    <Row className='text-center mt-5'>
      <h2> Our Gallery </h2>
      <p>Just a sneak peek at what we have been to </p>  
    </Row>
    <Row>
        <Col> <img className="d-block w-100" src={Gone} alt="Galleryone"/> </Col>
        <Col> <img className="d-block w-100" src={Gtwo} alt="Gallerytwo"/> </Col>
        <Col> <img className="d-block w-100" src={Gthree} alt="Gallerythree"/> </Col>
        <Col> <img className="d-block w-100" src={Gfour} alt="Galleryfour"/> </Col>
    </Row>
    <Row className="mt-3">
        <Col> <img className="d-block w-100" src={Gfive} alt="Galleryfive"/> </Col>
        <Col> <img className="d-block w-100" src={Gsix} alt="Galleryfive"/> </Col>
        <Col> <img className="d-block w-100" src={Gseven} alt="Galleryseven"/> </Col>
        <Col> <img className="d-block w-100" src={Geight} alt="Galleryeight"/> </Col>
    </Row>
    </div>
    <div className="text-center mt-5 roundec" >
    <Button href="/Gallery" style={{ backgroundColor: "#6A1724"}}>Check Our Gallery </Button>
    </div>
 
    <div className='mt-5' style={{backgroundColor: "#F4B92D" }}>
    <div  className="text-center mb-3 pt-3" > <h2 style={{color:"#6A1724"}}>Testimonial</h2> </div>
     
    <div>
      <Row className="px-5">
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={kidone} alt="pharm"  className="rounded"/>
              <Card.Body>
              <Card.Text>
                <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tincidunt sollicitudin quis nibh pellentesque sed id.”
                </p>
                </Card.Text>
                <Card.Title>Soyemi Emmanuel</Card.Title>
                <div>Parent</div>
             </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={kidone} alt="kidone"  className="rounded"/>
              <Card.Body>
              <Card.Text>
                <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tincidunt sollicitudin quis nibh pellentesque sed id.”
                </p>
                </Card.Text>
                <Card.Title>David Tobiloba</Card.Title>
                <div>Student</div>
             </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }} className="mb-3">
            <img src={kidone} alt="pharm"  className="rounded"/>
              <Card.Body>
              <Card.Text>
                <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Tincidunt sollicitudin quis nibh pellentesque sed id.”
                </p>
                </Card.Text>
                <Card.Title>Sharon Peters</Card.Title>
                <div>Student</div>
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

export default Home;