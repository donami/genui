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
import React, { Component } from 'react';
import Portal from '../portal';
import ModalHeader from './modal-header';
import ModalContent from './modal-content';
import ModalActions from './modal-actions';
import styled, { withProps, css } from '../../styled/styled-components';
import { Transition } from 'react-transition-group';
var initialState = {
    open: false,
};
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.handleClick = function (e) {
            // If click is inside node, return
            if (!_this.node || _this.node.contains(e.target)) {
                return;
            }
            _this.setState({ open: false });
        };
        _this.handlePortalOpenChange = function (open) {
            _this.setState({ open: open });
        };
        _this.actionClickOverride = function (e, actionProps) {
            _this.props.onActionClick && _this.props.onActionClick(e, actionProps);
            _this.setState({ open: false });
        };
        _this.renderContent = function () {
            var _a = _this.props, size = _a.size, header = _a.header, content = _a.content, actions = _a.actions;
            var props = {};
            if (size) {
                props.format = size;
            }
            return (React.createElement(Container, __assign({ className: "modal", innerRef: function (node) { return (_this.node = node); } }, props),
                React.createElement(CloseIcon, { className: "fas fa-times", onClick: function () { return _this.setState({ open: false }); } }),
                header && React.createElement(ModalHeader, null, header),
                content && React.createElement(ModalContent, null, content),
                actions && (React.createElement(ModalActions, { actionOverrides: _this.actionClickOverride, actions: actions })),
                _this.props.children));
        };
        return _this;
    }
    Modal.prototype.componentWillMount = function () {
        document.addEventListener('mousedown', this.handleClick, false);
    };
    Modal.prototype.componentWillUnmount = function () {
        document.addEventListener('mousedown', this.handleClick, false);
    };
    Modal.prototype.render = function () {
        var _this = this;
        var _a = this.props, trigger = _a.trigger, _b = _a.mountNode, mountNode = _b === void 0 ? document.body : _b;
        var open = this.state.open;
        return (React.createElement(Transition, { in: this.state.open, timeout: 0 }, function (state) {
            return (React.createElement(Portal, { trigger: trigger, mountNode: mountNode, open: _this.state.open, onOpenChange: _this.handlePortalOpenChange },
                React.createElement(Dimmer, { open: open, transitionState: state, className: "dimmer" }, _this.renderContent())));
        }));
    };
    Modal.Header = ModalHeader;
    Modal.Content = ModalContent;
    return Modal;
}(Component));
export default Modal;
var Container = withProps()(styled.div)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 850px;\n  margin: 0;\n\n  z-index: 1001;\n  text-align: left;\n  background: #fff;\n  border: none;\n  -webkit-box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),\n    1px 3px 15px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),\n    1px 3px 15px 2px rgba(0, 0, 0, 0.2);\n  -webkit-transform-origin: 50% 25%;\n  transform-origin: 50% 25%;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  border-radius: 0.28571429rem;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  will-change: top, left, margin, transform, opacity;\n\n  ", "\n"], ["\n  width: 850px;\n  margin: 0;\n\n  z-index: 1001;\n  text-align: left;\n  background: #fff;\n  border: none;\n  -webkit-box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),\n    1px 3px 15px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: 1px 3px 3px 0 rgba(0, 0, 0, 0.2),\n    1px 3px 15px 2px rgba(0, 0, 0, 0.2);\n  -webkit-transform-origin: 50% 25%;\n  transform-origin: 50% 25%;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  border-radius: 0.28571429rem;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  will-change: top, left, margin, transform, opacity;\n\n  ",
    "\n"])), function (props) {
    if (props.format === 'mini') {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: 350px;\n      "], ["\n        width: 350px;\n      "])));
    }
    if (props.format === 'tiny') {
        return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: 510px;\n      "], ["\n        width: 510px;\n      "])));
    }
    if (props.format === 'small') {
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: 680px;\n      "], ["\n        width: 680px;\n      "])));
    }
    if (props.format === 'large') {
        return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: 1020px;\n      "], ["\n        width: 1020px;\n      "])));
    }
    if (props.format === 'fullscreen') {
        return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: 95% !important;\n        left: 0 !important;\n        margin: 1em auto;\n      "], ["\n        width: 95% !important;\n        left: 0 !important;\n        margin: 1em auto;\n      "])));
    }
    return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      width: 80%;\n    "], ["\n      width: 80%;\n    "])));
});
var Dimmer = withProps()(styled.div)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  display: none;\n  position: absolute;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n  padding: 1em;\n  background-color: rgba(0, 0, 0, 0.85);\n  opacity: 0;\n  line-height: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  will-change: opacity;\n  z-index: 1000;\ns  position: fixed;\n  \n  ", " {\n    -webkit-transform: scale(0.1);\n    -moz-transform: scale(0.1);\n    -ms-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: none;\n  position: absolute;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n  padding: 1em;\n  background-color: rgba(0, 0, 0, 0.85);\n  opacity: 0;\n  line-height: 1;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  will-change: opacity;\n  z-index: 1000;\ns  position: fixed;\n  \n  ", " {\n    -webkit-transform: scale(0.1);\n    -moz-transform: scale(0.1);\n    -ms-transform: scale(0.1);\n    transform: scale(0.1);\n    top: 300px;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n\n  ",
    "\n\n  ",
    "\n"])), Container, function (props) {
    if (props.transitionState === 'entered') {
        return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        ", " {\n          -webkit-transform: scale(1);\n          -moz-transform: scale(1);\n          -ms-transform: scale(1);\n          transform: scale(1);\n          -webkit-transform: translate3d(0, -300px, 0);\n          transform: translate3d(0, -300px, 0);\n          opacity: 1;\n        }\n      "], ["\n        ", " {\n          -webkit-transform: scale(1);\n          -moz-transform: scale(1);\n          -ms-transform: scale(1);\n          transform: scale(1);\n          -webkit-transform: translate3d(0, -300px, 0);\n          transform: translate3d(0, -300px, 0);\n          opacity: 1;\n        }\n      "])), Container);
    }
    if (props.transitionState === 'exiting') {
        return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        ", " {\n          -webkit-transform: scale(0.1);\n          -moz-transform: scale(0.1);\n          -ms-transform: scale(0.1);\n          transform: scale(0.1);\n          -webkit-transform: translate3d(0, -300px, 0);\n          transform: translate3d(0, -300px, 0);\n          opacity: 0;\n        }\n      "], ["\n        ", " {\n          -webkit-transform: scale(0.1);\n          -moz-transform: scale(0.1);\n          -ms-transform: scale(0.1);\n          transform: scale(0.1);\n          -webkit-transform: translate3d(0, -300px, 0);\n          transform: translate3d(0, -300px, 0);\n          opacity: 0;\n        }\n      "])), Container);
    }
    return null;
}, function (_a) {
    var open = _a.open;
    return open && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      display: block !important;\n      visibility: visible !important;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex !important;\n      opacity: 1;\n    "], ["\n      display: block !important;\n      visibility: visible !important;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex !important;\n      opacity: 1;\n    "])));
});
var CloseIcon = styled.i(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  cursor: pointer;\n  position: absolute;\n  top: -2.5rem;\n  right: -2.5rem;\n  z-index: 1;\n  opacity: 0.8;\n  font-size: 1.25em;\n  color: #fff;\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0.625rem 0 0 0;\n"], ["\n  cursor: pointer;\n  position: absolute;\n  top: -2.5rem;\n  right: -2.5rem;\n  z-index: 1;\n  opacity: 0.8;\n  font-size: 1.25em;\n  color: #fff;\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0.625rem 0 0 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=modal.js.map