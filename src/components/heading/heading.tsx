import * as React from 'react';

import styled, { withProps, css } from '../../styled/styled-components';

type Props = {
  dividing?: boolean;
  floated?: string;
  as: string;
};

const Element: React.SFC<Props> = ({ as, children, ...props }) =>
  React.createElement(as, props, children);

const Heading = withProps<Props>()(styled(Element))`
  ${({ dividing }) =>
    dividing &&
    css`
      border-bottom: 1px solid rgba(34, 36, 38, 0.15);
      padding-bottom: 0.6em;
    `}

  ${({ floated }) =>
    floated &&
    css`
      float: ${floated};
    `}
`;

export default Heading;
