import { Component } from '@angular/core';
import { PenemuanPage } from '../penemuan/penemuan';
import { NavController,NavParams } from 'ionic-angular';
import { KehilanganPage } from '../kehilangan/kehilangan'

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  gotoPenemuanPage(){
	  this.navCtrl.push(PenemuanPage);
  }
  
  gotoKehilanganPage(){
	  this.navCtrl.push(KehilanganPage);
  }
}
