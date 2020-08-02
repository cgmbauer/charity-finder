import React, { useState, useEffect, useCallback } from 'react';

import { NavLink } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { DropContent, DropDown, HeaderContainer } from './styles';

import logoImg from '../../assets/CharityFinder-logo.png';

const Header: React.FC = () => {
  const windowWidth = window.innerWidth;

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

  const linkActivated = {
    color: 'red',
  };
  return (
    <>
      <HeaderContainer>
        <img src={logoImg} alt="Charity Finder Logo" />
        <DropDown ref={menuBlock}>
          <div onClick={handleClick}>
            <FaBars />
          </div>
          <DropContent onBlur={handleClick}>
            {open && windowWidth < 750 && (
              <div>
                <NavLink to="/">CHARITIES</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
              </div>
            )}
            {windowWidth >= 750 && (
              <div>
                <NavLink activeClassName="selected" exact to="/">
                  CHARITIES
                </NavLink>
                <NavLink activeClassName="selected" to="/about">
                  ABOUT
                </NavLink>
              </div>
            )}
          </DropContent>
        </DropDown>
      </HeaderContainer>
    </>
  );
};

export default Header;
