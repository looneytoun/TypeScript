//// [stringIndexerConstrainsPropertyDeclarations2.ts]
// String indexer providing a constraint of a user defined type

class A {
    foo(): string { return ''; }
}

class B extends A {
    bar(): string { return ''; }
}

class Foo {
    [x: string]: A;
    a: A; // ok
    b: B; // ok
    c: number; // error
    d: string; // error
}

interface Foo2 {
    [x: string]: A;
    a: A; // ok
    b: B; // ok
    c: number; // error
    d: string; // error
}

var a: {
    [x: string]: A;
    a: A; // ok
    b: B; // ok
    c: number; // error
    d: string; // error
};

// error
var b: { [x: string]: A } = {
    a: A,
    b: B
}

//// [stringIndexerConstrainsPropertyDeclarations2.js]
// String indexer providing a constraint of a user defined type
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
    A.prototype.foo = function () { return ''; };
    __names(A.prototype, ["foo"]);
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.bar = function () { return ''; };
    __names(B.prototype, ["bar"]);
    return B;
}(A));
var Foo = (function () {
    function Foo() {
    }
    return Foo;
}());
var a;
// error
var b = {
    a: A,
    b: B
};
