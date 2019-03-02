import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.page.html',
  styleUrls: ['./social-sharing.page.scss'],
})
export class SocialSharingPage implements OnInit {

  constructor(
    private socialSharing: SocialSharing,
    private appAvailability: AppAvailability,
    private platform: Platform
  ) { }

  ngOnInit() {
  }

  handleSocial() {
    console.log("INNN");
    var options = {
      message: "share this", // not supported on some apps (Facebook, Instagram)
      subject: "the subject", // fi. for email
      files: ["", ""], // an array of filenames either locally or remotely
      url: "https://www.website.com/foo/#bar?a=b",
      chooserTitle: "Pick an app", // Android only, you can override the default share sheet title,
      appPackageName: "com.whatsapp" // Android only, you can provide id of the App you want to share with
    };

    let app;
    if (this.platform.is("ios")) {
      app = "twitter://";
    } else if (this.platform.is("android")) {
      app = "com.whatsapp";
    }

    this.appAvailability.check(app).then(data => {
      console.log(app + ' is available');
      this.socialSharing
        .shareViaWhatsApp("test Message", "", "")
        .then(data => {
          console.log("Shared via SharePicker" + data);
        })
        .catch(err => {
          console.log("Was not shared via SharePicker" + err);
        });
    })
      .catch(err => {
        console.log(app + ' is NOT available')
      });
  }

}
