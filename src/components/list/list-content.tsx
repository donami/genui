import React from 'react';

import styled from '../../styled/styled-components';

export type Props = {
  className?: string;
};

export const ListContent: React.SFC<Props> = ({
  children,
  className,
  ...rest
}) => {
  const classes = `${className} g-list-content`;

  return <div className={classes}>{children}</div>;
};

export const StyledListContent = styled(ListContent)``;

export default StyledListContent;
