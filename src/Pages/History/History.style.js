import styled from "styled-components";

export const Section = styled.section`
  padding-top: 120px;
`;

export const Career = styled.div`
  margin-bottom: 2em;
  :last-child {
    margin-bottom: 0px;
  }
  p:first-child::before {
    content: "♦";
    color: #ffc857;
    margin-right: 5px;
    font-size: 30px;
    line-height: 1px;
  }
  span {
    margin-right: 20px;
  }
  span::before {
    content: "•";
    color: #ffc857;
    margin-right: 5px;
    font-size: 40px;
    line-height: 1px;
  }
  @media screen and (max-width: 768px) {
    p {
      display: flex;
      flex-flow: column;
    }
  }
`;
