import React from 'react';
import { Card, Row, Col, Button} from "react-bootstrap";
import Banner from '../img/Yellow banner.png';
import Eventone from '../img/Eventone.png';
import Eventtwo from '../img/Eventtwo.png';
import Eventthree from '../img/Eventthree.png';
import Eventfour from '../img/Eventfour.png';
import Eventfive from '../img/Eventfive.png';
import EventSix from '../img/EventSix.png';

const Blog: React.FC = () => {
  return (
   <>
   <div>
    <main>
    <Card className="mt-5">
    <img src={Banner} alt="fluid" width="" height="200" className="rounded"/>
      <Card.ImgOverlay>
        <br></br>
        <Card.Title className="text-center"><h3>Latest Articles</h3>
        <h1 style={{color:"#6A1724"}}>Inspiring Articles By Our Students</h1>
        </Card.Title>
       </Card.ImgOverlay>
    </Card>

<div className="px-5">
<Row className="mt-5">
<Col>
<Card style={{ width: '18rem' }}  className="mb-3">
    <img src={Eventone} alt="Eventone"  className="rounded"/>
      <Card.Body>
        <Card.Title>Visitation</Card.Title>
        <Card.Text>
        <p>
        Our pharm solution affords patients easy access
        to prescription medications </p>
        <p> 12th Nov., 2022 </p>
        </Card.Text>
       <div className="text-center rounded" > <Button style={{ backgroundColor: "#6A1724"}}>Read More</Button> </div>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }} className="mb-3">
    <img src={Eventtwo} alt="Eventtwo"  className="rounded"/>
      <Card.Body>
        <Card.Title>Price Giving Day</Card.Title>
        <Card.Text>
        <p>
        Our pharm solution affords patients easy access
        to prescription medications  </p>
        <p> 15th Dec., 2022 </p>
        </Card.Text>
        <div className="text-center rounded" > <Button style={{ backgroundColor: "#6A1724"}}>Read More</Button> </div>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }} className="mb-3">
    <img src={Eventthree} alt="Eventthree"  className="rounded"/>
      <Card.Body>
        <Card.Title>Interhouse Sport</Card.Title>
        <Card.Text>
        <p>
        Our pharm solution affords patients easy access
        to prescription medications 
        </p>
        <p>4th Feb., 2022 </p>
        </Card.Text>
        <div className="text-center rounded" > <Button style={{ backgroundColor: "#6A1724"}}>Read More</Button> </div>
      </Card.Body>
    </Card>
</Col>
</Row>
</div>

<div className="px-5">
<Row className="mt-5">
<Col>
<Card style={{ width: '18rem' }} className="mb-3">
    <img src={Eventfour} alt="Eventfour"  className="rounded"/>
      <Card.Body>
        <Card.Title>Quiz Competition</Card.Title>
        <Card.Text>
        <p>
        Our pharm solution affords patients easy access
        to prescription medications 
        </p>
        <p> 3rd Nov., 2022</p>
        </Card.Text>
        <div className="text-center rounded" > <Button style={{ backgroundColor: "#6A1724"}}> Read More</Button> </div>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }} className="mb-3">
    <img src={Eventfive} alt="Eventfive"  className="rounded"/>
      <Card.Body>
        <Card.Title>Debate Competition</Card.Title>
        <Card.Text>
        <p>
        Our pharm solution affords patients easy access
        to prescription medications 
        </p>
        <p> 6th Dec., 2022</p>
        </Card.Text>
        <div className="text-center rounded" > <Button style={{ backgroundColor: "#6A1724"}}>Read More</Button> </div>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '18rem' }} className="mb-3">
    <img src={EventSix} alt="EventSix"  className="rounded"/>
      <Card.Body>
        <Card.Title>Cutural Day</Card.Title>
        <Card.Text>
        <p>
        Our pharm solution affords patients easy access
        to prescription medications 
        </p>
        <p>4th Oct., 2022</p>
        </Card.Text>
        <div className="text-center rounded" > <Button style={{ backgroundColor: "#6A1724"}}>Read More</Button> </div>
      </Card.Body>
    </Card>
</Col>
</Row>
</div>


</main>
</div>
</>

   )
}

export default Blog;