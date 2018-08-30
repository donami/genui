var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from '../../styled/styled-components';
import Input from '../input/input';
import Select from '../select';
var TableFilter = function (_a) {
    var label = _a.label, options = _a.options, placeholder = _a.placeholder, inputType = _a.inputType, onChange = _a.onChange;
    return (React.createElement(Container, null,
        React.createElement(Label, null,
            label,
            ": "),
        inputType === 'select' && (React.createElement(Select, { options: options, onChange: onChange, placeholder: placeholder || undefined })),
        inputType === 'text' && (React.createElement(Input, { onValueChange: onChange, placeholder: placeholder || undefined }))));
};
export default TableFilter;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 20px;\n\n  &:last-of-type {\n    margin-right: 0;\n  }\n"], ["\n  display: inline-block;\n  margin-right: 20px;\n\n  &:last-of-type {\n    margin-right: 0;\n  }\n"])));
var Label = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 10px;\n  text-transform: uppercase;\n  font-weight: 300;\n"], ["\n  display: inline-block;\n  margin-right: 10px;\n  text-transform: uppercase;\n  font-weight: 300;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=table-filter.js.map