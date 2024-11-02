import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/human-resources.png";
import './styles.css'
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/adithyananuvala/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Adithyrao1"><img src={navIcon2} alt="" /></a>
                <a href="https://drive.google.com/file/d/1rI1Yncot264j4qaqXKjT20XcxS9xyJBU/view?usp=sharing"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Adithya Nanuvala</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
