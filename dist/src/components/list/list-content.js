var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var ListContent = function (_a) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var classes = className + " g-list-content";
    return React.createElement("div", { className: classes }, children);
};
var StyledListContent = styled(ListContent)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export default StyledListContent;
var templateObject_1;
//# sourceMappingURL=list-content.js.map