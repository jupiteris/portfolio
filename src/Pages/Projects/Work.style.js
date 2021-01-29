import styled from "styled-components";

export const Section = styled.section`
  padding-top: 120px;
  .show {
    position: relative;
    margin-top: 1.5em;
    border: 1px solid #ffc857;
    padding: 0.75em 1em;
    color: #ffc857;
    cursor: pointer;
    overflow: hidden;
    min-width: 160px;
    min-height: 68px;
  }
  .show::after {
    content: "";
    position: absolute;
    top: calc(var(--y, 0) * 1px - 50px);
    left: calc(var(--x, 0) * 1px - 50px);
    width: 100px;
    height: 100px;
    background: radial-gradient(white, #3984ff00 70%);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .show:hover::after {
    opacity: 0.4;
  }
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    grid-auto-flow: dense;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Box = styled.div`
  background: #051620;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
  h2 {
    font-size: 1.75rem;
    margin: 0.5em 0 0.75em;
  }

  @media screen and (max-width: 320px) {
    h2 {
      font-size: 1.3rem;
    }
    .desc {
      font-size: 1rem;
      color: #cebbc9;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 1200px) {
    .desc {
      font-size: 1.1rem;
    }
  }
`;

export const Icons = styled.div`
  align-self: flex-end;

  a + a {
    margin-left: 1.5em;
  }

  .icons {
    font-size: 1.75rem;
  }
`;
