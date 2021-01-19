import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  padding-top: 120px;
`;

export const AboutMe = styled.div`
  img {
    transition: all 0.3s ease;
    border-radius: 4px;
    width: 360px;
    height: 360px;
    border: 3px solid #ffc857;
  }
  img:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    place-items: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    img {
      align-self: flex-start;
    }
  }
`;

export const Left = styled.div`
  margin-bottom: 2em;
  p + p {
    margin-top: 1em;
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
    width: 55%;
    img {
      width: 35%;
    }
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0;
  li {
    display: flex;
    align-items: baseline;
    margin: 0 0 10px;
    padding-left: 20px;
  }
  li > .icon {
    color: #ffc857;
    left: 0;
    top: 50%;
    line-height: 1px;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(2, minmax(140px, 200px));
    li {
      font-size: 0.75rem;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: 280px) {
    grid-template-columns: repeat(2, minmax(70px, 150px));
  }
`;
