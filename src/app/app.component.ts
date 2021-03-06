import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'DashboardPage';

  pages: Array<{ title: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home' },
      { title: 'Gallery' },
      { title: 'PortFolio' },
      { title: 'Contact' },
      { title: 'About' },
      { title: 'Login' },
      { title: 'Upload' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    console.log('page', page)
    switch (page) {
      case 'Home':
        this.nav.push('DashboardPage')
        break;
      case 'PortFolio':
        break;
      case 'Contact':
        this.nav.push('ContactPage');
        break;
      case 'About':
        this.nav.push('AboutPage')
        break;
      case 'Login':
        this.nav.push('LoginPage')
        break;
      case 'Upload':
        this.nav.push('UploadPage')
    }

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
  }
}
