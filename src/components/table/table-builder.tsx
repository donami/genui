import React, { Component } from 'react';

import TableFilter from './table-filter';
import Table from './table';
import styled from '../../styled/styled-components';
import Button from '../button/index';

export const TableContext = React.createContext({
  handleSort: (property: string) => {},
  sortBy: '',
  sortOrder: '',
});

type ItemOption = {
  label: string;
  icon: string;
  onClick?: any;
  to?: string;
};

type FilterType = {
  label: string;
  placeholder: string;
  property: string;
  filterAs: (item: any, filterState: any) => boolean;
  options: {
    label: string;
    value: any;
  }[];
  inputType?: 'select' | 'text';
};

type Props = {
  items: any;
  selectable?: boolean;
  itemsOptions?(item?: any): ItemOption[];
  renderItem(item: any): JSX.Element;
  renderHeaders: JSX.Element;
  filters?: FilterType[];
};

type State = Readonly<{
  filter: {
    [key: string]: any;
  };
  filteredItems: any[];
  selected: number[];
  sortBy?: string;
  sortOrder: 'asc' | 'desc';
}>;

const initialState: State = {
  filter: {},
  filteredItems: [],
  selected: [],
  sortBy: 'id',
  sortOrder: 'desc',
};

class TableBuilder extends Component<Props, State> {
  readonly state = initialState;

  componentWillMount() {
    this.setState({ filteredItems: this.props.items || [] });
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ filteredItems: nextProps.items || [] });
  }

  filterItems = () => {
    const { items, filters } = this.props;
    const { sortBy, sortOrder } = this.state;

    if (!filters) {
      return;
    }

    let filteredItems = items;

    filters.forEach(filterItem => {
      if (
        filterItem.filterAs &&
        typeof this.state.filter[filterItem.property] !== 'undefined'
      ) {
        filteredItems = filteredItems.filter((item: any) => {
          return filterItem.filterAs(item, this.state.filter);
        });
      }
    });

    if (sortBy) {
      filteredItems = filteredItems.sort((item: any, other: any) => {
        if (item[sortBy] > other[sortBy]) {
          if (sortOrder === 'asc') {
            return -1;
          }
          return 1;
        }
        if (item[sortBy] < other[sortBy]) {
          if (sortOrder === 'asc') {
            return 1;
          }
          return -1;
        }
        return 0;
      });
    }

    this.setState({
      filteredItems,
    });
  };

  handleFilterChange = (value: any, property: any) => {
    this.setState(
      {
        filter: {
          ...this.state.filter,
          [property]: value,
        },
      },
      () => this.filterItems()
    );
  };

  handleSelect = (e: any, itemId: number) => {
    const indexOf = this.state.selected.indexOf(itemId);
    const items = [...this.state.selected];

    if (indexOf > -1) {
      this.setState({
        selected: [...items.slice(0, indexOf), ...items.slice(indexOf + 1)],
      });
    } else {
      this.setState({
        selected: [...this.state.selected, itemId],
      });
    }
  };

  handleSelectAll = () => {
    this.setState({
      selected: this.state.filteredItems.map(item => item.id),
    });
  };

  handleDeselectAll = () => this.setState({ selected: [] });

  handleToggleSelectAll = (e: any) => {
    if (e.target.checked) {
      this.handleSelectAll();
    } else {
      this.handleDeselectAll();
    }
  };

  handleSortBy = (property: string) => {
    const sortOrder = this.state.sortOrder === 'desc' ? 'asc' : 'desc';

    this.setState({ sortOrder, sortBy: property }, () => this.filterItems());
  };

  /**
   * Clear existing filters to initial state
   */
  clearFilter = () => {
    this.setState(
      {
        filter: {},
      },
      () => this.filterItems()
    );
  };

  /**
   * Returns true if a filter is defined
   */
  hasFilter = () => {
    return Object.keys(this.state.filter).reduce((acc, key) => {
      if (this.state.filter[key].length > 0) {
        return true;
      }

      return acc;
    }, false);
  };

  render() {
    const { filters } = this.props;
    const { filteredItems, selected, sortOrder, sortBy } = this.state;

    return (
      <div>
        <TableContext.Provider
          value={{
            sortBy: sortBy || '',
            sortOrder: sortOrder || '',
            handleSort: this.handleSortBy,
          }}
        >
          {filters && (
            <div style={{ textAlign: 'right', marginBottom: 20 }}>
              {filters.map(filter => (
                <TableFilter
                  key={filter.property}
                  label={filter.label}
                  inputType={filter.inputType || 'select'}
                  placeholder={filter.placeholder}
                  options={filter.options}
                  onChange={value => {
                    let selectedValue = value;
                    if (value === 'false') {
                      selectedValue = false;
                    }
                    if (value === 'true') {
                      selectedValue = true;
                    }
                    this.handleFilterChange(selectedValue, filter.property);
                  }}
                />
              ))}

              {this.hasFilter() && (
                <div style={{ display: 'inline-block' }}>
                  <Button onClick={this.clearFilter} icon="fas fa-times" />
                </div>
              )}
            </div>
          )}

          {filteredItems.length <= 0 && (
            <NoMatches>No matches found.</NoMatches>
          )}

          {filteredItems.length > 0 && (
            <Table>
              <Table.Header>
                <Table.Row>
                  {this.props.selectable && (
                    <Table.HeaderCell length="5%">
                      <input
                        type="checkbox"
                        onChange={this.handleToggleSelectAll}
                      />
                    </Table.HeaderCell>
                  )}
                  {this.props.renderHeaders}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {filteredItems.map(item => {
                  return (
                    <Table.Row key={item.id}>
                      {this.props.selectable && (
                        <Table.Cell>
                          <input
                            type="checkbox"
                            checked={selected.indexOf(item.id) > -1}
                            onChange={e => this.handleSelect(e, item.id)}
                          />
                        </Table.Cell>
                      )}
                      {this.props.renderItem(item)}
                      {this.props.itemsOptions && (
                        <Table.Cell options={this.props.itemsOptions(item)} />
                      )}
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          )}
        </TableContext.Provider>
      </div>
    );
  }
}

export default TableBuilder;

const NoMatches = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
`;
