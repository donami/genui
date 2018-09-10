import React, { Component } from 'react';

import Portal from '../portal';
import ModalHeader from './modal-header';
import ModalContent from './modal-content';
import ModalActions from './modal-actions';
import styled, { withProps, css } from '../../styled/styled-components';
import { Transition } from 'react-transition-group';

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
      <Transition in={this.state.open} timeout={0}>
        {(state: any) => {
          return (
            <Portal
              trigger={trigger}
              mountNode={mountNode}
              open={this.state.open}
              onOpenChange={this.handlePortalOpenChange}
            >
              <Dimmer open={open} transitionState={state} className="dimmer">
                {this.renderContent()}
              </Dimmer>
            </Portal>
          );
        }}
      </Transition>
    );
  }
}

export default Modal;

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

const Dimmer = withProps<{ open: boolean; transitionState: any }>()(styled.div)`
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  will-change: opacity;
  z-index: 1000;
s  position: fixed;
  
  ${Container} {
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    -ms-transform: scale(0.1);
    transform: scale(0.1);
    top: 300px;
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  ${props => {
    if (props.transitionState === 'entered') {
      return css`
        ${Container} {
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          -webkit-transform: translate3d(0, -300px, 0);
          transform: translate3d(0, -300px, 0);
          opacity: 1;
        }
      `;
    }
    if (props.transitionState === 'exiting') {
      return css`
        ${Container} {
          -webkit-transform: scale(0.1);
          -moz-transform: scale(0.1);
          -ms-transform: scale(0.1);
          transform: scale(0.1);
          -webkit-transform: translate3d(0, -300px, 0);
          transform: translate3d(0, -300px, 0);
          opacity: 0;
        }
      `;
    }

    return null;
  }}

  ${({ open }) =>
    open &&
    css`
      display: block !important;
      visibility: visible !important;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex !important;
      opacity: 1;
    `}
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
