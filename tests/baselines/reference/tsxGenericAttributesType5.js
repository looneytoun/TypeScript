//// [file.tsx]
import React = require('react');

class B1<T extends { x: string }> extends React.Component<T, {}> {
    render() {
        return <div>hi</div>; 
    }
}
class B<U> extends React.Component<U, {}> {
    props: U;
    render() {
        // Should be an ok but as of 2.3.3 this will be an error as we will instantiate B1.props to be empty object
        return <B1 {...this.props} x="hi" />;
    }
}

//// [file.jsx]
"use strict";
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
var __names = (this && this.__names) || (function() {
    var name = Object.defineProperty ? (function(proto, name) {
        Object.defineProperty(proto[name], 'name', { 
            value: name, configurable: true, writable: false, enumerable: false
        });
    }) : (function(proto, name) {
        proto[name].name = name;
    });
    return function (proto, keys) {
        for (var i = keys.length - 1; i >= 0; i--) {
            name(proto, keys[i])
        }
    };
})();
exports.__esModule = true;
var React = require("react");
var B1 = (function (_super) {
    __extends(B1, _super);
    function B1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B1.prototype.render = function () {
        return <div>hi</div>;
    };
    __names(B1.prototype, ["render"]);
    return B1;
}(React.Component));
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.render = function () {
        // Should be an ok but as of 2.3.3 this will be an error as we will instantiate B1.props to be empty object
        return <B1 {...this.props} x="hi"/>;
    };
    __names(B.prototype, ["render"]);
    return B;
}(React.Component));
