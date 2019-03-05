import React from 'react';
import styled from 'styled-components';

import HamburgerMenu from './HamburgerMenu';

class Navbar extends React.PureComponent {
  state = {
    isOpen: false,
  };

  toggleOpen = () => this.setState((prevState) => ({isOpen: !prevState.isOpen}));

  render() {
    const {isOpen} = this.state;

    return (
      <Container>
        <Content>
          <StyledLogo />
          <HamburgerMenu isOpened={isOpen} onToggleOpen={this.toggleOpen} />
        </Content>
      </Container>
    );
  }
}

const Container = styled.div`
  align-self: flex-start;
  position: relative;

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
