import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoPage = ({infoFilePath}) => {
  const [info, setInfo] = useState(null);

  const getInfo = async (fileName) => {
    const infoModule = await import(`../info/${fileName}`);

    setInfo(infoModule.default);
  };

  useEffect(() => {
    try {
      getInfo(infoFilePath);
    } catch (err) {
      setInfo(null);
    }
  }, [infoFilePath]);

  return !info
    ? <Container />
    : (
      <Container>{info.header}</Container>
    );
};

InfoPage.propTypes = {
  infoFilePath: PropTypes.string.isRequired,
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InfoPage;
