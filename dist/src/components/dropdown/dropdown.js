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
import * as React from 'react';
import Animation from '../../utils/animation';
import styled, { withProps } from '../../styled/styled-components';
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
        };
        _this.handleClick = function (e) {
            // If click is inside node, return
            if (!_this.node || _this.node.contains(e.target)) {
                return;
            }
            _this.setState({ active: false });
        };
        _this.handleToggle = function () {
            _this.setState({ active: !_this.state.active });
        };
        _this.renderItems = function () {
            return _this.props.items.map(_this.props.renderItem);
        };
        return _this;
    }
    Dropdown.prototype.componentWillMount = function () {
        document.addEventListener('mousedown', this.handleClick, false);
    };
    Dropdown.prototype.componentWillUnmount = function () {
        document.addEventListener('mousedown', this.handleClick, false);
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        var items = this.renderItems();
        var _a = this.props, children = _a.children, className = _a.className, animationIn = _a.animationIn, animationOut = _a.animationOut;
        var injectedProps = {};
        if (className) {
            injectedProps.className = className + ' g-dropdown';
        }
        else {
            injectedProps.className = 'g-dropdown';
        }
        return (React.createElement(Container, __assign({ innerRef: function (node) { return (_this.node = node); } }, injectedProps),
            React.createElement(Text, { onClick: this.handleToggle, className: "g-dropdown-text" }, children),
            React.createElement(Animation, { isVisible: this.state.active, animationIn: animationIn || 'bounceIn', animationOut: animationOut || 'bounceOut' },
                React.createElement(Menu, { active: this.state.active, className: "g-dropdown-menu" }, items.map(function (item, index) { return (React.createElement(Item, { key: index, className: "g-dropdown-menu-item" }, item)); })))));
    };
    return Dropdown;
}(React.Component));
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  text-align: left;\n  -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: box-shadow 0.1s ease, width 0.1s ease;\n  transition: box-shadow 0.1s ease, width 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  -webkit-tap-highlight-color: transparent;\n"], ["\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  text-align: left;\n  -webkit-transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: width 0.1s ease, -webkit-box-shadow 0.1s ease;\n  transition: box-shadow 0.1s ease, width 0.1s ease;\n  transition: box-shadow 0.1s ease, width 0.1s ease,\n    -webkit-box-shadow 0.1s ease;\n  -webkit-tap-highlight-color: transparent;\n"])));
var Text = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: 700;\n  > img {\n    display: inline-block;\n    vertical-align: top;\n    width: auto;\n    margin-top: -0.5em;\n    margin-bottom: -0.5em;\n    max-height: 2em;\n    margin-left: 0;\n    float: none;\n    margin-right: 0.78571429rem;\n    height: 2em;\n    border-radius: 500rem;\n    position: relative;\n    max-width: 100%;\n    background-color: transparent;\n  }\n"], ["\n  font-weight: 700;\n  > img {\n    display: inline-block;\n    vertical-align: top;\n    width: auto;\n    margin-top: -0.5em;\n    margin-bottom: -0.5em;\n    max-height: 2em;\n    margin-left: 0;\n    float: none;\n    margin-right: 0.78571429rem;\n    height: 2em;\n    border-radius: 500rem;\n    position: relative;\n    max-width: 100%;\n    background-color: transparent;\n  }\n"])));
var Menu = withProps()(styled.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: auto;\n  position: absolute;\n  outline: 0;\n  top: 100%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  margin: 0;\n  padding: 0 0;\n  background: #fff;\n  font-size: 1em;\n  text-shadow: none;\n  text-align: left;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  z-index: 11;\n  left: 0;\n\n  cursor: auto;\n  margin-top: 0.5em;\n  border-radius: 0.28571429rem;\n"], ["\n  cursor: auto;\n  position: absolute;\n  outline: 0;\n  top: 100%;\n  min-width: -webkit-max-content;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  margin: 0;\n  padding: 0 0;\n  background: #fff;\n  font-size: 1em;\n  text-shadow: none;\n  text-align: left;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  z-index: 11;\n  left: 0;\n\n  cursor: auto;\n  margin-top: 0.5em;\n  border-radius: 0.28571429rem;\n"])));
var Item = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  display: block;\n  border: none;\n  height: auto;\n  text-align: left;\n  border-top: none;\n  line-height: 1em;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 0.78571429rem 1rem;\n  font-size: 1em;\n  text-transform: none;\n  font-weight: 400;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-touch-callout: none;\n\n  &:first-child {\n    border-top-width: 0;\n  }\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.95);\n    z-index: 13;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  img {\n    margin-left: 0;\n    float: none;\n    margin-right: 1rem;\n\n    height: 2em;\n    border-radius: 500rem;\n\n    display: inline-block;\n    vertical-align: top;\n    width: auto;\n    margin-top: -0.5em;\n    margin-bottom: -0.5em;\n    max-height: 2em;\n  }\n"], ["\n  position: relative;\n  cursor: pointer;\n  display: block;\n  border: none;\n  height: auto;\n  text-align: left;\n  border-top: none;\n  line-height: 1em;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 0.78571429rem 1rem;\n  font-size: 1em;\n  text-transform: none;\n  font-weight: 400;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-touch-callout: none;\n\n  &:first-child {\n    border-top-width: 0;\n  }\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.05);\n    color: rgba(0, 0, 0, 0.95);\n    z-index: 13;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  img {\n    margin-left: 0;\n    float: none;\n    margin-right: 1rem;\n\n    height: 2em;\n    border-radius: 500rem;\n\n    display: inline-block;\n    vertical-align: top;\n    width: auto;\n    margin-top: -0.5em;\n    margin-bottom: -0.5em;\n    max-height: 2em;\n  }\n"])));
export default Dropdown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=dropdown.js.map