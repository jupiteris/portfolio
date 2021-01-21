import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  padding-top: 120px;
`;

export const AboutMe = styled.div`
  @-webkit-keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  .snake {
    position: relative;
    z-index: 0;
    border-radius: 10px;
    overflow: hidden;
    width: 372px;
    height: 372px;
  }
  .snake::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #b7a7ff;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#2e00ff, #917af9);
    -webkit-animation: rotate 4s linear infinite;
    animation: rotate 4s linear infinite;
  }
  .snake::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 5px;
  }
  .snake img {
    transition: all 0.3s ease;
    border-radius: 5px;
    width: 360px;
    height: 360px;
    margin: 6px;
  }
  .snake img:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    display: grid;
    place-items: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .snake img {
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
