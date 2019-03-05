import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import InfoPage from '../components/InfoPage';

class Index extends React.Component {
  static getInitialProps() {
    return {};
  }

  render() {
    return (
      <Container>
        <Navbar />
        <InfoPage infoFilePath="index" />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default Index;
