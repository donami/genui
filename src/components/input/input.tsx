import * as React from 'react';

import styled from '../../styled/styled-components';

type Props = {};

type State = {
  dirty: boolean;
};

class Input extends React.Component<Props, State> {
  state: State = {
    dirty: false,
  };

  render() {
    return <StyledInput {...this.props} />;
  }
}

const StyledInput = styled.input`
  margin: 0;
  max-width: 100%;
  outline: 0;
  text-align: left;
  line-height: 1.2em;
  padding: 0.67em 1em;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  -webkit-transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  transition: box-shadow 0.1s ease, border-color 0.1s ease,
    -webkit-box-shadow 0.1s ease;
  -webkit-box-shadow: none;
  box-shadow: none;

  &:focus {
    border-color: #85b7d9;
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export default Input;
