import React, { Component } from 'react';

import ListItem from './list-item';
import styled from '../../styled/styled-components';
import ListIcon from './list-icon';
import ListContent from './list-content';
import ListHeader from './list-header';

type Props = {
  className?: string;
  divided?: boolean;
};

class List extends Component<Props> {
  static Item = ListItem;
  static Icon = ListIcon;
  static Content = ListContent;
  static Header = ListHeader;

  render() {
    const { children, className, divided, ...rest } = this.props;

    const classes = `${className} g-list`;

    const itemProps = {
      divided: divided ? 1 : 0,
    };

    const filteredChildren = (children as any).filter((child: any) => child);

    const childrenWithProps = React.Children.map(
      filteredChildren,
      (child: any) => {
        return React.cloneElement(child, itemProps);
      }
    );

    return (
      <div className={classes} {...rest}>
        {childrenWithProps}
      </div>
    );
  }
}

const StyledList = styled(List)`
  font-size: 1em;
  margin: 1em 0;
  padding: 0 0;
`;

export default StyledList;
