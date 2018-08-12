import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { css, withProps } from '../../styled/styled-components';

type Props = {
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  circular?: boolean;
  as?: string;
  to?: string;
};

const sizes = {
  mini: 0.5,
  tiny: 0.6,
  small: 0.7,
  medium: 0.8,
  large: 1,
  big: 1.2,
  huge: 1.4,
  massive: 1.6,
};

const colors = {
  red: '#db2828',
  orange: '#f2711c',
  yellow: '#fbbd08',
  olive: '#b5cc18',
  green: '#21ba45',
  teal: '#00b5ad',
  blue: '#2185d0',
  violet: '#6435c9',
  purple: '#7f44ff',
  pink: '#e03997',
  brown: '#a5673f',
  grey: '#767676',
  black: '#1b1c1d',
};

const Element: React.SFC<Props> = ({
  as,
  children,
  circular,
  to,
  ...props
}) => {
  const type = as || 'span';

  const injectedProps = {
    ...props,
    circular: circular ? 1 : 0,
  };

  if (to) {
    return <Link to={to}>{children}</Link>;
  }

  return React.createElement(type, injectedProps, children);
};

const StyledBadge = withProps<Props>()(styled(Element))`
  display: inline-block;
  line-height: 1;
  vertical-align: baseline;
  margin: 0 0.14285714em;
  background-color: #e8e8e8;
  background-image: none;
  padding: 0.5833em 0.833em;
  color: rgba(0, 0, 0, 0.6);
  text-transform: none;
  font-weight: 700;
  border: 0 solid transparent;
  border-radius: 0.28571429rem;
  -webkit-transition: background 0.1s ease;
  transition: background 0.1s ease;

  font-size: 0.8em;
  color: #fff;

  ${({ size }) =>
    size &&
    css`
      font-size: ${sizes[size]}em;
    `}

  ${({ color }) =>
    color &&
    css`
      background-color: ${colors[color]};
    `}

  ${({ circular }) =>
    circular &&
    css`
      min-width: 2em;
      min-height: 2em;
      padding: 0.5em !important;
      line-height: 1em;
      text-align: center;
      border-radius: 500rem;
    `}
`;

export default StyledBadge;
