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
import React, { Component } from 'react';
import Modal from '../modal/modal';
var Confirm = /** @class */ (function (_super) {
    __extends(Confirm, _super);
    function Confirm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Confirm.prototype.render = function () {
        var _a = this.props, trigger = _a.trigger, header = _a.header, content = _a.content, onActionClick = _a.onActionClick;
        return (React.createElement(Modal, { trigger: trigger, header: header || 'Are you sure?', content: React.createElement("div", null, content || 'Do you really want to proceed?'), actions: [
                {
                    key: 'no',
                    content: 'No, cancel',
                    positive: false,
                },
                {
                    key: 'yes',
                    content: 'Yes',
                    positive: true,
                    color: 'green',
                    icon: 'fas fa-check',
                },
            ], onActionClick: onActionClick }));
    };
    return Confirm;
}(Component));
export default Confirm;
//# sourceMappingURL=confirm.js.map