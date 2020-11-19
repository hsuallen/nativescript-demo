import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { DemoRoutingModule } from "./demo-routing.module";
import { DemoComponent } from "./demo.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DemoRoutingModule,
    ],
    declarations: [
        DemoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DemoModule { }
