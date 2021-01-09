import React from "react";
import { Section, Career } from "./History.style";
import Container from "../../components/Container";
import Placeholder from "../../components/Placeholder/Placeholder";
import { histories } from "../../config";

const History = () => {
  return (
    <>
      <Section id="history">
        <Container>
          <Placeholder title="Employee History"></Placeholder>
          {histories && histories.length
            ? histories.map((history, index) => {
                const { title, position, company, period } = history;
                return (
                  <Career key={index}>
                    <p>{period}</p>
                    <p>
                      <span>{title}</span>
                      <span>{position}</span>
                      <span>{company}</span>
                    </p>
                  </Career>
                );
              })
            : ""}
        </Container>
      </Section>
    </>
  );
};

export default History;
