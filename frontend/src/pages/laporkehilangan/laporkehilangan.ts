import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-laporkehilangan',
  templateUrl: 'laporkehilangan.html',
})
export class LaporkehilanganPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaporkehilanganPage');
  }

}
