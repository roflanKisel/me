import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';

class Index extends React.Component {
  static getInitialProps() {
    return {};
  }

  render() {
    return (
      <Container>
        <Navbar />
      </Container>
    );
  }
}

const Container = styled.div`
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background-color: white;
`;

export default Index;
