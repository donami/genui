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
import React, { Component } from 'react';
import ListItem from './list-item';
import styled from '../../styled/styled-components';
import ListIcon from './list-icon';
import ListContent from './list-content';
import ListHeader from './list-header';
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, divided = _a.divided, rest = __rest(_a, ["children", "className", "divided"]);
        var classes = className + " g-list";
        var itemProps = {
            divided: divided ? 1 : 0,
        };
        var filteredChildren = children;
        if (Array.isArray(children)) {
            filteredChildren = children.filter(function (child) { return child; });
        }
        var childrenWithProps = React.Children.map(filteredChildren, function (child) {
            return React.cloneElement(child, itemProps);
        });
        return (React.createElement("div", __assign({ className: classes }, rest), childrenWithProps));
    };
    List.Item = ListItem;
    List.Icon = ListIcon;
    List.Content = ListContent;
    List.Header = ListHeader;
    return List;
}(Component));
var StyledList = styled(List)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 1em;\n  margin: 1em 0;\n  padding: 0 0;\n"], ["\n  font-size: 1em;\n  margin: 1em 0;\n  padding: 0 0;\n"])));
export default StyledList;
var templateObject_1;
//# sourceMappingURL=list.js.map