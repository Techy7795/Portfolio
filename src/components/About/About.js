import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/me.svg"
            alt="me"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Sai Krishna</strong>. A forward-thinking graduate specializing in Computers and Data Science. Currently, I am completing a B.Tech in Computer Science and Engineering at SRKR Engineering College and a BSc in Data Science and Applications at IIT Madras.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInRight">
            My journey into the world of technology began with a strong passion for data-driven solutions, which led me to pursue the Data Science program. I was eagerly waiting for the opportunity to showcase my skills.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            I am eager to delve into cutting-edge technologies such as machine learning and deep learning, which are propelled by data.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInRight" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
