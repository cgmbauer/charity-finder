import styled from 'styled-components';

export const AboutContainer = styled.div`
  text-align: center;

  padding-top: 85px;
  margin-top: 30px;
  margin-bottom: 0px;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 47px;

    margin-bottom: 0;
    margin-top: 20px;
    padding-bottom: 0;
  }

  p {
    max-width: 890px;
    margin: 0 auto;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    font-style: italic;

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

export const HorizontalLine = styled.div`
  background-color: #000;

  height: 1px;
  width: 90px;

  padding: 0;
  margin: 0 auto 40px auto;
`;

export const GlobalGivingContainer = styled.div`
  text-align: center;

  margin-top: 65px;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 47px;

    margin-bottom: 0;
    margin-top: 20px;
    padding-bottom: 0;
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
    color: #000000;
    font-weight: 700;
  }
`;
