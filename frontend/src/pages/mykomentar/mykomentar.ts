import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DataProvider } from '../../provider/data';
import { PostdetailPage } from '../postdetail/postdetail';

@Component({
  selector: 'page-mykomentar',
  templateUrl: 'mykomentar.html',
})
export class MykomentarPage {

	comments: Array<{}>;
	mynim: string = "";
	response: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public DataStorage: DataProvider,
  	public http: Http, public alertCtrl: AlertController) {
  	let linkgetmycomments = 'http://localhost/rest_api_php/load_my_comments.php';
  	this.comments = [];

  	this.DataStorage.getData().then(value => {
		this.mynim = value.nim;
	  	this.http.post(linkgetmycomments, JSON.stringify({usernim: this.mynim})).subscribe(data => {
	  		this.response = data.json();
	  		if(this.response.status == "200"){
				console.log(this.response.data);
				if (this.response.status == "200"){
					for (var i=0;i<this.response.data.length;i++) {
			          	//console.log(this.response.data[i]);
			          	var thedatetime = new Date(+this.response.data[i].date_time);
			          	var options = { weekday: 'long', year: 'numeric',
			          	month: 'short', day: 'numeric', hour:"numeric", minute:"numeric" }

						let comments_elem = 
							{judul_post: this.response.data[i].judul, text: this.response.data[i].text,
				          	date_time: thedatetime.toLocaleDateString('id-ID', options),
				          	postid: this.response.data[i].postid};
				        console.log(comments_elem);
				        this.comments.push(comments_elem);
					}
				}
			} else {
				// Kalau komentar tidak ada
	          let conf = this.alertCtrl.create({
	          	title: 'Tidak ada komentar',
	            message: 'Kamu belum pernah memberikan komentar',
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
    console.log('ionViewDidLoad MykomentarPage');
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
