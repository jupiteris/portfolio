import React from "react";
import { Section, AboutMe, Left, Ul } from "./About.style";
import Container from "../../components/Container";
import Placeholder from "../../components/Placeholder/Placeholder";
import { me, skills, aboutMe } from "../../config";

const About = () => {
  const {
    firstName,
    lastName,
    nickName,
    country,
    shortTitle,
    city,
    avatar,
  } = me;
  return (
    <>
      <Section>
        <Container>
          <Placeholder title="About Me"></Placeholder>
          <AboutMe id="about">
            <Left>
              <p>
                Hello! I'm {firstName}, a {shortTitle} based in{" "}
                {city + ", " + country}.
              </p>
              {aboutMe && aboutMe.length
                ? aboutMe.map((a, index) => <p key={index}>{a}</p>)
                : ""}
              <p>
                Here are a few technologies I've been working with recently:
              </p>

              <Ul>
                {skills && skills.length
                  ? skills.map((skill, index) => <li key={index}>{skill}</li>)
                  : ""}
              </Ul>
            </Left>

            <img
              src={avatar ?? ""}
              alt={firstName + " " + lastName ?? nickName}
              style={{ width: 360, height: 360 }}
            />
          </AboutMe>
        </Container>
      </Section>
    </>
  );
};

export default About;
