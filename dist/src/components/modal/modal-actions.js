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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import styled from '../../styled/styled-components';
import { Button, Icon } from '../../components';
var ModalActions = /** @class */ (function (_super) {
    __extends(ModalActions, _super);
    function ModalActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalActions.prototype.render = function () {
        var _this = this;
        var actions = this.props.actions;
        return (React.createElement(Container, null, actions.map(function (action) {
            var color = action.color, icon = action.icon, rest = __rest(action, ["color", "icon"]);
            var buttonProps = {
                color: color,
            };
            var actionProps = __assign({}, rest);
            return (React.createElement(Button, __assign({ key: action.key }, buttonProps, { onClick: function (e) {
                    return _this.props.actionOverrides(e, actionProps);
                } }),
                icon && React.createElement(Icon, { name: icon }),
                action.content));
        })));
    };
    return ModalActions;
}(Component));
export default ModalActions;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #f9fafb;\n  padding: 1rem 1rem;\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\n  text-align: right;\n"], ["\n  background: #f9fafb;\n  padding: 1rem 1rem;\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\n  text-align: right;\n"])));
var templateObject_1;
//# sourceMappingURL=modal-actions.js.map