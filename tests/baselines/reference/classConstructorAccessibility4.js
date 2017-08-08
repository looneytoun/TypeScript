//// [classConstructorAccessibility4.ts]
class A {
    private constructor() { }

    method() {
        class B {
            method() {
                new A(); // OK
            }
        }

        class C extends A { // OK
        }
    }
}

class D {
    protected constructor() { }

    method() {
        class E {
            method() {
                new D(); // OK
            }
        }

        class F extends D { // OK
        }
    }
}

//// [classConstructorAccessibility4.js]
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
    A.prototype.method = function () {
        var B = (function () {
            function B() {
            }
            B.prototype.method = function () {
                new A(); // OK
            };
            __names(B.prototype, ["method"]);
            return B;
        }());
        var C = (function (_super) {
            __extends(C, _super);
            function C() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return C;
        }(A));
    };
    __names(A.prototype, ["method"]);
    return A;
}());
var D = (function () {
    function D() {
    }
    D.prototype.method = function () {
        var E = (function () {
            function E() {
            }
            E.prototype.method = function () {
                new D(); // OK
            };
            __names(E.prototype, ["method"]);
            return E;
        }());
        var F = (function (_super) {
            __extends(F, _super);
            function F() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return F;
        }(D));
    };
    __names(D.prototype, ["method"]);
    return D;
}());


//// [classConstructorAccessibility4.d.ts]
declare class A {
    private constructor();
    method(): void;
}
declare class D {
    protected constructor();
    method(): void;
}
