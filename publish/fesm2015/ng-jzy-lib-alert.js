import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.1", type: AlertComponent, selector: "jzy-alert", inputs: { content: "content" }, ngImport: i0, template: "<p>alert works!{{ content }}</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jzy-alert',
                    templateUrl: './alert.component.html',
                    styleUrls: ['./alert.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { content: [{
                type: Input
            }] } });

class AlertModule {
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: AlertModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AlertComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [AlertComponent]
                }]
        }] });

// 用于导出module、组件、service等，是对外暴露的入口

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, AlertModule };
//# sourceMappingURL=ng-jzy-lib-alert.js.map
