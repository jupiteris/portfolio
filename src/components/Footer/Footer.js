/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "../Container/";
import { Section, Div, ThirdColumn, Paragraph } from "./Footer.style";
import {
  FiTwitter,
  FiLinkedin,
  FiCodepen,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";
import { me } from "../../config";

const Footer = () => {
  const year = new Date().getFullYear();
  const { firstName, lastName, nickName } = me ?? {};
  return (
    <>
      <Section>
        <Container>
          <Div style={{ marginBottom: 20 }}>
            <Paragraph>
              &copy; {year + " " + (firstName ?? nickName)}.
            </Paragraph>
            <Paragraph>
              Designed & Built by {firstName + " " + lastName ?? nickName}
            </Paragraph>
            <Paragraph>Let's be friends</Paragraph>
          </Div>
          <ThirdColumn>
            <a href="" rel="noopener noreferrer" aria-label="github">
              <span>
                <FiGithub />
              </span>
            </a>
            <a href="" rel="noopener noreferrer" aria-label="twitter">
              <span>
                <FiTwitter />
              </span>
            </a>
            <a href="" rel="noopener noreferrer" aria-label="linkedin">
              <span>
                <FiLinkedin />
              </span>
            </a>
            <a href="" rel="noopener noreferrer" aria-label="codepen">
              <span>
                <FiCodepen />
              </span>
            </a>
            <a href="" rel="noopener noreferrer" aria-label="instagram">
              <span>
                <FiInstagram />
              </span>
            </a>
          </ThirdColumn>
        </Container>
      </Section>
    </>
  );
};

export default Footer;
