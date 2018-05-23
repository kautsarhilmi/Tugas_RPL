import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../provider/data'

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  rootPage:any;
  pages: Array<{title: string, component: any}>;

  constructor(public app: App, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController, public DataStorage: DataProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    //buat session
    this.DataStorage.isLogin().then((value) => {
      if(value){
        this.rootPage = TabsPage;
      }else{
        this.rootPage = HomePage;
      }
    });

    this.pages = [
      { title: 'Profile', component: HomePage },
      { title: 'Penemuan saya', component: HomePage },
      { title: 'Kehilangan saya', component: HomePage }
    ];
  }

  openPage(page) {
    this.menu.close();
    this.nav.push(page.component);
  }
}
