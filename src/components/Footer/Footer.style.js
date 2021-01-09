import styled from "styled-components";

export const Section = styled.section`
  padding: 2em 0 0;
  color: #cebbc9;
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ThirdColumn = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    float: right;
    a + a {
      margin-left: 2em;
    }

    a > span {
      font-size: 1.2rem;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 0.85rem;
`;
