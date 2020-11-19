import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";
import { DemoComponent } from "./demo/demo.component";
import { GesturesComponent } from "./gestures/gestures.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(homeTab:home//demoTab:demo//aboutTab:about/default)",
        pathMatch: "full"
    },

    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "demo", component: DemoComponent, outlet: "demoTab" },
    {
        path: "about",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/about/about.module").then((m) => m.AboutModule),
        outlet: "aboutTab"
    },
    { path: "gestures", loadChildren: () => import("~/app/gestures/gestures.module").then((m) => m.GesturesModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
