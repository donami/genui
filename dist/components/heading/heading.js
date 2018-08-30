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
import * as React from 'react';
import styled, { withProps, css } from '../../styled/styled-components';
var Element = function (_a) {
    var as = _a.as, children = _a.children, props = __rest(_a, ["as", "children"]);
    return React.createElement(as, props, children);
};
var Heading = withProps()(styled(Element))(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var dividing = _a.dividing;
    return dividing && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-bottom: 1px solid rgba(34, 36, 38, 0.15);\n      padding-bottom: 0.6em;\n    "], ["\n      border-bottom: 1px solid rgba(34, 36, 38, 0.15);\n      padding-bottom: 0.6em;\n    "])));
}, function (_a) {
    var floated = _a.floated;
    return floated && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      float: ", ";\n    "], ["\n      float: ", ";\n    "])), floated);
});
export default Heading;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=heading.js.map