//// [tests/cases/compiler/mergedDeclarations6.ts] ////

//// [a.ts]
export class A {
    protected protected: any;

    protected setProtected(val: any) {
        this.protected = val;
    }
}

//// [b.ts]
import {A} from './a';

declare module "./a" {
    interface A { }
}

export class B extends A {
    protected setProtected() {

    }
}

//// [a.js]
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
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var A = (function () {
        function A() {
        }
        A.prototype.setProtected = function (val) {
            this.protected = val;
        };
        __names(A.prototype, ["setProtected"]);
        return A;
    }());
    exports.A = A;
});
//// [b.js]
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
define(["require", "exports", "./a"], function (require, exports, a_1) {
    "use strict";
    exports.__esModule = true;
    var B = (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        B.prototype.setProtected = function () {
        };
        __names(B.prototype, ["setProtected"]);
        return B;
    }(a_1.A));
    exports.B = B;
});
