import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Progre() {
    const skills = [
        { name: 'HTML', value: 100 },
        { name: 'CSS', value: 90 },
        { name: 'JavaScript', value: 75 },
        { name: 'PHP', value: 80 },
        { name: 'WordPress/CMS', value: 90 },
        { name: 'Photoshop', value: 55 },
      ];
    
  return (
    <div>
        <section id="skills" className="skills section text-center my-5 bg-light">
      <Container className="section-title" data-aos="fade-up">
        <span>Our Skills</span>
        <p></p>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="skills-content">
          {skills.map((skill, index) => (
            <Col lg={6} key={index}>
              <div className="progress">
                <span className="skill">
                 {skill.name}<i className="val">{skill.value}%</i>
                </span>
                <ProgressBar now={skill.value}  />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
      
    </div>
  )
}

export default Progre
