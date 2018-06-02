import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, App, Events } from 'ionic-angular';
import { Http } from '@angular/http';

import { MyApp } from '../../app/app.component';
import { DataProvider } from '../../provider/data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  data: any;
  regexppass = new RegExp(/^(?=.*?[a-z|0-9]).{8,25}$/);
  regexpnama = new RegExp(/^\w.{1,23}$/);
  regexpuname = new RegExp(/^(([\w._-]?)){1,18}$/);

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams,
  	public DataStorage: DataProvider, public events: Events,
  	public toastCtrl: ToastController, public alertCtrl: AlertController, public http: Http) {
  	this.data = {nim: navParams.get('nim'), nama: navParams.get('nama'), username: navParams.get('username'),
  				pw: "", retype: "", email: navParams.get('email'), no_hp: navParams.get('no_hp')};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  validCheckForEdit() {
  	if(this.data.nama === '' || this.data.username === '' || this.data.no_hp === ''){
  		let toast = this.toastCtrl.create({
        message: 'Isi field nama, username, dan nomor handphone',
        duration: 3000,
        position: 'top'
      });
      toast.present();
  	} else if(this.regexpnama.test(this.data.nama) == false) {
       let toast = this.toastCtrl.create({
        message: 'Nama min. 2 karakter dan max. 24 karakter',
        duration: 3000,
        position: 'top'
      }); 
      toast.present();
    } else if(this.regexpuname.test(this.data.username) == false) {
      let toast = this.toastCtrl.create({
        message: 'Username min. 2 karakter max. 19 karakter\n(dapat mengandung . _ -)',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else if(this.data.pw !== this.data.retype) {
      let toast = this.toastCtrl.create({
        message: 'Password tidak sesuai',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else{
      if(this.data.pw != "") {
      	if(this.regexppass.test(this.data.pw) == false) {
	      let toast = this.toastCtrl.create({
	        message: 'Password harus berjumlah min. 8 karakter',
	        duration: 3000,
	        position: 'top'
	      });
	      toast.present();
      	} else {
          this.editacc(this.data.pw);
        }
      } else {
        this.editacc(this.data.pw);
      }

      }
  }

  editacc(datapw){
	let link = 'http://localhost/rest_api_php/update_account.php';
	let updateData = JSON.stringify({nim: this.data.nim, nama: this.data.nama, username: this.data.username,
    								  pw: datapw, no_hp: this.data.no_hp}); 
    //console.log(updateData);
    this.http.post(link, updateData).subscribe(data => {
      //console.log(data)
      let response = data.json();
      //let response = data["_body"];
      console.log(response)
      if(response.status == "200"){
        let alert = this.alertCtrl.create({
         title: 'Informasi Akun Terubah',
         subTitle: 'Informasi akunmu telah diperbaharui',
         buttons: ['OK']
      	});
        alert.present();
        this.DataStorage.login({nim: this.data.nim, nama: this.data.nama, username: this.data.username,
	    						email: this.data.email, no_hp: this.data.no_hp});
        this.updateEvent({nim: this.data.nim, nama: this.data.nama, username: this.data.username,
	    						email: this.data.email, no_hp: this.data.no_hp});
        this.app.getRootNav().setRoot(MyApp); //push dari entire app
      } else {
          // Kalo salah
          let toast = this.toastCtrl.create({
            message: 'Gagal mengubah informasi akun',
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }
      }, error => {
        console.log("Oooops!");
      });

  }

  updateEvent(userupdate) {
  	console.log('User updated data!');
  	console.log(userupdate);
  	this.events.publish('user:logged_in', userupdate);
  }

}
