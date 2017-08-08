//// [superCallInsideObjectLiteralExpression.ts]
class A {
    foo() {
    }
}

class B extends A {
    constructor() {
        var x = {
            x: super()
        }
    }
}

//// [superCallInsideObjectLiteralExpression.js]
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
var A = (function () {
    function A() {
    }
    A.prototype.foo = function () {
    };
    __names(A.prototype, ["foo"]);
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = this;
        var x = {
            x: _this = _super.call(this) || this
        };
        return _this;
    }
    return B;
}(A));
