import React from 'react';
import { Link } from 'react-router-dom';
import { AboutContainer, HorizontalLine } from './styles';

import Header from '../../components/header';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <h3>ABOUT</h3>
        <HorizontalLine />
        <p>
          Sometimes can be hard to find a project that you can trust and wants
          to support, right?
          <span />
          We’ll help you to find that perfect charity project that you were
          looking for all this time, even if it is on the other side of the
          world!
          <span />
          Let’s get started?
        </p>
        <Link to="/">LET'S GO!</Link>
      </AboutContainer>
    </>
  );
};

export default About;
