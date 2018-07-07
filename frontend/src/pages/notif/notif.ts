import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DataProvider } from '../../provider/data';
import { PostdetailPage } from '../postdetail/postdetail';


@Component({
  selector: 'page-notif',
  templateUrl: 'notif.html',
})
export class NotifPage {

  notifications: Array<{}>;
  response: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http,
  	public DataStorage: DataProvider, public alertCtrl: AlertController) {
  	let linkloadnotifications = 'http://localhost/rest_api_php/load_notifications.php';
  	this.notifications = [];
  	this.response = {};

  	this.DataStorage.getData().then((value) => {
  		console.log(value);
  		this.http.post(linkloadnotifications, JSON.stringify({usernim: value.nim})).subscribe(data => {
  			this.response = data.json();
  			console.log(this.response);

  			if (this.response.status == "200") {
  				console.log(this.response.data);
		        for (var i=0;i<this.response.data.length;i++) {
		        	// console.log(this.response.data[i]);

			        var thedatetime = new Date(+this.response.data[i].date_time);
			        var options = { weekday: 'long', year: 'numeric',
			        month: 'short', day: 'numeric', hour:"numeric", minute:"numeric" }

			        let notifications_elem =
			        {postid: this.response.data[i].postid, issuer_nama: this.response.data[i].nama,
			        jenis: this.response.data[i].jenis,
			        judul: this.response.data[i].judul, date_time: thedatetime.toLocaleDateString('id-ID', options)};
			        this.notifications.push(notifications_elem);
		    	}
  			} else {
  				// Kalau notif tidak ada
	          let conf = this.alertCtrl.create({
	          	title: 'Tidak ada notifikasi',
	            message: 'Belum ada notifikasi saat ini',
	            buttons: [
				{
			  		text: 'OK',
			  		handler: () => {
			    	console.log('OK clicked');
			  		}
				}]
	          });
	          conf.present();
  			}
  		});
  	});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifPage');
  }

  gotoAPostDetail(thepostid) {
  	let linkgetpost = 'http://localhost/rest_api_php/load_a_post.php';
  	
  	this.http.post(linkgetpost, JSON.stringify({postid: thepostid})).subscribe(data => {
  		let hasil = data.json();

  		if (hasil.status = "200") {
	  		var thedatetime = new Date(+this.response.data.date_time);
	  	    var options = { weekday: 'long', year: 'numeric',
	  	    month: 'short', day: 'numeric', hour:"numeric", minute:"numeric" }
	  
	  	    let post =
	  	    {postid: hasil.data.postid, usernim: hasil.data.usernim,
	        nama: hasil.data.nama, email: hasil.data.email,
	        no_hp: hasil.data.no_hp, jenis: hasil.data.jenis,
	        judul: hasil.data.judul, deskripsi: hasil.data.deskripsi,
	  	    date_time: thedatetime.toLocaleDateString('id-ID', options),
	        comment_count: hasil.data.count};

	        this.navCtrl.push(PostdetailPage, post);
    	} else {
    		// Kalau post tidak ada
          let conf = this.alertCtrl.create({
          	title: 'Post tidak ditemukan',
            message: 'Post tidak ada atau sudah dihapus',
            buttons: [
			{
		  		text: 'OK',
		  		handler: () => {
		    	console.log('OK clicked');
		  		}
			}]
          });
          conf.present();
    	}
  	});
  }

}
