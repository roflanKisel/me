import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const Spinner = ({ dotSize, size }) => (
  <Container size={size}>
    <DotContainer height={dotSize} width={size}>
      <Dot color="red" size={dotSize} />
    </DotContainer>

    <DotContainer height={dotSize} width={size}>
      <Dot color="green" size={dotSize} />
    </DotContainer>

    <DotContainer height={dotSize} width={size}>
      <Dot color="yellow" size={dotSize} />
    </DotContainer>

    <DotContainer height={dotSize} width={size}>
      <Dot color="blue" size={dotSize} />
    </DotContainer>
  </Container>
);

Spinner.propTypes = {
  dotSize: PropTypes.number,
  size: PropTypes.number,
};

Spinner.defaultProps = {
  dotSize: 2.2,
  size: 7,
};

const rotate = startPoint => keyframes`
  from {
    transform: rotate(${startPoint});
  }

  to {
    transform: rotate(${startPoint + 360}deg);
  }
`;

const animation = startPoint => css`
  transform: rotate(${startPoint}deg);
  animation: ${rotate(startPoint)} 1.3s infinite linear;
`;

const Container = styled.div`
  width: ${props => props.size}vh;
  height: ${props => props.size}vh;

  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DotContainer = styled.div`
  width: ${props => props.width}vh;
  height: ${props => props.height}vh;

  display: flex;
  justify-content: flex-start;

  position: absolute;

  &:nth-child(1) {
    ${animation(45)}
  }

  &:nth-child(2) {
    ${animation(135)}
  }

  &:nth-child(3) {
    ${animation(225)}
  }

  &:nth-child(4) {
    ${animation(315)}
  }
`;

const Dot = styled.div`
  background: yellow;
  width: ${props => props.size}vh;
  height: ${props => props.size}vh;
  border-radius: 50%;

  background: ${props => props.color};
`;

export default Spinner;
