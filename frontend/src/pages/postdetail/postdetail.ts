import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, App } from 'ionic-angular';
import { Http } from '@angular/http';

import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../provider/data';

@Component({
  selector: 'page-postdetail',
  templateUrl: 'postdetail.html',
})
export class PostdetailPage {

  post: any = {};
  mynim: string = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public DataStorage: DataProvider,
  	public http: Http, public toastCtrl: ToastController, public alertCtrl: AlertController, public app: App) {
  	this.post = {postid: this.navParams.get('postid'), usernim: this.navParams.get('usernim'),
	              nama: this.navParams.get('nama'), jenis: this.navParams.get('jenis'),
	              judul: this.navParams.get('judul'), deskripsi: this.navParams.get('deskripsi'),
	          	  date_time: this.navParams.get('date_time')};

	this.DataStorage.getData().then(value => {
		this.mynim = value.nim;
	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostdetailPage');
  }

  deletePost() {
  	let link = 'http://localhost/rest_api_php/delete_post.php';

	let konfirmasi = this.alertCtrl.create({
	title: 'Konfirmasi laporan',
	message: 'Apakah Anda yakin ingin hapus laporan ini?',
	buttons: [
	{
	  text: 'Tidak',
	  handler: () => {
	    console.log('Tidak clicked');
	  }
	},

	{
	  text: 'Ya',
	  handler: () => {
	  	this.http.post(link, JSON.stringify({postid: this.post.postid})).subscribe(data => {
	  		let response = data.json();
	  		console.log(response);
	  		let toast = this.toastCtrl.create({
			    message: 'Post berhasil dihapus',
			    duration: 3000,
			    position: 'top'
			});
			toast.present();
			console.log('Ya clicked');
			if(this.post.jenis == "penemuan") {
				this.app.getRootNav().setRoot(TabsPage, {opentab: 0});
				//this.navCtrl.pop(); //backnya cached (tidak update)
			}else {
				this.app.getRootNav().setRoot(TabsPage, {opentab: 2});
				//this.navCtrl.pop(); //backnya cached (tidak update)
			}

	  	});
	  }
	}

	]
	});
	konfirmasi.present();

  }

}
