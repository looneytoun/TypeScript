//// [mergedInheritedClassInterface.ts]
interface BaseInterface {
    required: number;
    optional?: number;
}

class BaseClass {
    baseMethod() { }
    baseNumber: number;
}

interface Child extends BaseInterface {
    additional: number;
}

class Child extends BaseClass {
    classNumber: number;
    method() { }
}

interface ChildNoBaseClass extends BaseInterface {
    additional2: string;
}
class ChildNoBaseClass {
    classString: string;
    method2() { }
}
class Grandchild extends ChildNoBaseClass {
}

// checks if properties actually were merged
var child : Child;
child.required;
child.optional;
child.additional;
child.baseNumber;
child.classNumber;
child.baseMethod();
child.method();

var grandchild: Grandchild;
grandchild.required;
grandchild.optional;
grandchild.additional2;
grandchild.classString;
grandchild.method2();


//// [mergedInheritedClassInterface.js]
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
var BaseClass = (function () {
    function BaseClass() {
    }
    BaseClass.prototype.baseMethod = function () { };
    __names(BaseClass.prototype, ["baseMethod"]);
    return BaseClass;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.method = function () { };
    __names(Child.prototype, ["method"]);
    return Child;
}(BaseClass));
var ChildNoBaseClass = (function () {
    function ChildNoBaseClass() {
    }
    ChildNoBaseClass.prototype.method2 = function () { };
    __names(ChildNoBaseClass.prototype, ["method2"]);
    return ChildNoBaseClass;
}());
var Grandchild = (function (_super) {
    __extends(Grandchild, _super);
    function Grandchild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Grandchild;
}(ChildNoBaseClass));
// checks if properties actually were merged
var child;
child.required;
child.optional;
child.additional;
child.baseNumber;
child.classNumber;
child.baseMethod();
child.method();
var grandchild;
grandchild.required;
grandchild.optional;
grandchild.additional2;
grandchild.classString;
grandchild.method2();
