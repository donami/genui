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
import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { css } from '../../styled/styled-components';
var StyledLabel = styled.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  font-family: 'Roboto', sans-serif;\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 0.8em;\n\n  margin: 0 3px;\n\n  ", ";\n"], ["\n  font-family: 'Roboto', sans-serif;\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 0.8em;\n\n  margin: 0 3px;\n\n  ",
    ";\n"])), function (_a) {
    var color = _a.color;
    if (color === 'orange') {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background: #cf590c;\n      "], ["\n        background: #cf590c;\n      "])));
    }
    if (color === 'red') {
        return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background: #db2828;\n      "], ["\n        background: #db2828;\n      "])));
    }
    if (color === 'purple') {
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background: #a333c8;\n      "], ["\n        background: #a333c8;\n      "])));
    }
    if (color === 'green') {
        return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        background: #21ba45;\n      "], ["\n        background: #21ba45;\n      "])));
    }
    if (color === 'yellow') {
        return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background: #fbbd08;\n      "], ["\n        background: #fbbd08;\n      "])));
    }
    if (color === 'blue') {
        return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background: #2185d0;\n      "], ["\n        background: #2185d0;\n      "])));
    }
    if (color === 'teal') {
        return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        background: #00b5ad;\n      "], ["\n        background: #00b5ad;\n      "])));
    }
    return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      background: #e8e8e8;\n      color: rgba(0, 0, 0, 0.6);\n    "], ["\n      background: #e8e8e8;\n      color: rgba(0, 0, 0, 0.6);\n    "])));
});
var Label = function (_a) {
    var children = _a.children, other = __rest(_a, ["children"]);
    return React.createElement(StyledLabel, __assign({}, other), children);
};
Label.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
};
// Label.defaultProps = {
//   color: null,
// };
export default Label;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=label.js.map