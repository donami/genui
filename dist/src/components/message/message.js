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
import React from 'react';
import styled, { withProps, css } from '../../styled/styled-components';
import MessageHeader from './message-header';
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.render = function () {
        var _a = this.props, children = _a.children, rest = __rest(_a, ["children"]);
        return React.createElement(Container, __assign({}, rest), children);
    };
    Message.Header = MessageHeader;
    return Message;
}(React.Component));
export default Message;
var Container = withProps()(styled.div)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  min-height: 1em;\n  margin: 1em 0;\n  background: #f8f8f9;\n  padding: 1em 1.5em;\n  line-height: 1.4285em;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,\n    box-shadow 0.1s ease;\n  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,\n    box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;\n  border-radius: 0.28571429rem;\n  -webkit-box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset,\n    0 0 0 0 transparent;\n  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset, 0 0 0 0 transparent;\n  font-size: 1em;\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  p {\n    line-height: 1.4285em;\n    opacity: 0.85;\n    margin: 0.75em 0;\n    margin-bottom: 0;\n    margin-top: 0.25em;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  min-height: 1em;\n  margin: 1em 0;\n  background: #f8f8f9;\n  padding: 1em 1.5em;\n  line-height: 1.4285em;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,\n    box-shadow 0.1s ease;\n  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,\n    box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;\n  border-radius: 0.28571429rem;\n  -webkit-box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset,\n    0 0 0 0 transparent;\n  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset, 0 0 0 0 transparent;\n  font-size: 1em;\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  p {\n    line-height: 1.4285em;\n    opacity: 0.85;\n    margin: 0.75em 0;\n    margin-bottom: 0;\n    margin-top: 0.25em;\n  }\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var negative = _a.negative;
    return negative && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: #fff6f6;\n      color: #9f3a38;\n      -webkit-box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;\n      box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;\n    "], ["\n      background-color: #fff6f6;\n      color: #9f3a38;\n      -webkit-box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;\n      box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;\n    "])));
}, function (_a) {
    var positive = _a.positive;
    return positive && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: #fcfff5;\n      color: #2c662d;\n      -webkit-box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;\n      box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;\n    "], ["\n      background-color: #fcfff5;\n      color: #2c662d;\n      -webkit-box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;\n      box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;\n    "])));
}, function (_a) {
    var warning = _a.warning;
    return warning && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: #fffaf3;\n      color: #573a08;\n      -webkit-box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;\n      box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;\n    "], ["\n      background-color: #fffaf3;\n      color: #573a08;\n      -webkit-box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;\n      box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;\n    "])));
}, function (_a) {
    var info = _a.info;
    return info && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: #f8ffff;\n      color: #276f86;\n      -webkit-box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;\n      box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;\n    "], ["\n      background-color: #f8ffff;\n      color: #276f86;\n      -webkit-box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;\n      box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=message.js.map