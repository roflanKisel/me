import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Hamburger = ({
  color,
  isActive,
  onActivate,
  rounding,
  size,
  thickness,
  ...props
}) => (
  <Container
    color={color}
    isActive={isActive}
    onClick={onActivate}
    rounding={rounding}
    size={size}
    thickness={thickness}
    {...props}
  />
);

// TODO: make custom PropTypes checker
Hamburger.propTypes = {
  color: PropTypes.oneOf(['white', 'black']),
  isActive: PropTypes.bool,
  onActivate: PropTypes.func,
  rounding: PropTypes.number,
  size: PropTypes.number,
  thickness: PropTypes.number,
};

Hamburger.defaultProps = {
  color: 'white',
  isActive: false,
  onActivate: () => {},
  rounding: 10,
  size: 100,
  thickness: 10,
};

const stick = (angle, height, thickness) => css`
  content: '';
  position: absolute;

  width: 100%;
  height: ${thickness}px;

  transition: .5s ease;

  transform: ${props => (
    props.isActive ? `translateY(${height}px) rotate(${angle}deg);` : 'rotate(0deg) translateY(0px);'
  )};
`;

const Container = styled.div`
  pointer-events: all;

  width: ${props => props.size}px;
  height: ${props => props.size / 2 + props.thickness}px;

  position: relative;

  transition: .5s ease;

  &::before {
    ${props => stick(45, props.size / 4, props.thickness)}

    background-color: ${props => props.color};
    border-radius: ${props => props.rounding}px;
  }

  &::after {
    ${props => stick(-45, -(props.size / 4), props.thickness)}

    background-color: ${props => props.color};
    border-radius: ${props => props.rounding}px;
    top: ${props => props.size / 2}px;
  }
`;

export default Hamburger;
