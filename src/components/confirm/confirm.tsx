import React, { Component } from 'react';

import Modal, { ActionProps } from '../modal/modal';

type Props = {
  onActionClick(
    e: React.MouseEvent<HTMLElement>,
    actionProps: ActionProps
  ): void;
  trigger: JSX.Element;
  header?: string;
  content?: string;
};

class Confirm extends Component<Props> {
  render() {
    const { trigger, header, content, onActionClick } = this.props;

    return (
      <Modal
        trigger={trigger}
        header={header || 'Are you sure?'}
        content={<div>{content || 'Do you really want to proceed?'}</div>}
        actions={[
          {
            key: 'no',
            content: 'No, cancel',
            positive: false,
          },
          {
            key: 'yes',
            content: 'Yes',
            positive: true,
            color: 'green',
            icon: 'fas fa-check',
          },
        ]}
        onActionClick={onActionClick}
      />
    );
  }
}

export default Confirm;
