(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-jzy-lib/alert')) :
        typeof define === 'function' && define.amd ? define('ng-jzy-lib', ['exports', '@angular/core', '@angular/common', 'ng-jzy-lib/alert'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-jzy-lib'] = {}, global.ng.core, global.ng.common, global['ng-jzy-lib'].alert));
}(this, (function (exports, i0, common, alert) { 'use strict';

        function _interopNamespace(e) {
                if (e && e.__esModule) return e;
                var n = Object.create(null);
                if (e) {
                        Object.keys(e).forEach(function (k) {
                                if (k !== 'default') {
                                        var d = Object.getOwnPropertyDescriptor(e, k);
                                        Object.defineProperty(n, k, d.get ? d : {
                                                enumerable: true,
                                                get: function () {
                                                        return e[k];
                                                }
                                        });
                                }
                        });
                }
                n['default'] = e;
                return Object.freeze(n);
        }

        var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

        // 用于管理组件的导入、导出
        var NgJzyuiLibModule = /** @class */ (function () {
            function NgJzyuiLibModule() {
            }
            return NgJzyuiLibModule;
        }());
        NgJzyuiLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: NgJzyuiLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
        NgJzyuiLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: NgJzyuiLibModule, imports: [common.CommonModule], exports: [alert.AlertModule] });
        NgJzyuiLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: NgJzyuiLibModule, providers: [], imports: [[common.CommonModule], alert.AlertModule] });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: NgJzyuiLibModule, decorators: [{
                    type: i0.NgModule,
                    args: [{
                            imports: [common.CommonModule],
                            exports: [alert.AlertModule],
                            providers: [],
                        }]
                }] });

        /**
         * Generated bundle index. Do not edit.
         */

        exports.NgJzyuiLibModule = NgJzyuiLibModule;

        Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-jzy-lib.umd.js.map
