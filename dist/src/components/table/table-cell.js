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
import { Link } from 'react-router-dom';
import Icon from '../icon/icon';
import Dropdown from '../dropdown/dropdown';
import styled, { withProps, css } from '../../styled/styled-components';
import Confirm from '../confirm/confirm';
var TableCell = function (_a) {
    var options = _a.options, option = _a.option, children = _a.children, rest = __rest(_a, ["options", "option", "children"]);
    if (options) {
        return (React.createElement(Cell, __assign({}, rest),
            React.createElement(StyledDropdown, { className: "dropdown", items: options, renderItem: function (item) {
                    if (item.to) {
                        return (React.createElement(Link, { to: item.to },
                            React.createElement("i", { className: item.icon }),
                            item.label));
                    }
                    return (React.createElement("div", { onClick: item.onClick },
                        React.createElement("i", { className: item.icon }),
                        item.label));
                } },
                React.createElement(Icon, { name: "fas fa-ellipsis-h" }))));
    }
    if (option) {
        if (option.confirm) {
            return (React.createElement(Cell, __assign({}, rest),
                React.createElement(Confirm, { header: option.confirm.header, trigger: option.confirm.trigger, content: option.confirm.content, onActionClick: option.confirm.onActionClick })));
        }
        return (React.createElement(Cell, __assign({}, rest),
            option.to && (React.createElement(Link, { to: option.to, className: "table-cell-option" },
                React.createElement(Icon, { name: option.icon }))),
            option.onClick && (React.createElement("div", { onClick: option.onClick, className: "table-cell-option" },
                React.createElement(Icon, { name: option.icon })))));
    }
    return React.createElement(Cell, __assign({}, rest), children);
};
export default TableCell;
var Cell = withProps()(styled.td)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 20px;\n  border-bottom: #e9edf0 1px solid;\n  background: #fff;\n\n  > * {\n    vertical-align: middle;\n  }\n\n  .table-cell-option {\n    cursor: pointer;\n    padding: 7.5px 15px;\n    border-radius: 20px;\n\n    a {\n      color: #232c55;\n    }\n\n    &:hover {\n      background: #e6f8fc;\n\n      i {\n        color: #00b9d2;\n      }\n    }\n  }\n\n  i {\n    opacity: 0.5;\n  }\n\n  .avatar {\n    margin-right: 5px;\n  }\n  \n  ", "\n\n  ", "\n"], ["\n  padding: 20px;\n  border-bottom: #e9edf0 1px solid;\n  background: #fff;\n\n  > * {\n    vertical-align: middle;\n  }\n\n  .table-cell-option {\n    cursor: pointer;\n    padding: 7.5px 15px;\n    border-radius: 20px;\n\n    a {\n      color: #232c55;\n    }\n\n    &:hover {\n      background: #e6f8fc;\n\n      i {\n        color: #00b9d2;\n      }\n    }\n  }\n\n  i {\n    opacity: 0.5;\n  }\n\n  .avatar {\n    margin-right: 5px;\n  }\n  \n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var textAlign = _a.textAlign;
    return textAlign && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      text-align: ", ";\n    "], ["\n      text-align: ", ";\n    "])), textAlign);
}, function (_a) {
    var options = _a.options;
    return options && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      text-align: right;\n    "], ["\n      text-align: right;\n    "])));
});
var StyledDropdown = styled(Dropdown)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  line-height: normal;\n  align-self: center;\n\n  .g-dropdown-menu {\n    left: -120px;\n    top: 83%;\n\n    a {\n      color: #232c55;\n    }\n\n    i {\n      margin-right: 0.5em;\n    }\n  }\n"], ["\n  line-height: normal;\n  align-self: center;\n\n  .g-dropdown-menu {\n    left: -120px;\n    top: 83%;\n\n    a {\n      color: #232c55;\n    }\n\n    i {\n      margin-right: 0.5em;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=table-cell.js.map