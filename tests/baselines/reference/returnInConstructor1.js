//// [returnInConstructor1.ts]
class A {
    foo() { }
    constructor() {
        return;
    }
}

class B {
    foo() { }
    constructor() {
        return 1; // error
    }
}

class C {
    foo() { }
    constructor() {
        return this;
    }
}

class D {
    foo() { }
    constructor() {
        return "test"; // error
    }
}

class E {
    public foo: number;
    constructor() {
        return { foo: 1 };
    }
}

class F {
    public foo: string;
    constructor() {
        return { foo: 1 }; //error
    }
}

class G {
    private test: number;
    public test1() { }
    foo() { }
    constructor() {
        this.test = 2;
    }
}

class H extends F {
    constructor() {
        super();
        return new G(); //error
    }
}

class I extends G {
    constructor() {
        super();
        return new G();
    }
}



//// [returnInConstructor1.js]
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
        return;
    }
    A.prototype.foo = function () { };
    __names(A.prototype, ["foo"]);
    return A;
}());
var B = (function () {
    function B() {
        return 1; // error
    }
    B.prototype.foo = function () { };
    __names(B.prototype, ["foo"]);
    return B;
}());
var C = (function () {
    function C() {
        return this;
    }
    C.prototype.foo = function () { };
    __names(C.prototype, ["foo"]);
    return C;
}());
var D = (function () {
    function D() {
        return "test"; // error
    }
    D.prototype.foo = function () { };
    __names(D.prototype, ["foo"]);
    return D;
}());
var E = (function () {
    function E() {
        return { foo: 1 };
    }
    return E;
}());
var F = (function () {
    function F() {
        return { foo: 1 }; //error
    }
    return F;
}());
var G = (function () {
    function G() {
        this.test = 2;
    }
    G.prototype.test1 = function () { };
    G.prototype.foo = function () { };
    __names(G.prototype, ["test1", "foo"]);
    return G;
}());
var H = (function (_super) {
    __extends(H, _super);
    function H() {
        var _this = _super.call(this) || this;
        return new G(); //error
    }
    return H;
}(F));
var I = (function (_super) {
    __extends(I, _super);
    function I() {
        var _this = _super.call(this) || this;
        return new G();
    }
    return I;
}(G));
