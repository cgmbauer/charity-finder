import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;

  margin-bottom: 2rem;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;

  padding: 10px;
  height: 70px;
  top: 0;

  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  img {
    width: 170px;
    height: 24px;
  }

  @media (min-width: 400px) {
    img {
      width: 210px;
      height: 30px;

      margin-left: 25px;
    }
  }
`;

export const DropDown = styled.div`
  display: inline-block;
  position: relative;
  margin-left: auto;

  div {
    svg {
      font-size: 28px;
      color: #ff6f00;
      margin-top: 3px;
    }

    @media (min-width: 750px) {
      svg {
        display: none;
      }
    }
  }
`;

export const DropContent = styled.div`
  visibility: visible;

  position: absolute;
  right: -10px;
  top: 54px;

  margin-left: -350px;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  min-width: 160px;

  z-index: 1;
  @media (min-width: 750px) {
    position: static;

    visibility: visible;

    z-index: 0;

    background-color: initial;
    box-shadow: initial;

    margin-left: 0;
    margin-right: 25px;

    width: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 11px;

    @media (min-width: 750px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      width: 180px;
    }

    a {
      text-decoration: none;
      color: #ff6f00;
      font: 400 18px 'Poppins', 'sans-serif';

      margin-top: 8px;
      margin-bottom: 8px;

      &:hover {
        color: #ffffff;
      }

      @media (min-width: 750px) {
        a {
          margin-top: 0;
        }
      }
    }
  }
`;
