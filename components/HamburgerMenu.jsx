import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HamburgerIcon from './HamburgerIcon';
import HamburgerMenuIcon from './HamburgerMenuItem';

const HamburgerMenu = ({isOpen, onToggleOpen, ...props}) => (
  <div>
    <StyledHamburgerIcon
      isActive={isOpen}
      onActivate={onToggleOpen}
      rounding={20}
      size={30}
      thickness={4}
      color="white"
      {...props}
    />
    <Menu isOpened={isOpen}>
      <HamburgerMenuIcon>First item</HamburgerMenuIcon>
      <HamburgerMenuIcon>Second item</HamburgerMenuIcon>
      <HamburgerMenuIcon>Third item</HamburgerMenuIcon>
    </Menu>
  </div>
);

const Menu = styled.div`
  position: absolute;
  right: 0px;
  top: 50px;

  z-index: -1;

  width: 250px;
  height: auto;

  /* transform-origin: center top;
  transform: ${(props) => (props.isOpened ? 'translateY(0)' : 'translateY(-100%)')}; */
  transform-origin: center top;
  transform: ${(props) => (!props.isOpened ? 'matrix3d(1,0,0.00,0,0.00,0,1.00,0.008,0,-1,0,0,0,0,0,1)' : 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)')};

  background: #222;
  color: #FFF;

  overflow: hidden;

  border-bottom-left-radius: 20px;
  transition: transform 0.5s ease;
`;

const StyledHamburgerIcon = styled(HamburgerIcon)`
  cursor: pointer;
`;

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool,
  onToggleOpen: PropTypes.func,
};

HamburgerMenu.defaultProps = {
  isOpen: false,
  onToggleOpen: () => {},
};

export default HamburgerMenu;
