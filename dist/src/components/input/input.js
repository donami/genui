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
import * as React from 'react';
import styled from '../../styled/styled-components';
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dirty: false,
        };
        return _this;
    }
    Input.prototype.render = function () {
        return React.createElement(StyledInput, __assign({}, this.props));
    };
    return Input;
}(React.Component));
var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  max-width: 100%;\n  outline: 0;\n  text-align: left;\n  line-height: 1.2em;\n  padding: 0.67em 1em;\n  background: #fff;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 0.28571429rem;\n  -webkit-transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n\n  &:focus {\n    border-color: #85b7d9;\n    background: #fff;\n    color: rgba(0, 0, 0, 0.8);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n"], ["\n  margin: 0;\n  max-width: 100%;\n  outline: 0;\n  text-align: left;\n  line-height: 1.2em;\n  padding: 0.67em 1em;\n  background: #fff;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 0.28571429rem;\n  -webkit-transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: border-color 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n\n  &:focus {\n    border-color: #85b7d9;\n    background: #fff;\n    color: rgba(0, 0, 0, 0.8);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n"])));
export default Input;
var templateObject_1;
//# sourceMappingURL=input.js.map