import React from "react";
import {
  AboutContainer,
  AboutBox,
  AboutImg,
  AboutDetail,
  AboutSection,
} from "./About.style.js";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";

function About() {
  return (
    <AboutSection>
      <h1>About US</h1>
      <AboutContainer>
        <AboutBox>
          <AboutImg>
            <img src={img2} />
          </AboutImg>
          <AboutDetail>
            <h2>Suraj Singh</h2>
            <br />
            <span>Web Designer</span>
          </AboutDetail>
        </AboutBox>
        <AboutBox>
          <AboutImg>
            <img src={img3} />
          </AboutImg>
          <AboutDetail>
            <h2>Karan Malhotra</h2>
            <br />
            <span>Web Designer</span>
          </AboutDetail>
        </AboutBox>
        <AboutBox>
          <AboutImg>
            <img src={img2} />
          </AboutImg>
          <AboutDetail>
            <h2>Suraj Singh</h2>
            <br />
            <span>Web Designer</span>
          </AboutDetail>
        </AboutBox>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
