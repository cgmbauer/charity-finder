import React, { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { DropContent, DropDown, HeaderContainer } from './styles';

import logoImg from '../../assets/CharityFinderLogo210x30.jpg';

const Header: React.FC = () => {
  const wWidth = window.innerWidth;

  const menuBlock = React.createRef<HTMLDivElement>();

  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClickOutside = useCallback(
    (e: any) => {
      if (menuBlock && !menuBlock.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    },
    [menuBlock],
  );

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  });

  return (
    <>
      <HeaderContainer>
        <img src={logoImg} alt="Charity Finder Logo" />
        <DropDown ref={menuBlock}>
          <div onClick={handleClick}>
            <FaBars />
          </div>
          <DropContent onBlur={handleClick}>
            {open && wWidth < 750 && (
              <div>
                <Link to="/"> CHARITIES </Link>
                <Link to="/about"> ABOUT </Link>
              </div>
            )}
            {wWidth >= 750 && (
              <div>
                <Link to="/"> CHARITIES </Link>
                <Link to="/about"> ABOUT </Link>
              </div>
            )}
          </DropContent>
        </DropDown>
      </HeaderContainer>
    </>
  );
};

export default Header;
