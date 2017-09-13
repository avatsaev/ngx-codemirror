import { Component, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var ValueChangeFlashDirective = /** @class */ (function () {
    function ValueChangeFlashDirective() {
    }
    return ValueChangeFlashDirective;
}());
ValueChangeFlashDirective.decorators = [
    { type: Directive, args: [{
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
    { type: Component, args: [{
                selector: 'app-test',
                template: "\n    <p>\n      --/test works!|--\n    </p>\n  ",
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ValueChangeFlashDirective, TestComponent],
                exports: [ValueChangeFlashDirective, TestComponent]
            },] },
];
/**
 * @nocollapse
 */
ChangeFlashModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ChangeFlashModule, ValueChangeFlashDirective as ɵa, TestComponent as ɵb };
//# sourceMappingURL=ngx-change-flash.es5.js.map
