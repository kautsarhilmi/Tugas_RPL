import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  gotoMenuPage(){
	  this.navCtrl.push(TabsPage);
  }

}
