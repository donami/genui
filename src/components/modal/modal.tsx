import React, { Component } from 'react';

import Portal from '../portal';
import ModalHeader from './modal-header';
import ModalContent from './modal-content';
import ModalActions from './modal-actions';
import styled, { withProps, css } from '../../styled/styled-components';

export type ActionProps = {
  key: string;
  content: string;
  positive?: boolean;
  color?: string;
  icon?: string;
};

type Sizes = 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';

type Props = {
  trigger: JSX.Element;
  mountNode?: HTMLElement;
  header?: string;
  content?: JSX.Element;
  size?: Sizes;
  actions?: any;
  onActionClick?(
    e: React.MouseEvent<HTMLElement>,
    actionProps: ActionProps
  ): any;
};

type State = Readonly<{
  open: boolean;
}>;

const initialState: State = {
  open: false,
};

class Modal extends Component<Props, State> {
  readonly state = initialState;

  static Header = ModalHeader;
  static Content = ModalContent;

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

    this.setState({ open: false });
  };

  handlePortalOpenChange = (open: boolean) => {
    this.setState({ open });
  };

  actionClickOverride = (
    e: React.MouseEvent<HTMLElement>,
    actionProps: ActionProps
  ) => {
    this.props.onActionClick && this.props.onActionClick(e, actionProps);

    this.setState({ open: false });
  };

  renderContent = () => {
    const { size, header, content, actions } = this.props;

    const props: any = {};

    if (size) {
      props.format = size;
    }

    return (
      <Container
        className="modal"
        innerRef={node => (this.node = node)}
        {...props}
      >
        <CloseIcon
          className="fas fa-times"
          onClick={() => this.setState({ open: false })}
        />
        {header && <ModalHeader>{header}</ModalHeader>}
        {content && <ModalContent>{content}</ModalContent>}
        {actions && (
          <ModalActions
            actionOverrides={this.actionClickOverride}
            actions={actions}
          />
        )}
        {this.props.children}
      </Container>
    );
  };

  render() {
    const { trigger, mountNode = document.body } = this.props;
    const { open } = this.state;

    return (
      <Portal
        trigger={trigger}
        mountNode={mountNode}
        open={this.state.open}
        onOpenChange={this.handlePortalOpenChange}
      >
        <Dimmer open={open} className="dimmer">
          {this.renderContent()}
        </Dimmer>
      </Portal>
    );
  }
}

export default Modal;

const Dimmer = withProps<{ open: boolean }>()(styled.div)`
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  display: none;
  position: absolute;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.85);
  opacity: 0;
  line-height: 1;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-transition: background-color 0.5s linear;
  transition: background-color 0.5s linear;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  will-change: opacity;
  z-index: 1000;

  position: fixed;
  -webkit-transform-style: '';
  transform-style: '';
  -webkit-perspective: 2000px;
  perspective: 2000px;
  -webkit-transform-origin: center center;
  transform-origin: center center;

  ${props => {
    if (props.open) {
      return css`
        display: block !important;
        visibility: visible !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex !important;
        opacity: 1;
      `;
    }
    return null;
  }};
`;

const Container = withProps<{ format?: Sizes }>()(styled.div)`
  width: 850px;
  margin: 0;

  z-index: 1001;
  text-align: left;
  background: #fff;
  border: none;
  -webkit-box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),
    1px 3px 15px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),
    1px 3px 15px 2px rgba(0, 0, 0, 0.2);
  -webkit-transform-origin: 50% 25%;
  transform-origin: 50% 25%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 0.28571429rem;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  will-change: top, left, margin, transform, opacity;

  ${props => {
    if (props.format === 'mini') {
      return css`
        width: 350px;
      `;
    }
    if (props.format === 'tiny') {
      return css`
        width: 510px;
      `;
    }
    if (props.format === 'small') {
      return css`
        width: 680px;
      `;
    }
    if (props.format === 'large') {
      return css`
        width: 1020px;
      `;
    }
    if (props.format === 'fullscreen') {
      return css`
        width: 95% !important;
        left: 0 !important;
        margin: 1em auto;
      `;
    }
    return css`
      width: 80%;
    `;
  }}
`;

const CloseIcon = styled.i`
  cursor: pointer;
  position: absolute;
  top: -2.5rem;
  right: -2.5rem;
  z-index: 1;
  opacity: 0.8;
  font-size: 1.25em;
  color: #fff;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0.625rem 0 0 0;
`;
