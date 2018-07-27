import React, { Component } from 'react';
import styled, { withProps, css } from '../../styled/styled-components';

type Props = {
  className?: string;
  divided: boolean;
};

const getBorderWidth = (props: Props) => {
  if (props.divided) {
    return '1px';
  }
  return '0px';
};

class ListItem extends Component<Props> {
  render() {
    const { children, className, divided, ...rest } = this.props;

    const classes = `${className} g-list-item';`;

    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}

const StyledListItem = withProps<Props>()(styled(ListItem))`
  padding: 0.2em 0;
  border-bottom-width: ${props => getBorderWidth(props)};
  border-bottom-style: solid;
  border-bottom-color: rgba(34, 36, 38, 0.15);

  > .g-list-icon {
    display: inline-block;
  }

  > .g-list-icon + .g-list-content {
    display: inline-block;
    padding: 0 0 0 0.5em;
  }

  ${({ divided }) =>
    divided &&
    css`
      padding: 0.4em 0;
    `}

  &:last-of-type {
    border-bottom-width: 0;
  }
`;

export default StyledListItem;
