//// [errorRecoveryInClassDeclaration.ts]
class C {
    public bar() {
        var v = foo(
            public blaz() {}
            );
    }
}

//// [errorRecoveryInClassDeclaration.js]
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
var C = (function () {
    function C() {
    }
    C.prototype.bar = function () {
        var v = foo(public, blaz(), {});
    };
    __names(C.prototype, ["bar"]);
    return C;
}());
