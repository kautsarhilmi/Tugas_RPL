import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-laporpenemuan',
  templateUrl: 'laporpenemuan.html',
})
export class LaporpenemuanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaporpenemuanPage');
  }

}
