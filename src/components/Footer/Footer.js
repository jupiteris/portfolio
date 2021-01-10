/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from "../Container/";
import { Section, Div, ThirdColumn, Paragraph } from "./Footer.style";
import { me } from "../../config";

const Footer = () => {
  const year = new Date().getFullYear();
  const { firstName, lastName, nickName, socialLinks } = me ?? {};
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
            {socialLinks && socialLinks.length
              ? socialLinks.map(({ name, icon, link }, index) => (
                  <a
                    href={link}
                    rel="noopener noreferrer"
                    aria-label={name}
                    key={index}
                  >
                    <img src={icon ?? ""} alt={name ?? ""} />
                  </a>
                ))
              : ""}
          </ThirdColumn>
        </Container>
      </Section>
    </>
  );
};

export default Footer;
