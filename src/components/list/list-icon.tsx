import React from 'react';

import Icon from '../icon';
import styled from '../../styled/styled-components';

type Props = {
  name: string;
  className?: string;
};

const ListIcon: React.SFC<Props> = ({ name, className, ...rest }) => {
  const classes = `${className} g-list-icon`;
  return <Icon {...rest} name={name} className={classes} />;
};

const StyledListIcon = styled(ListIcon)`
  padding-right: 0.28em;
`;

export default StyledListIcon;
