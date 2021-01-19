/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "../../components/Container";
import { Main, Section } from "./Home.style";
import About from "../About/About";
import History from "../History/History";
import Work from "../Projects/Work";
import Contact from "../Contact/Contact";
import MailTo from "../../components/MailTo/MailTo";
import Footer from "../../components/Footer/Footer";
import { me, contact } from "../../config";

const Home = () => {
  const { firstName, lastName, nickName, city, country, email } = me;
  const { subject, body } = contact;
  return (
    <>
      <Main>
        <Section id="home">
          <Container className="welcome">
            <h1>Hey, I'm</h1>
            <h2>{firstName + " " + lastName ?? nickName}.</h2>
            <h3>I build things for the web.</h3>
            <p>
              I'm a web developer ✨ based in {city + ", " + country} versed in
              building applications and using technologies making websites
              accessible for all.
            </p>
            {/* <MailTo email={email} subject={subject} body={body}>
              Get in Touch
            </MailTo> */}
          </Container>
        </Section>
        <About />
        <History />
        <Work />
        {/* <Contact /> */}
        <Footer />
      </Main>
    </>
  );
};

export default Home;
