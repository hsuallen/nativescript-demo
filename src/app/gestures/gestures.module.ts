import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { GesturesRoutingModule } from "./gestures-routing.module";
import { GesturesComponent } from "./gestures.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        GesturesRoutingModule
    ],
    declarations: [
        GesturesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GesturesModule { }
