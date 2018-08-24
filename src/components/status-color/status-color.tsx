import React from 'react';
import styled, { withProps, css } from '../../styled/styled-components';

export type Props = {
  positive?: boolean;
  negative?: boolean;
  info?: boolean;
};

const StatusColor: React.SFC<Props> = props => {
  return <Container {...props} />;
};

export default StatusColor;

const Container = withProps<Props>()(styled.div)`
  padding: 3px;
  display: inline-block;
  border-radius: 100%;

  ${props => {
    if (props.positive) {
      return css`
        background-color: #59efb2;
        border: #7bf3c3 1px solid;
      `;
    }
    if (props.negative) {
      return css`
        background-color: #ff7a88;
        border: #ff6573 1px solid;
      `;
    }
    if (props.info) {
      return css`
        background-color: #8cb2f0;
        border: #7ea8f2 1px solid;
      `;
    }
    return css`
      background-color: #c3c6d5;
      border: #b9bccf 1px solid;
    `;
  }}
`;
