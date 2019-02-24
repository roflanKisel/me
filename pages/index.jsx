import React from 'react';
import styled from 'styled-components';

import Spinner from '../components/Spinner';

class Index extends React.Component {
  static getInitialProps() {
    return {};
  }

  render() {
    return (
      <Container>
        <Spinner dotSize={2.7} size={8} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export default Index;
