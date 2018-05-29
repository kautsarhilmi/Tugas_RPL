import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LaporkehilanganPage } from '../laporkehilangan/laporkehilangan';
import { LaporpenemuanPage } from '../laporpenemuan/laporpenemuan';

@Component({
  selector: 'page-lapor',
  templateUrl: 'lapor.html',
})
export class LaporPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoLaporkehilanganPage(){
	  this.navCtrl.push(LaporkehilanganPage);
  }
  gotoLaporpenemuanPage(){
	  this.navCtrl.push(LaporpenemuanPage);
  }
}
