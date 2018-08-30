import React from 'react';

import styled from '../../styled/styled-components';
import Input from '../input/input';
import Select from '../select';

type Props = {
  onChange(value: any): any;
  options: { label: any; value: any }[];
  label: string;
  inputType: string;
  placeholder?: string;
};

const TableFilter: React.SFC<Props> = ({
  label,
  options,
  placeholder,
  inputType,
  onChange,
}) => {
  return (
    <Container>
      <Label>{label}: </Label>

      {inputType === 'select' && (
        <Select
          options={options}
          onChange={onChange}
          placeholder={placeholder || undefined}
        />
      )}

      {inputType === 'text' && (
        <Input
          onValueChange={onChange}
          placeholder={placeholder || undefined}
        />
      )}
    </Container>
  );
};

export default TableFilter;

const Container = styled.div`
  display: inline-block;
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Label = styled.div`
  display: inline-block;
  margin-right: 10px;
  text-transform: uppercase;
  font-weight: 300;
`;
