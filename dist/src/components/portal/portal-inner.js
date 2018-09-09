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
import { createPortal } from 'react-dom';
var PortalInner = /** @class */ (function (_super) {
    __extends(PortalInner, _super);
    function PortalInner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortalInner.prototype.render = function () {
        var _a = this.props, children = _a.children, _b = _a.mountNode, mountNode = _b === void 0 ? document.body : _b;
        return createPortal(React.createElement("div", null, children), mountNode);
    };
    return PortalInner;
}(Component));
export default PortalInner;
//# sourceMappingURL=portal-inner.js.map