import React from 'react';

import styled from '../../styled/styled-components';

export type Props = {};

const ListHeader: React.SFC<Props> = ({ children }) => {
  return <StyledListHeader>{children}</StyledListHeader>;
};

export const StyledListHeader = styled.div`
  font-weight: 700;
  display: block;
  margin: 0;
`;

export default ListHeader;
