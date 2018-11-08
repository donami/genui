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
import React from 'react';
import styled from '../../styled/styled-components';
var TableRow = function (_a) {
    var attention = _a.attention, children = _a.children, rest = __rest(_a, ["attention", "children"]);
    var cells = React.Children.map(children, function (child) {
        if (child === null) {
            return null;
        }
        return React.cloneElement(child, __assign({ attention: typeof attention === 'undefined' ? true : attention }, rest));
    });
    return React.createElement(Row, null, cells);
};
export default TableRow;
var Row = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;
//# sourceMappingURL=table-row.js.map