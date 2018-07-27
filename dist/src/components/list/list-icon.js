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
import Icon from '../icon';
import styled from '../../styled/styled-components';
var ListIcon = function (_a) {
    var name = _a.name, className = _a.className, rest = __rest(_a, ["name", "className"]);
    var classes = className + " g-list-icon";
    return React.createElement(Icon, __assign({}, rest, { name: name, className: classes }));
};
var StyledListIcon = styled(ListIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-right: 0.28em;\n"], ["\n  padding-right: 0.28em;\n"])));
export default StyledListIcon;
var templateObject_1;
//# sourceMappingURL=list-icon.js.map