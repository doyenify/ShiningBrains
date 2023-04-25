import React from 'react';
import { Card, Row, Col} from "react-bootstrap";
import Banner from '../img/Yellow banner.png';
import Gone from '../img/Gone.png';
import Gtwo from '../img/Gtwo.png';
import Gthree from '../img/Gthree.png';
import Gfour from '../img/Gfour.png';
import Gfive from '../img/Gfive.png';
import Gsix from '../img/Gsix.png';
import Gseven from '../img/Gseven.png';
import Geight from '../img/Geight.png';

const Gallery: React.FC = () => {
  return (
    <>
    <div>
    <main>
    <Card className="mt-5">
    <img src={Banner} alt="fluid" width="" height="200" className="rounded"/>
      <Card.ImgOverlay>
        <br></br>
        <Card.Title className="text-center"><h3>Latest Happening in Our school</h3>
        
        <h1 style={{color:"#6A1724"}}> Our Gallery</h1>
        </Card.Title>
        
        <Card.Text className="mt-3">
          {/* <div className= "text-center">  Our Gallery </div> */}

        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    
    <div>
    <Row className="mt-5">
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

    <Row className="mt-3">
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
    </main>
    </div>
    </>
  )
}

export default Gallery;