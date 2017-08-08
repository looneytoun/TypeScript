//// [file.tsx]
import React = require('react');

type TextProps = { editable: false }
               | { editable: true, onEdit: (newText: string) => void };

class TextComponent extends React.Component<TextProps, {}> {
    render() {
        return <span>Some Text..</span>;
    }
}

// OK
const textPropsFalse: TextProps = {
    editable: false
};

let y1 = <TextComponent {...textPropsFalse} />

const textPropsTrue: TextProps = {
    editable: true,
    onEdit: () => {}
};

let y2 = <TextComponent {...textPropsTrue} />

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
            value: name, configurable: true
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
var TextComponent = (function (_super) {
    __extends(TextComponent, _super);
    function TextComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextComponent.prototype.render = function () {
        return <span>Some Text..</span>;
    };
    __names(TextComponent.prototype, ["render"]);
    return TextComponent;
}(React.Component));
// OK
var textPropsFalse = {
    editable: false
};
var y1 = <TextComponent {...textPropsFalse}/>;
var textPropsTrue = {
    editable: true,
    onEdit: function () { }
};
var y2 = <TextComponent {...textPropsTrue}/>;
