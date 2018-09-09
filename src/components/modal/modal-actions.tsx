import React, { Component } from 'react';

import { ActionProps } from './modal';
import styled from '../../styled/styled-components';
import { Button, Icon } from '../../components';

type Props = {
  actions: any;
  actionOverrides(
    e: React.MouseEvent<HTMLElement>,
    actionProps: ActionProps
  ): void;
};

class ModalActions extends Component<Props> {
  render() {
    const { actions } = this.props;

    return (
      <Container>
        {actions.map((action: any) => {
          const { color, icon, ...rest } = action;

          const buttonProps = {
            color,
          };
          const actionProps: ActionProps = { ...rest };

          return (
            <Button
              key={action.key}
              {...buttonProps}
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                this.props.actionOverrides(e, actionProps)
              }
            >
              {icon && <Icon name={icon} />}
              {action.content}
            </Button>
          );
        })}
      </Container>
    );
  }
}

export default ModalActions;

const Container = styled.div`
  background: #f9fafb;
  padding: 1rem 1rem;
  border-top: 1px solid rgba(34, 36, 38, 0.15);
  text-align: right;
`;
