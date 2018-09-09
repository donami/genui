import React, { Component } from 'react';
import PortalInner from './portal-inner';

type Props = {
  trigger: JSX.Element;
  mountNode?: HTMLElement;
  onOpenChange?(open: boolean): void;
  open?: boolean;
};
type State = Readonly<{
  open: boolean;
}>;

const initialState: State = {
  open: false,
};

class Portal extends Component<Props, State> {
  readonly state = initialState;

  componentWillReceiveProps(nextProps: Props) {
    if (typeof nextProps.open !== 'undefined') {
      this.setState({ open: nextProps.open });
    }
  }

  handleTriggerClick = (e: React.MouseEvent<HTMLElement>, ...rest: any[]) => {
    const { open } = this.state;
    const { trigger } = this.props;

    if (typeof trigger.props.onClick === 'function') {
      trigger.props.onClick.apply(this, e, ...rest);
    }

    if (open) {
      this.close(e);
    } else {
      this.open(e);
    }
  };

  open = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ open: true });

    this.props.onOpenChange && this.props.onOpenChange(true);
  };

  close = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ open: false });
    this.props.onOpenChange && this.props.onOpenChange(false);
  };

  render() {
    const { open } = this.state;
    const { children, trigger, mountNode = document.body } = this.props;

    return [
      open ? (
        <PortalInner key="inner" mountNode={mountNode}>
          {children}
        </PortalInner>
      ) : null,
      trigger
        ? React.cloneElement(trigger, {
            onClick: this.handleTriggerClick,
            key: 'trigger',
          })
        : null,
    ];
  }
}

export default Portal;
