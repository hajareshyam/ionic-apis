import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.getToken().then(token => {
        console.log(token);
      });

      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
          this.router.navigate([data.landing_page]);
        } else {
          console.log('Received in foreground');
          // this.router.navigate([data.landing_page]);
          // Schedule a single notification
         
          this.localNotifications.getAll().then(data => {
            console.log("Local Notification");
            console.log(data);
           if(data.length){
            this.localNotifications.schedule([{
              id: data.length + 1,
              text: 'Single ILocalNotification ' + data.length,
              sound: 'default',
              data: {
                landing_page: 'notification'
              }
            }]);
           }else{
            this.localNotifications.schedule([{
              id: data.length + 1,
              text: 'Single ILocalNotification',
              sound: 'default',
              data: {
                landing_page: 'notification'
              }
            }]);
           }
          }).catch(error =>{
            console.log(error);
          });

          this.localNotifications.on('click').subscribe(()=>{
            console.log("Notification Subscribed")
            this.router.navigate([data.landing_page]);
          })
        }
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });
    });
  }
}
