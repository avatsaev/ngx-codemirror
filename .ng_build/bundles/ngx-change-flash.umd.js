(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-change-flash'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var ValueChangeFlashDirective = /** @class */ (function () {
    function ValueChangeFlashDirective() {
    }
    return ValueChangeFlashDirective;
}());
ValueChangeFlashDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[valueChangeFlash]'
            },] },
];
/**
 * @nocollapse
 */
ValueChangeFlashDirective.ctorParameters = function () { return []; };
var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    /**
     * @return {?}
     */
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-test',
                template: "\n    <p>\n      --test works!--\n    </p>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
TestComponent.ctorParameters = function () { return []; };
var ChangeFlashModule = /** @class */ (function () {
    function ChangeFlashModule() {
    }
    return ChangeFlashModule;
}());
ChangeFlashModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [ValueChangeFlashDirective, TestComponent],
                exports: [ValueChangeFlashDirective, TestComponent]
            },] },
];
/**
 * @nocollapse
 */
ChangeFlashModule.ctorParameters = function () { return []; };

exports.ChangeFlashModule = ChangeFlashModule;
exports.ɵa = ValueChangeFlashDirective;
exports.ɵb = TestComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-change-flash.umd.js.map
