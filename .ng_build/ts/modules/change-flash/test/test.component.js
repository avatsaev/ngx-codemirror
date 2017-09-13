import { Component } from '@angular/core';
export class TestComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-test',
                template: `
    <p>
      --test works!--
    </p>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
TestComponent.ctorParameters = () => [];
function TestComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TestComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    TestComponent.ctorParameters;
}
//# sourceMappingURL=test.component.js.map