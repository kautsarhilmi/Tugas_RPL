import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, MenuController, Nav, App, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../provider/data';
import { Http } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { MykehilanganPage } from '../pages/mykehilangan/mykehilangan';
import { MypenemuanPage } from '../pages/mypenemuan/mypenemuan';
import { MykomentarPage } from '../pages/mykomentar/mykomentar';
import { NotifPage } from '../pages/notif/notif';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any;
  data: any;
  pages: Array<{}>;
  //conf: Array<{}>;

  constructor(public app: App, platform: Platform, statusBar: StatusBar, public events: Events,
    splashScreen: SplashScreen, public menu: MenuController, public DataStorage: DataProvider, public http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe('user:logged_in', (user) => {
      //console.log(user);
      this.data = {nim: user.nim, nama: user.nama, username: user.username, email: 
                  user.email, no_hp: user.no_hp};
      console.log(this.data);

      this.pages = [
      { title: 'Edit Profile', component: ProfilePage },
      { title: 'Penemuan saya', component: MypenemuanPage },
      { title: 'Komentar saya', component: MykomentarPage },
      { title: 'Kehilangan saya', component: MykehilanganPage }
      ];
    });

    //buat session
    this.DataStorage.isLogin().then((value) => {
      if(value == true) {
        console.log(this.data);
        this.DataStorage.getData().then((value) => {
          this.data = {nim: value.nim, nama: value.nama, username: value.username,
                      email: value.email, no_hp: value.no_hp};

          this.pages = [
            { title: 'Edit Profile', component: ProfilePage },
            { title: 'Penemuan saya', component: MypenemuanPage },
            { title: 'Komentar saya', component: MykomentarPage },
            { title: 'Kehilangan saya', component: MykehilanganPage }
            ];

          this.rootPage = TabsPage;
        });
      } else{
        this.rootPage = HomePage;
      }
    });
  }

  openPage(page) {
    this.menu.close();
    if(page.title == 'Edit Profile'){
      this.nav.push(page.component, {nim: this.data.nim, nama: this.data.nama, username: this.data.username,
                                    email: this.data.email, no_hp: this.data.no_hp});
    } else {
      this.nav.push(page.component);
    }
  }

  logout() {
    this.menu.close();
    this.DataStorage.logout();
    //this.app.getRootNav().setRoot(MyApp);
    this.nav.push(MyApp);
  }
}
