import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const Hamburger = ({ isActive, onActivate }) => (
  <Container isActive={isActive} onClick={onActivate} />
);

Hamburger.propTypes = {
  isActive: PropTypes.bool,
  onActivate: PropTypes.func,
};

Hamburger.defaultProps = {
  isActive: false,
  onActivate: () => {},
};

const defaultPosition = (angle, height) => keyframes`
  from { transform: translateY(${height}px) rotate(${angle}deg); }
  to { transform: rotate(0deg) translateY(0px); }
`;

const rotate = (angle, height) => keyframes`
  to { transform: translateY(${height}px) rotate(${angle}deg); }
`;

const stick = (angle, height) => css`
  content: '';
  position: absolute;
  background-color: white;

  width: 100px;
  height: 10px;

  border-radius: 10px;

  animation: ${props => (
    props.isActive ? rotate(angle, height) : defaultPosition(angle, height)
  )} 0.5s forwards;
`;

const Container = styled.div`
  pointer-events: all;

  width: 100px;
  height: 100px;

  position: relative;

  &::before {
    ${stick(45, 25)}
  }

  &::after {
    ${stick(-45, -25)}

    top: 50px;
  }
`;

export default Hamburger;
