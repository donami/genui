import * as React from 'react';
import styled from '../../styled/styled-components';

type Props = {};

class Field extends React.Component<Props> {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Field;

const Container = styled.div`
  margin-bottom: 20px;

  > label {
    display: block;
    margin: 0 0 0.28571429rem 0;
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.92857143em;
    font-weight: 700;
    text-transform: none;
  }

  > input {
    width: 100%;
  }
`;
