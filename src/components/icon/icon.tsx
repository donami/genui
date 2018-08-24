import * as React from 'react';
import styled from 'styled-components';

const colors = (color: any) => {
  switch (color) {
    case 'blue':
      return 'color: #2185d0;';
    case 'red':
      return 'color: #db2828;';
    case 'teal':
      return 'color: #00b5ad;';
    case 'green':
      return 'color: #21ba45;';
    default:
      return null;
  }
};

const StyledIcon = styled.i`
  ${props => props.color && colors(props.color)};
`;

export interface IconProps {
  name: string;
  size?: string;
  color?: string;
  className?: string;
  fixedWidth?: boolean;
}

const Icon: React.SFC<IconProps> = ({
  name,
  size,
  fixedWidth,
  className,
  ...other
}) => {
  const sizeClasses = {
    xs: 'fa-xs',
    sm: 'fa-sm',
    lg: 'fa-lg',
    '2x': 'fa-2x',
    '3x': 'fa-3x',
    '4x': 'fa-4x',
    '5x': 'fa-5x',
    '6x': 'fa-6x',
    '7x': 'fa-7x',
    '8x': 'fa-8x',
    '9x': 'fa-9x',
    '10x': 'fa-10x',
  };

  const classes = className ? className.split(' ') : [];

  classes.push(name);

  if (fixedWidth) {
    classes.push('fa-fw');
  }

  if (size && sizeClasses[size]) {
    classes.push(sizeClasses[size]);
  }

  const classString = classes.join(' ');

  return <StyledIcon className={classString} {...other} />;
};

export default Icon;
