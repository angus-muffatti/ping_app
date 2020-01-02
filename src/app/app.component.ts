import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ping-app",
    templateUrl: "./app.component.html"
})

const firebase = require("nativescript-plugin-firebase");

export class AppComponent implements OnInit { 

    ngOnInit() {
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
        }).then(
            ()=> {
                console.log("firebase.init done");
            },
            error => {
                console.log("`firebase.init error: ${error}`");
            }
            
        );
    }

}
