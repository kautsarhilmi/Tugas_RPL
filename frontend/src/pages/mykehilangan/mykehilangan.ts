import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { PostdetailPage } from '../postdetail/postdetail';
import { DataProvider } from '../../provider/data';

@Component({
  selector: 'page-mykehilangan',
  templateUrl: 'mykehilangan.html',
})
export class MykehilanganPage {
  posts: Array<{}>;
  response: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
  	public toastCtrl: ToastController, public alertCtrl: AlertController, public DataStorage: DataProvider) {

  	let linkgetposts = 'http://localhost/rest_api_php/load_my_posts.php';
  	this.posts = [];
  	this.response = {};

  	this.DataStorage.getData().then((value) => {
	  	this.http.post(linkgetposts, JSON.stringify({usernim: value.nim, jenis: "kehilangan"})).subscribe(data => {
	  		//console.log(data);
	  		this.response = data.json();
	  		//console.log(this.response);
	  		if(this.response.status == "200"){
	          console.log(this.response.data);
	          for (var i=0;i<this.response.data.length;i++) {
	          	  //console.log(this.response.data[i]);

	          	  var thedatetime = new Date(+this.response.data[i].date_time);
	          	  var options = { weekday: 'long', year: 'numeric',
	          	  month: 'short', day: 'numeric', hour:"numeric", minute:"numeric" }

	          	  let posts_elem =
	          	  {postid: this.response.data[i].postid, usernim: this.response.data[i].usernim, 
	              nama: this.response.data[i].nama, jenis: this.response.data[i].jenis,
	              judul: this.response.data[i].judul, deskripsi: this.response.data[i].deskripsi,
	          	  date_time: thedatetime.toLocaleDateString('id-ID', options),
	          	  comment_count: this.response.data[i].count};
	          	  this.posts.push(posts_elem);
		          //console.log(this.posts[i]);
	          	  
		        }//console.log(this.posts);
	        } else {
	          // Kalau post tidak ada
	          let conf = this.alertCtrl.create({
	          	title: 'Tidak ada post',
	            message: 'Belum ada post saat ini. Silakan coba lagi nanti',
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
    console.log('ionViewDidLoad MykehilanganPage');
  }

  gotoPostDetail(refpost) {
    this.navCtrl.push(PostdetailPage, refpost);
  }

}
