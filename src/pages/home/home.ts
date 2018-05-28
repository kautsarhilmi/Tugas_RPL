import { Component } from '@angular/core';
import { NavController, ToastController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

import { MyApp } from '../../app/app.component';
import { DataProvider } from '../../provider/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any = {};

  constructor(public app: App, public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public DataStorage: DataProvider) {
    this.data.username = "";
    this.data.password = "";
    this.data.response = "";
    this.http = http;
  }
  
  gotoRegisterPage(){
	  this.navCtrl.push(RegisterPage);
  }

  login(){
	  let link = 'http://localhost/rest_api_php/login_account.php';
    let loginData = JSON.stringify({username: this.data.username, pw: this.data.password});
    //console.log(loginData)
    this.http.post(link, loginData).subscribe(data => {
      //console.log(data)
      let response = data.json();
      //let response = data["_body"];
      console.log(response)
      if(response.status == "200"){
          // console.log(response.data);
          this.DataStorage.login(response.data, "user");
          this.app.getRootNav().setRoot(MyApp);
          //this.navCtrl.setRoot(TabsPage);
        } else {
          // Kalau akun tidak ada
          let toast = this.toastCtrl.create({
            message: 'Incorrect username or password',
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      }, error => {
        console.log("Oooops!");
      });
  }
}
