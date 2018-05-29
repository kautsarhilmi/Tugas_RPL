import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, MenuController, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../provider/data';
import { Http } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any;
  data:any = {};
  pages: Array<{title: string, component: any}>;

  constructor(public app: App, platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, public menu: MenuController, public DataStorage: DataProvider, public http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.DataStorage.getData().then((value) => {
      this.data.nim= value.nim;
      this.data.nama= value.nama;
      this.data.username= value.username;
      this.data.email= value.email;
      this.data.no_hp= value.no_hp;
      console.log(this.data);
      console.log(this.data.nama);
    });

    //buat session
    this.DataStorage.isLogin().then((value) => {
      if(value) {
        this.rootPage = TabsPage;
      } else{
        this.rootPage = HomePage;
      }
    });

    this.pages = [
      { title: 'Profile', component: HomePage },
      { title: 'Penemuan saya', component: HomePage },
      { title: 'Komentar saya', component: HomePage },
      { title: 'Kehilangan saya', component: HomePage }
    ];
  }

  openPage(page) {
    this.menu.close();
    this.nav.push(page.component);
  }

  logout() {
    this.menu.close();
    this.DataStorage.logout();
    //this.app.getRootNav().setRoot(MyApp);
    this.nav.push(MyApp);
  }
}
