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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import styled, { withProps, css } from '../../styled/styled-components';
var getBorderWidth = function (props) {
    if (props.divided) {
        return '1px';
    }
    return '0px';
};
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItem.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, divided = _a.divided, rest = __rest(_a, ["children", "className", "divided"]);
        var classes = className + " g-list-item';";
        return (React.createElement("div", __assign({ className: classes }, rest), children));
    };
    return ListItem;
}(Component));
var StyledListItem = withProps()(styled(ListItem))(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0.2em 0;\n  border-bottom-width: ", ";\n  border-bottom-style: solid;\n  border-bottom-color: rgba(34, 36, 38, 0.15);\n\n  > .g-list-icon {\n    display: inline-block;\n  }\n\n  > .g-list-icon + .g-list-content {\n    display: inline-block;\n    padding: 0 0 0 0.5em;\n  }\n\n  ", "\n\n  &:last-of-type {\n    border-bottom-width: 0;\n  }\n"], ["\n  padding: 0.2em 0;\n  border-bottom-width: ", ";\n  border-bottom-style: solid;\n  border-bottom-color: rgba(34, 36, 38, 0.15);\n\n  > .g-list-icon {\n    display: inline-block;\n  }\n\n  > .g-list-icon + .g-list-content {\n    display: inline-block;\n    padding: 0 0 0 0.5em;\n  }\n\n  ",
    "\n\n  &:last-of-type {\n    border-bottom-width: 0;\n  }\n"])), function (props) { return getBorderWidth(props); }, function (_a) {
    var divided = _a.divided;
    return divided && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding: 0.4em 0;\n    "], ["\n      padding: 0.4em 0;\n    "])));
});
export default StyledListItem;
var templateObject_1, templateObject_2;
//# sourceMappingURL=list-item.js.map