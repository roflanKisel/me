import React, {useState} from 'react';
import styled from 'styled-components';

import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  return (
    <Container>
      <Content>
        <StyledLogo />
        <HamburgerMenu isOpen={isOpen} onToggleOpen={toggleOpen} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  align-self: flex-start;
  position: fixed;

  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;

  background-color: #333;
`;

const Content = styled.div`
  width: 100%;
  margin: 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.div`
  background: transparent;
  width: 30px;
  height: 30px;

  border-radius: 50%;

  justify-self: flex-start;
`;

export default Navbar;
