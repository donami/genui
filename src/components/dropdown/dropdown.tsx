import * as React from 'react';

import styled, { css, withProps } from '../../styled/styled-components';

export type Props = {
  renderItem: (item: any) => any;
  items: any[];
  className?: string;
};

export type State = {
  active: boolean;
};

class Dropdown extends React.Component<Props, State> {
  state: State = {
    active: false,
  };
  node: HTMLElement | null;

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e: any) => {
    // If click is inside node, return
    if (!this.node || this.node.contains(e.target)) {
      return;
    }

    this.setState({ active: false });
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  renderItems = () => {
    return this.props.items.map(this.props.renderItem);
  };

  render() {
    const items = this.renderItems();
    const { children, className } = this.props;

    const injectedProps: any = {};

    if (className) {
      injectedProps.className = className + ' g-dropdown';
    } else {
      injectedProps.className = 'g-dropdown';
    }

    return (
      <Container innerRef={node => (this.node = node)} {...injectedProps}>
        <Text onClick={this.handleToggle} className="g-dropdown-text">
          {children}
        </Text>
        <Menu active={this.state.active} className="g-dropdown-menu">
          {items.map((item: any, index: number) => (
            <Item key={index} className="g-dropdown-menu-item">
              {item}
            </Item>
          ))}
        </Menu>
      </Container>
    );
  }
}

const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: inline-block;
  outline: 0;
  text-align: left;
  -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease, width 0.1s ease;
  transition: box-shadow 0.1s ease, width 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  -webkit-tap-highlight-color: transparent;
`;

const Text = styled.div`
  font-weight: 700;
  > img {
    display: inline-block;
    vertical-align: top;
    width: auto;
    margin-top: -0.5em;
    margin-bottom: -0.5em;
    max-height: 2em;
    margin-left: 0;
    float: none;
    margin-right: 0.78571429rem;
    height: 2em;
    border-radius: 500rem;
    position: relative;
    max-width: 100%;
    background-color: transparent;
  }
`;

const Menu = withProps<{ active: boolean }>()(styled.div)`
  cursor: auto;
  position: absolute;
  outline: 0;
  top: 100%;
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
  margin: 0;
  padding: 0 0;
  background: #fff;
  font-size: 1em;
  text-shadow: none;
  text-align: left;
  -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  border: 1px solid rgba(34, 36, 38, 0.15);
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  z-index: 11;

  opacity: 0;
  visibility: hidden;

  left: 0;

  cursor: auto;
  margin-top: 0.5em;
  border-radius: 0.28571429rem;

  ${({ active }) =>
    active &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

const Item = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  border: none;
  height: auto;
  text-align: left;
  border-top: none;
  line-height: 1em;
  color: rgba(0, 0, 0, 0.87);
  padding: 0.78571429rem 1rem;
  font-size: 1em;
  text-transform: none;
  font-weight: 400;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-touch-callout: none;

  &:first-child {
    border-top-width: 0;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
    z-index: 13;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    margin-left: 0;
    float: none;
    margin-right: 1rem;

    height: 2em;
    border-radius: 500rem;

    display: inline-block;
    vertical-align: top;
    width: auto;
    margin-top: -0.5em;
    margin-bottom: -0.5em;
    max-height: 2em;
  }
`;

export default Dropdown;
