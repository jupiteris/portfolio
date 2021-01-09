import React from "react";
import { Section, Div } from "./Contact.style";
import Container from "../../components/Container";
import MailTo from "../../components/MailTo/MailTo";
import { me, contact } from "../../config";

const Contact = () => {
  const { email } = me;
  const { subject, body } = contact;
  return (
    <>
      <Section id="contact">
        <Container>
          <Div>
            <h2>Get In Touch</h2>
            <p>
              I am open to opportunities, collaboration, and remote work. Let's
              discuss and definitely say "Hello" in my inbox.
            </p>
            <MailTo email={email} subject={subject} body={body}>
              Let's Talk
            </MailTo>
          </Div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
