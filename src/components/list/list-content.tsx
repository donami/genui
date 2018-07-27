import React from 'react';

import styled from '../../styled/styled-components';

type Props = {
  className?: string;
};

const ListContent: React.SFC<Props> = ({ children, className, ...rest }) => {
  const classes = `${className} g-list-content`;

  return <div className={classes}>{children}</div>;
};

const StyledListContent = styled(ListContent)``;

export default StyledListContent;
