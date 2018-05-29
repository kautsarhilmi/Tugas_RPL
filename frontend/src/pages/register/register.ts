import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';

import { HomePage } from '../home/home'
import { MyApp } from '../../app/app.component';
import { DataProvider } from '../../provider/data';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  data:any = {};
  regexpmail = new RegExp(/^[A-Za-z0-9._%+-]+@apps.ipb.ac.id$/);
  regexppass = new RegExp(/^(?=.*?[a-z|0-9]).{8,25}$/);
  regexpnama = new RegExp(/^\w.{1,23}$/);
  regexpuname = new RegExp(/^(([\w._-]?)){1,18}$/);

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController, public http: Http, public DataStorage: DataProvider) {
    this.data.nama = "";
    this.data.username = "";
    this.data.nim = "";
    this.data.password = "";
    this.data.retype= "";
    this.data.email = "";
    this.data.no_hp = "";
    this.data.response = "";
    this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  validcheck(){
    if(this.data.nama === '' || this.data.username === '' || this.data.nim === '' || this.data.password === '' ||
      this.data.repassword === '' || this.data.email === '' || this.data.no_hp === ''){
      let toast = this.toastCtrl.create({
        message: 'Isi semua data field',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if(this.regexpnama.test(this.data.nama) == false) {
       let toast = this.toastCtrl.create({
        message: 'Nama min. 1 karakter dan max. 24 karakter',
        duration: 3000,
        position: 'top'
      }); 
      toast.present();
    } else if(this.regexpuname.test(this.data.username) == false) {
      let toast = this.toastCtrl.create({
        message: 'Username dapat mengandung . _ - dan max. 19 karakter',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if(this.data.password !== this.data.retype) {
      let toast = this.toastCtrl.create({
        message: 'Password tidak sesuai',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if(this.regexpmail.test(this.data.email) == false) {
      let toast = this.toastCtrl.create({
        message: 'Email harus valid dan berdomain @apps.ipb.ac.id',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if(this.regexppass.test(this.data.password) == false) {
      let toast = this.toastCtrl.create({
        message: 'Password harus berjumlah min. 8 karakter',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else{
      this.registeracc();
    }
  }

  registeracc(){
	  let link = 'http://localhost/rest_api_php/create_account.php';
    let registerData = JSON.stringify({nim: this.data.nim, nama: this.data.nama, username: this.data.username,
      email: this.data.email, pw: this.data.password, no_hp: this.data.no_hp});
    //console.log(registerData);
    this.http.post(link, registerData).subscribe(data => {
      //console.log(data)
      let response = data.json();
      //let response = data["_body"];
      console.log(response)
      if(response.status == "200"){
        this.navCtrl.push(HomePage);
        let alert = this.alertCtrl.create({
         title: 'Account Created',
         subTitle: 'Akun berhasil dibuat',
         buttons: ['OK']
      });
        alert.present();
      } else {
          // Kalo salah
          let toast = this.toastCtrl.create({
            message: 'Gagal membuat akun',
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
