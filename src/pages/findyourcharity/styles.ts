import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  padding-top: 85px;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 47px;

    margin-bottom: 0;
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
