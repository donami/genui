import React, { Component } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  mountNode?: HTMLElement;
};

type State = {};

class PortalInner extends Component<Props, State> {
  render() {
    const { children, mountNode = document.body } = this.props;

    return createPortal(<div>{children}</div>, mountNode);
  }
}

export default PortalInner;
