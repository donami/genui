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
import * as React from 'react';
import styled from '../../styled/styled-components';
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        return React.createElement(Container, null, this.props.children);
    };
    return Field;
}(React.Component));
export default Field;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 20px;\n\n  > label {\n    display: block;\n    margin: 0 0 0.28571429rem 0;\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 0.92857143em;\n    font-weight: 700;\n    text-transform: none;\n  }\n\n  > input,\n  > textarea {\n    width: 100%;\n  }\n"], ["\n  margin-bottom: 20px;\n\n  > label {\n    display: block;\n    margin: 0 0 0.28571429rem 0;\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 0.92857143em;\n    font-weight: 700;\n    text-transform: none;\n  }\n\n  > input,\n  > textarea {\n    width: 100%;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=field.js.map