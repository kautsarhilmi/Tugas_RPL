import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	username : string;
	password : string;

  constructor(public navCtrl: NavController) {

  }
  
  gotoRegisterPage(){
	  this.navCtrl.push(RegisterPage);
  }
  gotoMenuPage(){
	  this.navCtrl.push(TabsPage);
  }
}
