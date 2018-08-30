var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
import React, { Component } from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';
import TableCell from './table-cell';
import TableFooter from './table-footer';
import TableRow from './table-row';
import TableHeaderCell from './table-header-cell';
import styled from '../../styled/styled-components';
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var children = this.props.children;
        return React.createElement(Container, null, children);
    };
    Table.Body = TableBody;
    Table.Cell = TableCell;
    Table.Footer = TableFooter;
    Table.Header = TableHeader;
    Table.HeaderCell = TableHeaderCell;
    Table.Row = TableRow;
    return Table;
}(Component));
export default Table;
var Container = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 10px 0;\n\n  width: 100%;\n  border-collapse: collapse;\n\n  a {\n    color: #03b9d1;\n    text-decoration: none;\n  }\n"], ["\n  margin: 10px 0;\n\n  width: 100%;\n  border-collapse: collapse;\n\n  a {\n    color: #03b9d1;\n    text-decoration: none;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=table.js.map