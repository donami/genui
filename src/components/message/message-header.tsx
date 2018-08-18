import React from 'react';

import styled from '../../styled/styled-components';

const MessageHeader: React.SFC<{}> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MessageHeader;

const Container = styled.div`
  display: block;
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 700;
  margin: -0.14285714em 0 0 0;
  font-size: 1.14285714em;
`;
