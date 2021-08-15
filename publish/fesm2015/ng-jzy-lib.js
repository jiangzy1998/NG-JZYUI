import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ng-jzy-lib/alert';

// 用于管理组件的导入、导出
class NgJzyuiLibModule {
}
NgJzyuiLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: NgJzyuiLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgJzyuiLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: NgJzyuiLibModule, imports: [CommonModule], exports: [AlertModule] });
NgJzyuiLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: NgJzyuiLibModule, providers: [], imports: [[CommonModule], AlertModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0, type: NgJzyuiLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [AlertModule],
                    providers: [],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NgJzyuiLibModule };
//# sourceMappingURL=ng-jzy-lib.js.map
