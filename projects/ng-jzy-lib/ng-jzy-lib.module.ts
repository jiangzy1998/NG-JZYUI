// 用于管理组件的导入、导出
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertModule } from "ng-jzy-lib/alert";

@NgModule({
    imports:[CommonModule],
    exports:[AlertModule],
    providers:[],
})
export class NgJzyuiLibModule{}

