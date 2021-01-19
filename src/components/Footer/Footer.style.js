import styled from "styled-components";

export const Section = styled.section`
  padding: 8em 0 0;
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
      margin-left: 1.5em;
    }

    a > img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 0.85rem;
`;
