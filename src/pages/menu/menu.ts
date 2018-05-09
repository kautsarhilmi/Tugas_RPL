import { Component } from '@angular/core';
import { PenemuanPage } from '../penemuan/penemuan';
import { NavController,NavParams } from 'ionic-angular';
import { KehilanganPage } from '../kehilangan/kehilangan'
import { LaporPage } from '../lapor/lapor';



@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');

}
}
