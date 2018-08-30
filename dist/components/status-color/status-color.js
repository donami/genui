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
import React from 'react';
import styled, { withProps, css } from '../../styled/styled-components';
var StatusColor = function (props) {
    return React.createElement(Container, __assign({}, props));
};
export default StatusColor;
var Container = withProps()(styled.div)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 3px;\n  display: inline-block;\n  border-radius: 100%;\n\n  ", "\n"], ["\n  padding: 3px;\n  display: inline-block;\n  border-radius: 100%;\n\n  ",
    "\n"])), function (props) {
    if (props.positive) {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background-color: #59efb2;\n        border: #7bf3c3 1px solid;\n      "], ["\n        background-color: #59efb2;\n        border: #7bf3c3 1px solid;\n      "])));
    }
    if (props.negative) {
        return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background-color: #ff7a88;\n        border: #ff6573 1px solid;\n      "], ["\n        background-color: #ff7a88;\n        border: #ff6573 1px solid;\n      "])));
    }
    if (props.info) {
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background-color: #8cb2f0;\n        border: #7ea8f2 1px solid;\n      "], ["\n        background-color: #8cb2f0;\n        border: #7ea8f2 1px solid;\n      "])));
    }
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: #c3c6d5;\n      border: #b9bccf 1px solid;\n    "], ["\n      background-color: #c3c6d5;\n      border: #b9bccf 1px solid;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=status-color.js.map