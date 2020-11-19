import { Component, OnInit } from "@angular/core";
import { SnackBar } from "nativescript-snackbar";
import * as dialogs from "@nativescript/core/ui/dialogs";

@Component({
    selector: "Demo",
    templateUrl: "./demo.component.html"
})
export class DemoComponent implements OnInit {
    snackbar = new SnackBar();

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    onAction(action, dialog) {
        let actionString = "";
        switch (action) {
            case "tap": actionString = "tapped"; break;
            case "doubleTap": actionString = "double tapped"; break;
            case "longPress": actionString = "long pressed"; break;
            case "pan": actionString = "panned"; break;
            case "pinch": actionString = "pinched"; break;
            case "rotation": actionString = "rotated"; break;
        }
        actionString = "You've " + actionString + " me!";

        if (dialog) {
            dialogs.action({
                message: actionString,
                // cancelButtonText: "Cancel text",
                actions: ["Dismiss"]
            }).then(result => {
                console.log("Dialog result: " + result);
                if(result == "Option1"){
                    //Do action1
                }else if(result == "Option2"){
                    //Do action2
                }
            });
        } else {
            this.snackbar.simple(actionString, 'red', '#fff', 1, false).then(result => console.log('Simple Snackbar:', result));
        }
    }

    onTap() {
    }

    onDoubleTap() {
        
    }

    onLongPress() {}

    onSwipe($event) {}

    onPan() {}

    onPinch() {}
    
    onRotation() {}

    click() {
        console.log("Clicked!!!");
    }
}
