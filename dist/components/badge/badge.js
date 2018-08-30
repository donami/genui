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
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { css, withProps } from '../../styled/styled-components';
export var sizes = {
    mini: 0.5,
    tiny: 0.6,
    small: 0.7,
    medium: 0.8,
    large: 1,
    big: 1.2,
    huge: 1.4,
    massive: 1.6,
};
export var colors = {
    red: '#db2828',
    orange: '#f2711c',
    yellow: '#fbbd08',
    olive: '#b5cc18',
    green: '#21ba45',
    teal: '#00b5ad',
    blue: '#2185d0',
    violet: '#6435c9',
    purple: '#7f44ff',
    pink: '#e03997',
    brown: '#a5673f',
    grey: '#767676',
    black: '#1b1c1d',
};
var Element = function (_a) {
    var as = _a.as, children = _a.children, circular = _a.circular, to = _a.to, props = __rest(_a, ["as", "children", "circular", "to"]);
    var type = as || 'span';
    var injectedProps = __assign({}, props, { circular: circular ? 1 : 0 });
    if (to) {
        return React.createElement(Link, { to: to }, children);
    }
    return React.createElement(type, injectedProps, children);
};
export var StyledBadge = withProps()(styled(Element))(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  line-height: 1;\n  vertical-align: baseline;\n  margin: 0 0.14285714em;\n  background-color: #e8e8e8;\n  background-image: none;\n  padding: 0.5833em 0.833em;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: none;\n  font-weight: 700;\n  border: 0 solid transparent;\n  border-radius: 0.28571429rem;\n  -webkit-transition: background 0.1s ease;\n  transition: background 0.1s ease;\n\n  font-size: 0.8em;\n  color: #fff;\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  display: inline-block;\n  line-height: 1;\n  vertical-align: baseline;\n  margin: 0 0.14285714em;\n  background-color: #e8e8e8;\n  background-image: none;\n  padding: 0.5833em 0.833em;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: none;\n  font-weight: 700;\n  border: 0 solid transparent;\n  border-radius: 0.28571429rem;\n  -webkit-transition: background 0.1s ease;\n  transition: background 0.1s ease;\n\n  font-size: 0.8em;\n  color: #fff;\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var size = _a.size;
    return size && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      font-size: ", "em;\n    "], ["\n      font-size: ", "em;\n    "])), sizes[size]);
}, function (_a) {
    var color = _a.color;
    return color && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), colors[color]);
}, function (_a) {
    var circular = _a.circular;
    return circular && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      min-width: 2em;\n      min-height: 2em;\n      padding: 0.5em !important;\n      line-height: 1em;\n      text-align: center;\n      border-radius: 500rem;\n    "], ["\n      min-width: 2em;\n      min-height: 2em;\n      padding: 0.5em !important;\n      line-height: 1em;\n      text-align: center;\n      border-radius: 500rem;\n    "])));
});
export default StyledBadge;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=badge.js.map