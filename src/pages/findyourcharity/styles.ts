import styled from 'styled-components';

import backgroundImg from '../../assets/showcase1-maxwhite.jpg';

export const Background = styled.div`
  background-image: url(${backgroundImg}),
    radial-gradient(
      circle,
      rgba(224, 224, 224, 1) 0%,
      rgba(216, 216, 216, 1) 50%,
      rgba(224, 224, 224, 1) 100%
    );
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;

  overflow: hidden;

  text-align: center;

  height: 100vh;
  width: 100%;

  margin-top: 70px;

  h1 {
    margin-top: 360px;
    font: 700 61px 'Roboto', 'sans-serif';
    color: #ff6f00;
    text-shadow: 1.3px 1.3px #000000;
  }

  @keyframes changeSize {
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(1.3, 1.3);
    }
  }

  svg {
    margin-top: 60px;

    animation-duration: 0.7s;
    animation-name: changeSize;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

export const Container = styled.div`
  text-align: center;

  padding-top: 85px;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 47px;

    margin-bottom: 0;
    margin-top: 20px;
    padding-bottom: 0;
  }
`;

export const HorizontalLine = styled.div`
  background-color: #000;

  height: 1px;
  width: 230px;

  padding: 0;
  margin: 0 auto 60px auto;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  select {
    width: 235px;
    height: 30px;

    text-align-last: center;
    font-family: 'Poppins', 'sans-serif';
    font-weight: 400;
    font-style: italic;

    background-color: #fff;

    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    & + select {
      margin-left: 35px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 5px;

  margin-top: 30px;
  margin-bottom: 150px;
`;

export const Card = styled.div`
  width: 350px;

  margin: 25px auto 0 auto;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  a {
    width: 100%;

    cursor: pointer;

    img {
      width: 350px;
      height: 200px;
    }
  }

  h4 {
    text-align: center;

    margin-bottom: 15px;
    margin-top: 5px;
  }

  ul {
    list-style: none;

    margin-left: 4px;

    li {
      margin-bottom: 15px;
    }
  }
`;
