import * as React from 'react';
import * as PropTypes from 'prop-types';

import styled, { css } from '../../styled/styled-components';

export interface LabelProps {
  children: any;
  color?: string;
}

const StyledLabel = styled.span`
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.8em;

  margin: 0 3px;

  ${({ color }) => {
    if (color === 'orange') {
      return css`
        background: #cf590c;
      `;
    }
    if (color === 'red') {
      return css`
        background: #db2828;
      `;
    }
    if (color === 'purple') {
      return css`
        background: #a333c8;
      `;
    }
    if (color === 'green') {
      return css`
        background: #21ba45;
      `;
    }
    if (color === 'yellow') {
      return css`
        background: #fbbd08;
      `;
    }
    if (color === 'blue') {
      return css`
        background: #2185d0;
      `;
    }
    if (color === 'teal') {
      return css`
        background: #00b5ad;
      `;
    }
    return css`
      background: #e8e8e8;
      color: rgba(0, 0, 0, 0.6);
    `;
  }};
`;

const Label: React.StatelessComponent<LabelProps> = ({
  children,
  ...other
}: LabelProps) => <StyledLabel {...other}>{children}</StyledLabel>;

Label.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

// Label.defaultProps = {
//   color: null,
// };

export default Label;
