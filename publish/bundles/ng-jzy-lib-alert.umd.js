(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-jzy-lib/alert', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ng-jzy-lib'] = global['ng-jzy-lib'] || {}, global['ng-jzy-lib'].alert = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

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

    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
        }
        AlertComponent.prototype.ngOnInit = function () {
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: AlertComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.1", type: AlertComponent, selector: "jzy-alert", inputs: { content: "content" }, ngImport: i0__namespace, template: "<p>alert works!{{ content }}</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'jzy-alert',
                        templateUrl: './alert.component.html',
                        styleUrls: ['./alert.component.css']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { content: [{
                    type: i0.Input
                }] } });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [common.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: AlertModule, imports: [[
                common.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.1", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [AlertComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [AlertComponent]
                    }]
            }] });

    // 用于导出module、组件、service等，是对外暴露的入口

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AlertComponent = AlertComponent;
    exports.AlertModule = AlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-jzy-lib-alert.umd.js.map
