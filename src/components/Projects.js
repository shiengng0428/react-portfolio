import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/elasticSearch.png";
import projImg2 from "../assets/img/better queue.png";
import projImg3 from "../assets/img/online shopping website.png";
import projImg4 from "../assets/img/air_quality.png";
import projImg5 from "../assets/img/expenses_trracker.png";
import projImg6 from "../assets/img/backend Development.png";
import projImg7 from "../assets/img/coming soon.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Elastic Search",
      description: "Popular Search Technology",
      imgUrl: projImg,
    },
    {
      title: "Better Queue",
      description: "Npm Queue Package",
      imgUrl: projImg2,
    },
    {
      title: "HTML Website",
      description: "Online Shopping Website",
      imgUrl: projImg3,
    },
    {
      title: "Air Quality Prediction",
      description: "Python Air Quality Prediction",
      imgUrl: projImg4,
    },
    {
      title: "Android Application",
      description: "Java Android Expenses Tracker Application",
      imgUrl: projImg5,
    },
    {
      title: "Backend Development",
      description: "Design & Development",
      imgUrl: projImg6,
    }
  ];

  const project_tab_2 = [
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg7,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg7,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg7,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg7,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg7,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg7,
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    My portfolio includes projects that demonstrate my proficiency in development!
                  </p>
                  <p>
                    Can search for personnel projects in <a href="https://github.com/shiengng0428">GitHub</a>.
                  </p>

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
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            project_tab_2.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            project_tab_2.map((project, index) => {
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
