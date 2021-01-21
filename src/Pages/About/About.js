import React from "react";
import { Section, AboutMe, Left, Ul } from "./About.style";
import Container from "../../components/Container";
import Placeholder from "../../components/Placeholder/Placeholder";
import { me, skills, aboutMe } from "../../config";

const About = () => {
  const { firstName, lastName, nickName, avatar } = me;
  return (
    <>
      <Section id="about">
        <Container>
          <Placeholder title="About Me"></Placeholder>
          <AboutMe>
            <Left>
              {aboutMe && aboutMe.length
                ? aboutMe.map((a, index) => <p key={index}>{a}</p>)
                : ""}
              <p>Here are a few technologies I've been working with:</p>
              <Ul>
                {skills && skills.length
                  ? skills.map((skill, index) => (
                      <li key={index}>
                        <span className="icon">▹</span>
                        <span>{skill}</span>
                      </li>
                    ))
                  : ""}
              </Ul>
            </Left>
            <div className="snake">
              <img
                src={avatar ?? ""}
                alt={firstName + " " + lastName ?? nickName}
              />
            </div>
          </AboutMe>
        </Container>
      </Section>
    </>
  );
};

export default About;
