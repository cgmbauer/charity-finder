import styled from 'styled-components';

export const AboutContainer = styled.div`
  text-align: center;

  padding-top: 85px;
  margin-top: 30px;
  margin-bottom: 0px;

  h3 {
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 47px;

    margin: 20px auto 25px auto;

    padding-bottom: 0;
  }

  h3::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 2px solid black;
    width: 100px;
  }

  p {
    max-width: 890px;
    margin: 0 auto;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    font-style: italic;
    line-height: 30px;

    span {
      display: block;

      margin-top: 7px;
    }
  }

  a {
    display: inline-block;

    text-decoration: none;

    border-radius: 5px;

    margin-top: 15px;
    padding: 10px 30px;

    background-color: #ff6f00;
    color: #fff;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);

    transition: opacity 0.3s;
    &:hover {
      opacity: 0.85;
    }
  }
`;

export const GlobalGivingContainer = styled.div`
  text-align: center;

  margin-top: 65px;

  h3 {
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 47px;

    margin: 20px auto 25px auto;

    padding-bottom: 0;
  }

  h3::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 2px solid black;
    width: 230px;
  }

  p {
    max-width: 890px;

    margin: 0 auto;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    font-style: italic;
    line-height: 30px;

    & + p {
      margin-top: 15px;
    }
  }

  a {
    text-decoration: none;
    color: #ff6f00;
    font-weight: 700;
  }

  > a {
    color: #ff6f00;

    & + a {
      margin-left: 10px;
    }

    svg {
      font-size: 35px;

      margin-top: 10px;

      transition: opacity 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
