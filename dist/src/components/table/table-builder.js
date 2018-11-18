var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import TableFilter from './table-filter';
import Table from './table';
import styled from '../../styled/styled-components';
import Button from '../button/index';
export var TableContext = React.createContext({
    handleSort: function (property) { },
    sortBy: '',
    sortOrder: '',
});
var initialState = {
    filter: {},
    filteredItems: [],
    selected: [],
    sortBy: 'id',
    sortOrder: 'desc',
};
var TableBuilder = /** @class */ (function (_super) {
    __extends(TableBuilder, _super);
    function TableBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.filterItems = function () {
            var _a = _this.props, items = _a.items, filters = _a.filters;
            var _b = _this.state, sortBy = _b.sortBy, sortOrder = _b.sortOrder;
            if (!filters) {
                return;
            }
            var filteredItems = items;
            filters.forEach(function (filterItem) {
                if (filterItem.filterAs &&
                    typeof _this.state.filter[filterItem.property] !== 'undefined') {
                    filteredItems = filteredItems.filter(function (item) {
                        return filterItem.filterAs(item, _this.state.filter);
                    });
                }
            });
            if (sortBy) {
                filteredItems = filteredItems.sort(function (item, other) {
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
            _this.setState({
                filteredItems: filteredItems,
            });
        };
        _this.handleFilterChange = function (value, property) {
            var _a;
            _this.setState({
                filter: __assign({}, _this.state.filter, (_a = {}, _a[property] = value, _a)),
            }, function () { return _this.filterItems(); });
        };
        _this.handleSelect = function (e, itemId) {
            var indexOf = _this.state.selected.indexOf(itemId);
            var items = _this.state.selected.slice();
            if (indexOf > -1) {
                _this.setState({
                    selected: items.slice(0, indexOf).concat(items.slice(indexOf + 1)),
                });
            }
            else {
                _this.setState({
                    selected: _this.state.selected.concat([itemId]),
                });
            }
        };
        _this.handleSelectAll = function () {
            _this.setState({
                selected: _this.state.filteredItems.map(function (item) { return item.id; }),
            });
        };
        _this.handleDeselectAll = function () { return _this.setState({ selected: [] }); };
        _this.handleToggleSelectAll = function (e) {
            if (e.target.checked) {
                _this.handleSelectAll();
            }
            else {
                _this.handleDeselectAll();
            }
        };
        _this.handleSortBy = function (property) {
            var sortOrder = _this.state.sortOrder === 'desc' ? 'asc' : 'desc';
            _this.setState({ sortOrder: sortOrder, sortBy: property }, function () { return _this.filterItems(); });
        };
        /**
         * Clear existing filters to initial state
         */
        _this.clearFilter = function () {
            _this.setState({
                filter: {},
            }, function () { return _this.filterItems(); });
        };
        /**
         * Returns true if a filter is defined
         */
        _this.hasFilter = function () {
            return Object.keys(_this.state.filter).reduce(function (acc, key) {
                if (_this.state.filter[key].length > 0) {
                    return true;
                }
                return acc;
            }, false);
        };
        return _this;
    }
    TableBuilder.prototype.componentWillMount = function () {
        this.setState({ filteredItems: this.props.items || [] });
    };
    TableBuilder.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ filteredItems: nextProps.items || [] });
    };
    TableBuilder.prototype.render = function () {
        var _this = this;
        var filters = this.props.filters;
        var _a = this.state, filteredItems = _a.filteredItems, selected = _a.selected, sortOrder = _a.sortOrder, sortBy = _a.sortBy;
        return (React.createElement("div", null,
            React.createElement(TableContext.Provider, { value: {
                    sortBy: sortBy || '',
                    sortOrder: sortOrder || '',
                    handleSort: this.handleSortBy,
                } },
                filters && (React.createElement("div", { style: { textAlign: 'right', marginBottom: 20 } },
                    filters.map(function (filter) { return (React.createElement(TableFilter, { key: filter.property, label: filter.label, inputType: filter.inputType || 'select', placeholder: filter.placeholder, options: filter.options, onChange: function (value) {
                            var selectedValue = value;
                            if (value === 'false') {
                                selectedValue = false;
                            }
                            if (value === 'true') {
                                selectedValue = true;
                            }
                            _this.handleFilterChange(selectedValue, filter.property);
                        } })); }),
                    this.hasFilter() && (React.createElement("div", { style: { display: 'inline-block' } },
                        React.createElement(Button, { onClick: this.clearFilter, icon: "fas fa-times" }))))),
                filteredItems.length <= 0 && (React.createElement(NoMatches, null, "No matches found.")),
                filteredItems.length > 0 && (React.createElement(Table, null,
                    React.createElement(Table.Header, null,
                        React.createElement(Table.Row, null,
                            this.props.selectable && (React.createElement(Table.HeaderCell, { length: "5%" },
                                React.createElement("input", { type: "checkbox", onChange: this.handleToggleSelectAll }))),
                            this.props.renderHeaders)),
                    React.createElement(Table.Body, null, filteredItems.map(function (item) {
                        return (React.createElement(Table.Row, { key: item.id },
                            _this.props.selectable && (React.createElement(Table.Cell, null,
                                React.createElement("input", { type: "checkbox", checked: selected.indexOf(item.id) > -1, onChange: function (e) { return _this.handleSelect(e, item.id); } }))),
                            _this.props.renderItem(item),
                            _this.props.itemsOptions && (React.createElement(Table.Cell, { options: _this.props.itemsOptions(item) }))));
                    })))))));
    };
    return TableBuilder;
}(Component));
export default TableBuilder;
var NoMatches = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n"], ["\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n"])));
var templateObject_1;
//# sourceMappingURL=table-builder.js.map