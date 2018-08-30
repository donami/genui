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
import React, { Component } from 'react';
import styled, { withProps, css } from '../../styled/styled-components';
var initialState = { open: false, selected: null };
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.handleClick = function (e) {
            // If click is inside node, return
            if (!_this.node || _this.node.contains(e.target)) {
                return;
            }
            _this.setState({ open: false });
        };
        _this.selectItem = function (item) {
            _this.setState({ selected: item, open: false });
            if (_this.selectElem) {
                _this.selectElem.value = item.value.toString();
                _this.props.onChange && _this.props.onChange(item.value.toString());
            }
        };
        return _this;
    }
    Select.prototype.componentWillMount = function () {
        document.addEventListener('mousedown', this.handleClick, false);
    };
    Select.prototype.componentWillUnmount = function () {
        document.addEventListener('mousedown', this.handleClick, false);
    };
    Select.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.value) {
            var item = nextProps.options.find(function (option) {
                if (!nextProps.value) {
                    return false;
                }
                return option.value.toString() === nextProps.value.toString();
            });
            if (!item) {
                return;
            }
            if (!this.state.selected || this.state.selected.value !== item.value) {
                this.setState({ selected: item });
                this.props.onChange && this.props.onChange(item.value.toString());
                if (this.selectElem) {
                    this.selectElem.value = item.value.toString();
                }
            }
        }
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, placeholder = _a.placeholder;
        var _b = this.state, open = _b.open, selected = _b.selected;
        var defaultOpenText = placeholder || 'Select value';
        return (React.createElement(Container, { innerRef: function (node) { return (_this.node = node); }, open: open, onClick: function () { return _this.setState({ open: !open }); }, className: "select-container" },
            React.createElement(Text, { hasSelectedItem: selected !== null, className: "select-label" }, selected ? selected.label : defaultOpenText),
            React.createElement(DropdownIcon, { className: "fas fa-caret-down" }),
            React.createElement(Options, { open: open, className: "select-options" }, options.map(function (option) { return (React.createElement(Option, { key: option.value, selected: selected ? selected.value === option.value : false, onClick: function () { return _this.selectItem(option); } }, option.label)); })),
            React.createElement("select", { ref: function (element) {
                    _this.selectElem = element;
                } }, options.map(function (option) { return (React.createElement("option", { key: option.value, value: option.value }, option.label)); }))));
    };
    return Select;
}(Component));
export default Select;
var Container = withProps()(styled.div)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  text-align: left;\n  -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: box-shadow 0.1s ease, width 0.1s ease;\n  transition: box-shadow 0.1s ease, width 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  -webkit-tap-highlight-color: transparent;\n\n  word-wrap: break-word;\n  line-height: 1em;\n  white-space: normal;\n  -webkit-transform: rotateZ(0);\n  transform: rotateZ(0);\n  min-width: 14em;\n  background: #fff;\n  padding: 0.78571429em 2.1em 0.78571429em 1em;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  border-radius: 0.28571429rem;\n\n  &:hover {\n    border-color: rgba(34, 36, 38, 0.35);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  &:focus {\n    border-color: #96c8da;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  select {\n    display: none;\n  }\n\n  ", ";\n"], ["\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  text-align: left;\n  -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: box-shadow 0.1s ease, width 0.1s ease;\n  transition: box-shadow 0.1s ease, width 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  -webkit-tap-highlight-color: transparent;\n\n  word-wrap: break-word;\n  line-height: 1em;\n  white-space: normal;\n  -webkit-transform: rotateZ(0);\n  transform: rotateZ(0);\n  min-width: 14em;\n  background: #fff;\n  padding: 0.78571429em 2.1em 0.78571429em 1em;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  border-radius: 0.28571429rem;\n\n  &:hover {\n    border-color: rgba(34, 36, 38, 0.35);\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  &:focus {\n    border-color: #96c8da;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  select {\n    display: none;\n  }\n\n  ",
    ";\n"])), function (_a) {
    var open = _a.open;
    return open && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border-color: #96c8da;\n      -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n      box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n      border-bottom-left-radius: 0 !important;\n      border-bottom-right-radius: 0 !important;\n      z-index: 12;\n\n      &:hover {\n        border-color: #96c8da;\n        -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n        box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n      }\n    "], ["\n      border-color: #96c8da;\n      -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n      box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n      border-bottom-left-radius: 0 !important;\n      border-bottom-right-radius: 0 !important;\n      z-index: 12;\n\n      &:hover {\n        border-color: #96c8da;\n        -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n        box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n      }\n    "])));
});
var Text = withProps()(styled.div)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  -webkit-transition: none;\n  transition: none;\n\n  ", "\n"], ["\n  display: inline-block;\n  -webkit-transition: none;\n  transition: none;\n\n  ",
    "\n"])), function (_a) {
    var hasSelectedItem = _a.hasSelectedItem;
    return !hasSelectedItem && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      color: rgba(191, 191, 191, 0.87);\n    "], ["\n      color: rgba(191, 191, 191, 0.87);\n    "])));
});
var DropdownIcon = styled.i(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-block;\n  text-decoration: inherit;\n\n  font-size: 0.85714286em;\n\n  font-style: normal;\n  text-align: center;\n\n  cursor: pointer;\n  position: absolute;\n  width: auto;\n  height: auto;\n  line-height: 1.21428571em;\n  top: 0.78571429em;\n  right: 1em;\n  margin: -0.78571429em;\n  padding: 0.91666667em;\n  opacity: 0.8;\n  -webkit-transition: opacity 0.1s ease;\n  transition: opacity 0.1s ease;\n"], ["\n  display: inline-block;\n  text-decoration: inherit;\n\n  font-size: 0.85714286em;\n\n  font-style: normal;\n  text-align: center;\n\n  cursor: pointer;\n  position: absolute;\n  width: auto;\n  height: auto;\n  line-height: 1.21428571em;\n  top: 0.78571429em;\n  right: 1em;\n  margin: -0.78571429em;\n  padding: 0.91666667em;\n  opacity: 0.8;\n  -webkit-transition: opacity 0.1s ease;\n  transition: opacity 0.1s ease;\n"])));
var Options = withProps()(styled.div)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n\n  cursor: auto;\n  position: absolute;\n  outline: 0;\n  top: 100%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  margin: 0;\n  padding: 0 0;\n  background: #fff;\n  font-size: 1em;\n  text-shadow: none;\n  text-align: left;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  -webkit-transition: opacity 0.1s ease;\n  transition: opacity 0.1s ease;\n  will-change: transform, opacity;\n\n  left: 0;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-overflow-scrolling: touch;\n  border-top-width: 0 !important;\n  width: auto;\n  outline: 0;\n  margin: 0 -1px;\n  min-width: 100%;\n  width: 100%;\n  border-radius: 0 0 0.28571429rem 0.28571429rem;\n  -webkit-transition: opacity 0.1s ease;\n  transition: opacity 0.1s ease;\n\n  max-height: 8.01428571rem;\n\n  border-color: #96c8da;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n"], ["\n  ",
    "\n\n  cursor: auto;\n  position: absolute;\n  outline: 0;\n  top: 100%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  margin: 0;\n  padding: 0 0;\n  background: #fff;\n  font-size: 1em;\n  text-shadow: none;\n  text-align: left;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  -webkit-transition: opacity 0.1s ease;\n  transition: opacity 0.1s ease;\n  will-change: transform, opacity;\n\n  left: 0;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-overflow-scrolling: touch;\n  border-top-width: 0 !important;\n  width: auto;\n  outline: 0;\n  margin: 0 -1px;\n  min-width: 100%;\n  width: 100%;\n  border-radius: 0 0 0.28571429rem 0.28571429rem;\n  -webkit-transition: opacity 0.1s ease;\n  transition: opacity 0.1s ease;\n\n  max-height: 8.01428571rem;\n\n  border-color: #96c8da;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n"])), function (_a) {
    var open = _a.open;
    return !open && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      display: none;\n    "], ["\n      display: none;\n    "])));
});
var Option = withProps()(styled.div)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  display: block;\n  border: none;\n  height: auto;\n  text-align: left;\n  line-height: 1em;\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 1em;\n  text-transform: none;\n  font-weight: 400;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-touch-callout: none;\n\n  border-top: 1px solid #fafafa;\n  padding: 0.78571429rem 1.14285714rem !important;\n  white-space: normal;\n  word-wrap: normal;\n\n  pointer-events: all;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.95);\n  }\n\n  ", "\n"], ["\n  position: relative;\n  cursor: pointer;\n  display: block;\n  border: none;\n  height: auto;\n  text-align: left;\n  line-height: 1em;\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 1em;\n  text-transform: none;\n  font-weight: 400;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-touch-callout: none;\n\n  border-top: 1px solid #fafafa;\n  padding: 0.78571429rem 1.14285714rem !important;\n  white-space: normal;\n  word-wrap: normal;\n\n  pointer-events: all;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.95);\n  }\n\n  ",
    "\n"])), function (_a) {
    var selected = _a.selected;
    return selected && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      background: rgba(0, 0, 0, 0.03);\n      color: rgba(0, 0, 0, 0.95);\n      font-weight: 700;\n    "], ["\n      background: rgba(0, 0, 0, 0.03);\n      color: rgba(0, 0, 0, 0.95);\n      font-weight: 700;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=select.js.map