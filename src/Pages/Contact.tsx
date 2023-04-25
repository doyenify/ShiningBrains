import React from 'react';
import {Card, Row, Col, Form, Button} from "react-bootstrap";
import Banner from '../img/Yellow banner.png';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Yup.object().shape({
  name: Yup.string().required(), 
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.number().required().positive().integer(), 
  message: Yup.string().required(), 
});
const Contact: React.FC = () => {
const notify = () => toast("We have recieved your message, We would get back to you shortly!");
  
  const handleSubmit=(name:string, email:string, number:string, message:string)=>{
      console.log(email)
      // e.preventDefault();
      const data ={
        Name:name,
        Email:email,
        Number:number,
        Message:message,
      }
        axios.post('https://sheet.best/api/sheets/01bed241-fce6-4ac3-8da4-c227f30cc851', data). then ((response)=>{
        console.log(response);
        }) 
      }
  return (
    <>
    <div>
      <main>
        <div>
          <Card className="mt-5">
            <img src={Banner} alt="fluid" width="" height="200" className="rounded"/>
             <Card.ImgOverlay>
             <br></br>
             <Card.Title className="text-center"><h3>Get in touch with us</h3>
             <h1 style={{color:"#6A1724"}}>Give Your Child World Class Education</h1>
             </Card.Title>
             </Card.ImgOverlay>
           </Card>
        </div>

        <div>
      <Row>
      <Col className="mt-5 px-5">
     <div>
    <h5> Office</h5>
    <div>Feel free to contact us or visit us at our office</div>
     <div className="px-5">
      <p>72 kuku adebola, Isale General,  ilesa, Nigeria 
      <br/> 
      090789075435, 089054644324, 78906535245
      <br/>  
      info@shininglight.com 
      <br/> 
      Week Days: 8:00am-4:00pm
      </p>
     </div>
     <h5> Let's Get Social</h5>
     <div>
     <p>We'd love to hear from you on our social network</p>
     </div>
     <br></br>
     <div></div>
    </div>
    </Col>
    <Col className="mt-5">
            <Formik
      validationSchema={schema}
      onSubmit={(values, actions) => handleSubmit(values.name, values.email, values.number, values.message)
      // console.log(values)
      }
      initialValues={{
        name: '',
        email: '',
        number: '',
        message: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,      
        errors,

      }) => (
    
      <Form noValidate onSubmit={handleSubmit} style={{color: "#6A1724"}}>
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Full Name</Form.Label>
        <Form.Control 
         type="text"
         placeholder="Enter your fullname"
         name="name"
         value={values.name}
         onChange={handleChange}
         isInvalid={!!errors.name}
       />
       <Form.Control.Feedback type="invalid">
         {errors.name}
       </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
         type="text"
         placeholder="Enter your email address"
         name="email"
         value={values.email}
         onChange={handleChange}
         isInvalid={!!errors.email}
       />
       <Form.Control.Feedback type="invalid">
         {errors.email}
       </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control 
         type="text"
         placeholder="Enter your phone number"
         name="number"
         value={values.number}
         onChange={handleChange}
         isInvalid={!!errors.number}
       />
       <Form.Control.Feedback type="invalid">
         {errors.number}
       </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Message</Form.Label>
        <Form.Control 
        as="textarea" 
        placeholder="Write your message" 
        rows={5} 
        name="message"
        value={values.message}
        onChange={handleChange}
        isInvalid={!!errors.message}
       />
       <Form.Control.Feedback type="invalid">
         {errors.message}
       </Form.Control.Feedback>
      </Form.Group>
       <Button style={{ backgroundColor: "#6A1724"}}  type="submit" onClick={notify}>Submit </Button>
      {/* <Button variant="success" type="submit" onClick={notify}>Submit </Button> */}
      <ToastContainer />
    </Form>
    )}
    </Formik>
   </Col>
  </Row>
</div>
</main>
</div>
</>  
  )
}
export default Contact;