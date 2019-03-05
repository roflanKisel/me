import React from 'react';
import styled from 'styled-components';

const HamburgerMenuItem = ({children}) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  cursor: pointer;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  max-width: 100%;
  
  -webkit-tap-highlight-color: transparent;

  transition: background-color .3s ease;
  background-color: #222;
  &:hover {
    background-color: #444;
  }
`;

export default HamburgerMenuItem;
