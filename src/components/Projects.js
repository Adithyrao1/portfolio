import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/zinger.png";
import projImg2 from "../assets/img/location.png";
import projImg3 from "../assets/img/fac_rec.png";
import projImg4 from "../assets/img/liver_d.png";
import projImg5 from "../assets/img/target.jpg";
import projImg6 from "../assets/img/blinkit.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Zinger ",
      description: "Food Delivery Platform",
      imgUrl: projImg1,
    },
    {
      title: "Real Time Location Tracker",
      description: "Collaborative Live Location Sharing Web App",
      imgUrl: projImg2,
    },
    {
      title: "Attendance Tracking System",
      description: "Facial Recognition based Attendance tracker",
      imgUrl: projImg3,
    },
    {
      title: "Liver Disease Prediction",
      description: "Predicting the presence of Liver Disease with multiple machine learning algorithms and fine tuning to optimize model performance and improve accuracy",
      imgUrl: projImg4,
    },
    {
      title: "Target Sales Analysis",
      description: "Conducted comprehensive sales analysis on Target Store's 2016–2028 dataset, focusing on identifying revenue-driving factors and seasonal sales trends. Leveraged data visualization and statistical modeling to provide actionable insights, optimizing inventory planning and strategic sales initiatives.",
      imgUrl: projImg5,
    },
    {
      title: "Blinkit Sales Analysis Dashboard PowerBI",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
