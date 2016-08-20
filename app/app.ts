import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {HomePage} from './pages/home/home';
import {ContactPage} from './pages/contact/contact';
import {AboutPage} from './pages/about/about';

@Component({
  templateUrl: 'build/app.html',
  providers: [NavController]
})
export class MyApp {
  @ViewChild('nav') nav : NavController;
  private rootPage: any;
  private pages: any[];

  constructor(private platform: Platform, private menu: MenuController) {
    this.menu = menu;
    this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Contact', component: ContactPage },
        { title: 'About', component: AboutPage }
    ];
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close()
    // Using this.nav.setRoot() causes
    // Tabs to not show!
    this.nav.push(page.component);
  };
}

ionicBootstrap(MyApp);
