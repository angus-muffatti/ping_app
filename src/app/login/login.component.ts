import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component ({
    selector: "ping-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
    isLoggingIn = true;
    isLoading = false;
    
    constructor(private page: Page) {
        
    }

    // Hides the action bar on login screen
    ngOnInit() {
        this.page.actionBarHidden = true;
    }
}