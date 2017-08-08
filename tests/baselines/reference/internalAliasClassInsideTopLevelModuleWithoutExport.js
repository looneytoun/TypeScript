//// [internalAliasClassInsideTopLevelModuleWithoutExport.ts]
export module x {
    export class c {
        foo(a: number) {
            return a;
        }
    }
}

import xc = x.c;
export var cProp = new xc();
var cReturnVal = cProp.foo(10);

//// [internalAliasClassInsideTopLevelModuleWithoutExport.js]
"use strict";
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
var x;
(function (x) {
    var c = (function () {
        function c() {
        }
        c.prototype.foo = function (a) {
            return a;
        };
        __names(c.prototype, ["foo"]);
        return c;
    }());
    x.c = c;
})(x = exports.x || (exports.x = {}));
var xc = x.c;
exports.cProp = new xc();
var cReturnVal = exports.cProp.foo(10);


//// [internalAliasClassInsideTopLevelModuleWithoutExport.d.ts]
export declare module x {
    class c {
        foo(a: number): number;
    }
}
import xc = x.c;
export declare var cProp: xc;
