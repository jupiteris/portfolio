import styled from "styled-components";

export const Section = styled.section`
  padding-top: 120px;
`;

export const Career = styled.div`
  margin-bottom: 2em;
  :last-child {
    margin-bottom: 0px;
  }
  .period {
    color: #ffc857;
    margin-right: 10px;
    font-size: 22px;
    line-height: 1px;
  }
  div:nth-child(2) {
    display: flex;
    flex-flow: column;
    padding: 6px 20px;
  }
  div:nth-child(2) > span::before {
    content: "✔️";
    margin-right: 10px;
    font-size: 20px;
    line-height: 1px;
  }
`;
