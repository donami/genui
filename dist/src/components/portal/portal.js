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
import React, { Component } from 'react';
import PortalInner from './portal-inner';
var initialState = {
    open: false,
};
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.handleTriggerClick = function (e) {
            var _a;
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            var open = _this.state.open;
            var trigger = _this.props.trigger;
            if (typeof trigger.props.onClick === 'function') {
                (_a = trigger.props.onClick).apply.apply(_a, [_this, e].concat(rest));
            }
            if (open) {
                _this.close(e);
            }
            else {
                _this.open(e);
            }
        };
        _this.open = function (e) {
            _this.setState({ open: true });
            _this.props.onOpenChange && _this.props.onOpenChange(true);
        };
        _this.close = function (e) {
            _this.setState({ open: false });
            _this.props.onOpenChange && _this.props.onOpenChange(false);
        };
        return _this;
    }
    Portal.prototype.componentWillReceiveProps = function (nextProps) {
        if (typeof nextProps.open !== 'undefined') {
            this.setState({ open: nextProps.open });
        }
    };
    Portal.prototype.render = function () {
        var open = this.state.open;
        var _a = this.props, children = _a.children, trigger = _a.trigger, _b = _a.mountNode, mountNode = _b === void 0 ? document.body : _b;
        return [
            open ? (React.createElement(PortalInner, { key: "inner", mountNode: mountNode }, children)) : null,
            trigger
                ? React.cloneElement(trigger, {
                    onClick: this.handleTriggerClick,
                    key: 'trigger',
                })
                : null,
        ];
    };
    return Portal;
}(Component));
export default Portal;
//# sourceMappingURL=portal.js.map