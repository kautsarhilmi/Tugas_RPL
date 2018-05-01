import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

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
}
