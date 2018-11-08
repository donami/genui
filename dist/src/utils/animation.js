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
import React, { Component } from 'react';
import '../animate.min.css';
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Animation.prototype.componentWillMount = function () {
        if (this.props.animateOnMount) {
            this.setState({
                animation: this.props.isVisible
                    ? this.props.animationIn
                    : this.props.animationOut,
            });
        }
    };
    Animation.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.isVisible === this.props.isVisible) {
            return;
        }
        this.setState({
            animation: nextProps.isVisible
                ? nextProps.animationIn
                : nextProps.animationOut,
        });
    };
    Animation.prototype.render = function () {
        var _a = this.props, children = _a.children, isVisible = _a.isVisible;
        if (!React.isValidElement(children)) {
            return null;
        }
        var classNames = (children.props.className || '').split(' ');
        var style = children.props.style || {};
        style.pointerEvents = isVisible ? 'all' : 'none';
        classNames.push('animated');
        classNames.push(this.state.animation);
        if (!this.state.animation) {
            style.opacity = isVisible ? 1 : 0;
        }
        return React.cloneElement(children, __assign({}, children.props, { style: style, className: classNames.join(' ') }));
    };
    Animation.defaultProps = {
        animateOnMount: false,
    };
    return Animation;
}(Component));
export default Animation;
//# sourceMappingURL=animation.js.map