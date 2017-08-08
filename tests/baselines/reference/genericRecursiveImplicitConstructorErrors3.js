//// [genericRecursiveImplicitConstructorErrors3.ts]
module TypeScript {
    export class MemberName <A,B,C>{
        static create<A,B,C>(arg1: any, arg2?: any, arg3?: any): MemberName {
        }
    }
}
 
module TypeScript {
    export class PullSymbol <A,B,C>{
        public type: PullTypeSymbol = null;
    }
    export class PullTypeSymbol <A,B,C>extends PullSymbol {
        private _elementType: PullTypeSymbol = null;
        public toString<A,B,C>(scopeSymbol?: PullSymbol, useConstraintInName?: boolean) {
            var s = this.getScopedNameEx(scopeSymbol, useConstraintInName).toString();
            return s;
        }
        public getScopedNameEx<A,B,C>(scopeSymbol?: PullSymbol, useConstraintInName?: boolean, getPrettyTypeName?: boolean, getTypeParamMarkerInfo?: boolean) {
            if (this.isArray()) {
                var elementMemberName = this._elementType ?
                (this._elementType.isArray() || this._elementType.isNamedTypeSymbol() ?
                this._elementType.getScopedNameEx(scopeSymbol, false, getPrettyTypeName, getTypeParamMarkerInfo) :
                this._elementType.getMemberTypeNameEx(false, scopeSymbol, getPrettyTypeName)) : 1
                return MemberName.create(elementMemberName, "", "[]");
            }
        }
    }
}
 


//// [genericRecursiveImplicitConstructorErrors3.js]
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
var TypeScript;
(function (TypeScript) {
    var MemberName = (function () {
        function MemberName() {
        }
        MemberName.create = function (arg1, arg2, arg3) {
        };
        return MemberName;
    }());
    TypeScript.MemberName = MemberName;
})(TypeScript || (TypeScript = {}));
(function (TypeScript) {
    var PullSymbol = (function () {
        function PullSymbol() {
            this.type = null;
        }
        return PullSymbol;
    }());
    TypeScript.PullSymbol = PullSymbol;
    var PullTypeSymbol = (function (_super) {
        __extends(PullTypeSymbol, _super);
        function PullTypeSymbol() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._elementType = null;
            return _this;
        }
        PullTypeSymbol.prototype.toString = function (scopeSymbol, useConstraintInName) {
            var s = this.getScopedNameEx(scopeSymbol, useConstraintInName).toString();
            return s;
        };
        PullTypeSymbol.prototype.getScopedNameEx = function (scopeSymbol, useConstraintInName, getPrettyTypeName, getTypeParamMarkerInfo) {
            if (this.isArray()) {
                var elementMemberName = this._elementType ?
                    (this._elementType.isArray() || this._elementType.isNamedTypeSymbol() ?
                        this._elementType.getScopedNameEx(scopeSymbol, false, getPrettyTypeName, getTypeParamMarkerInfo) :
                        this._elementType.getMemberTypeNameEx(false, scopeSymbol, getPrettyTypeName)) : 1;
                return TypeScript.MemberName.create(elementMemberName, "", "[]");
            }
        };
        __names(PullTypeSymbol.prototype, ["toString", "getScopedNameEx"]);
        return PullTypeSymbol;
    }(PullSymbol));
    TypeScript.PullTypeSymbol = PullTypeSymbol;
})(TypeScript || (TypeScript = {}));
