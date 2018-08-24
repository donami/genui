import React from 'react';

import styled, { withProps, css } from '../../styled/styled-components';
import MessageHeader from './message-header';

export type Props = {
  negative?: boolean;
  positive?: boolean;
  warning?: boolean;
  info?: boolean;
};

class Message extends React.Component<Props> {
  static Header = MessageHeader;

  render() {
    const { children, ...rest } = this.props;

    return <Container {...rest}>{children}</Container>;
  }
}

export default Message;

const Container = withProps<Props>()(styled.div)`
  position: relative;
  min-height: 1em;
  margin: 1em 0;
  background: #f8f8f9;
  padding: 1em 1.5em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset,
    0 0 0 0 transparent;
  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset, 0 0 0 0 transparent;
  font-size: 1em;

  &:first-child {
    margin-top: 0;
  }

  p {
    line-height: 1.4285em;
    opacity: 0.85;
    margin: 0.75em 0;
    margin-bottom: 0;
    margin-top: 0.25em;
  }

  ${({ negative }) =>
    negative &&
    css`
      background-color: #fff6f6;
      color: #9f3a38;
      -webkit-box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;
      box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;
    `}

  ${({ positive }) =>
    positive &&
    css`
      background-color: #fcfff5;
      color: #2c662d;
      -webkit-box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;
      box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;
    `}

  ${({ warning }) =>
    warning &&
    css`
      background-color: #fffaf3;
      color: #573a08;
      -webkit-box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;
      box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;
    `}

  ${({ info }) =>
    info &&
    css`
      background-color: #f8ffff;
      color: #276f86;
      -webkit-box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;
      box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;
    `}
`;
