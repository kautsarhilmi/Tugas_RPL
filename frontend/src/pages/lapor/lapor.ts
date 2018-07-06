import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { LaporkehilanganPage } from '../laporkehilangan/laporkehilangan';
import { LaporpenemuanPage } from '../laporpenemuan/laporpenemuan';
import { NotifPage } from '../notif/notif';

@Component({
  selector: 'page-lapor',
  templateUrl: 'lapor.html',
})
export class LaporPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }
  gotoLaporkehilanganPage(){
	  this.navCtrl.push(LaporkehilanganPage);
  }
  gotoLaporpenemuanPage(){
	  this.navCtrl.push(LaporpenemuanPage);
  }
  gotoNotifPage(){
  this.app.getRootNav().push(NotifPage);
  }
}
