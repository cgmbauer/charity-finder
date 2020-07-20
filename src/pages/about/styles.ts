import styled from 'styled-components';

export const AboutContainer = styled.div`
  text-align: center;

  padding-top: 85px;
  margin-top: 30px;

  height: 100vh;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 47px;

    margin-bottom: 0;
    margin-top: 20px;
    padding-bottom: 0;
  }

  p {
    span {
      display: block;

      margin-top: 23px;
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
