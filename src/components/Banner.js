import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/hacker.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Backend Developer", "Software Engineer", "Data Analyst"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>

                  <h1>{`Hi! I'm Shi Eng`}</h1>

                  <h1>{ } <span className="txt-rotate" dataPeriod="100000000000" data-rotate='[ "Backend Developer", "Software Engineer", "Data Analyst" ]'><span className="wrap">{text}</span></span></h1>

                  <p>Hi, my name is Ng Shi Eng and I am a student at Tunku Abdul Rahman University of Management and Technology (TAR UMT), studying for a Bachelor's degree in Computer Science with a focus on Software Engineering.
                    As a newbie in this field, I am eager to gain experiences and further my knowledge in technology and software development. I am known among my friends and peers as a good listener and caring person, and I believe in being supportive and empathetic towards those around me. I am excited to be part of this community and hope to make valuable contributions through my studies and interactions with others. I am a dedicated and hardworking individual, always willing to learn and improve.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img
                    src={headerImg}
                    alt="Header Img"
                    style={{ width: '125%', height: 'auto' }} // Adjust the width and height as needed
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
