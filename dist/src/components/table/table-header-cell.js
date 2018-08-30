var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import { TableContext } from './table-builder';
import styled, { withProps, css } from '../../styled/styled-components';
import Icon from '../icon/icon';
var sortIcon = {
    asc: 'fas fa-chevron-up',
    desc: 'fas fa-chevron-down',
};
var TableHeaderCell = function (_a) {
    var sortableBy = _a.sortableBy, children = _a.children, rest = __rest(_a, ["sortableBy", "children"]);
    return (React.createElement(TableContext.Consumer, null, function (context) {
        var sortedBy = false;
        if (context.sortBy && context.sortBy === sortableBy) {
            sortedBy = true;
        }
        var injectedProps = {
            sortedBy: sortedBy,
        };
        if (sortableBy) {
            injectedProps.onClick = function () { return context.handleSort(sortableBy); };
        }
        if (context.sortBy && context.sortBy.length) {
            injectedProps.sortBy = context.sortBy;
        }
        if (context.sortOrder && context.sortOrder.length) {
            injectedProps.sortOrder = context.sortOrder;
        }
        return (React.createElement(HeaderCell, __assign({ sortBy: sortedBy }, injectedProps, rest),
            React.createElement(React.Fragment, null, children),
            sortedBy &&
                context.sortOrder && React.createElement(Icon, { name: sortIcon[context.sortOrder] })));
    }));
};
export default TableHeaderCell;
var HeaderCell = withProps()(styled.th)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: #fff;\n  padding: 10px 20px;\n  color: #8da5af;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: left;\n\n  i {\n    opacity: 0.5;\n    margin-left: 10px;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  background: #fff;\n  padding: 10px 20px;\n  color: #8da5af;\n  text-transform: uppercase;\n  font-weight: 300;\n  text-align: left;\n\n  i {\n    opacity: 0.5;\n    margin-left: 10px;\n  }\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var length = _a.length;
    return length && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      width: ", ";\n    "], ["\n      width: ", ";\n    "])), length);
}, function (_a) {
    var sortedBy = _a.sortedBy;
    return sortedBy && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: #03b9d1;\n      font-weight: bold;\n    "], ["\n      color: #03b9d1;\n      font-weight: bold;\n    "])));
}, function (_a) {
    var onClick = _a.onClick;
    return onClick && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      cursor: pointer;\n    "], ["\n      cursor: pointer;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=table-header-cell.js.map