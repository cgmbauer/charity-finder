import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import { AboutContainer, GlobalGivingContainer } from './styles';

import Header from '../../components/header';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <h3>ABOUT</h3>
        <p>
          Sometimes can be hard to find a project that you can trust and wants
          to support, right? We’ll help you to find that perfect charity project
          that you were looking for all this time, even if it is on the other
          side of the world!
          <span />
          Let’s get started?
        </p>

        <Link to="/">LET'S GO!</Link>
      </AboutContainer>

      <GlobalGivingContainer>
        <h3>GLOBALGIVING</h3>

        <p>
          "
          <a
            href="https://www.globalgiving.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {`GlobalGiving `}
          </a>
          is the largest global crowdfunding community connecting nonprofits,
          donors, and companies in nearly every country. We help nonprofits from
          Afghanistan to Zimbabwe (and hundreds of places in between) access the
          tools, training, and support they need to be more effective and make
          our world a better place.”
        </p>
        <p>
          If you want to know more about this organization, feel free to contact
          them at:
        </p>
        <a
          href="https://www.facebook.com/GlobalGiving/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>

        <a
          href="https://twitter.com/globalgiving"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>

        <a
          href="https://www.instagram.com/globalgiving/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
      </GlobalGivingContainer>
    </>
  );
};

export default About;
