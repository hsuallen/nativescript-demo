import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { GesturesComponent } from "../gestures/gestures.component";

import { DemoComponent } from "./demo.component";

const routes: Routes = [
    { path: "default", component: DemoComponent },
    { path: "gestures", loadChildren: () => import("~/app/gestures/gestures.module").then((m) => m.GesturesModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DemoRoutingModule { }
