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
import styled from 'styled-components';
var colors = function (color) {
    switch (color) {
        case 'blue':
            return 'color: #2185d0;';
        case 'red':
            return 'color: #db2828;';
        case 'teal':
            return 'color: #00b5ad;';
        case 'green':
            return 'color: #21ba45;';
        default:
            return null;
    }
};
var StyledIcon = styled.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return props.color && colors(props.color); });
var Icon = function (_a) {
    var name = _a.name, size = _a.size, fixedWidth = _a.fixedWidth, className = _a.className, other = __rest(_a, ["name", "size", "fixedWidth", "className"]);
    var sizeClasses = {
        xs: 'fa-xs',
        sm: 'fa-sm',
        lg: 'fa-lg',
        '2x': 'fa-2x',
        '3x': 'fa-3x',
        '4x': 'fa-4x',
        '5x': 'fa-5x',
        '6x': 'fa-6x',
        '7x': 'fa-7x',
        '8x': 'fa-8x',
        '9x': 'fa-9x',
        '10x': 'fa-10x',
    };
    var classes = className ? className.split(' ') : [];
    classes.push(name);
    if (fixedWidth) {
        classes.push('fa-fw');
    }
    if (size && sizeClasses[size]) {
        classes.push(sizeClasses[size]);
    }
    var classString = classes.join(' ');
    return React.createElement(StyledIcon, __assign({ className: classString }, other));
};
export default Icon;
var templateObject_1;
//# sourceMappingURL=icon.js.map