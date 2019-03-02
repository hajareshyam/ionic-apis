import { Component } from "@angular/core";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { Platform } from "@ionic/angular";
import { AppAvailability } from "@ionic-native/app-availability/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    private socialSharing: SocialSharing,
    private appAvailability: AppAvailability,
    private platform: Platform
  ) { }
}
