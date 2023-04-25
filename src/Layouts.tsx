import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Container, } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
const Layout: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <main>
        <Container>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="About" element={<About/>} /> 
          <Route path="Events" element={<Events/>} />
          <Route path="Gallery" element={<Gallery/>} />
          <Route path="Blog" element={<Blog/>} />
          <Route path="Contact" element={<Contact/>} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
};
export default Layout;
