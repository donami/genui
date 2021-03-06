import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

export type TableItem = {
  [key: string]: any;
};

export interface Props {
  headings: string[];
  items: TableItem[];
}

class TableList extends React.Component<Props> {
  render() {
    const { headings, items } = this.props;

    return (
      <StyledTable>
        <thead>
          <tr>
            {headings.map(heading => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                {headings.map((heading, index) => {
                  const headingKey = _.camelCase(heading);

                  if (!item[headingKey]) {
                    console.warn(
                      'Missing item property mapped in table component.'
                    );
                  }

                  let cellContent = item[headingKey];

                  if (typeof item[headingKey] === 'function') {
                    cellContent = item[headingKey](item);

                    return <td key={index}>{item[headingKey](item)}</td>;
                  }

                  return <td key={index}>{cellContent || ''}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  }
}

const StyledTable = styled.table`
  border: #ccc 1px solid;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 0.3rem;
  text-align: left;
  border-collapse: collapse;
  background: #fff;

  a {
    text-decoration: none;
  }

  th,
  td {
    padding: 0.8em;
  }

  th {
    border-bottom: 1px solid #ccc;
  }
`;

export default TableList;
