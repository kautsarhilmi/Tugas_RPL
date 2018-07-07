import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, App, Content } from 'ionic-angular';
import { Http } from '@angular/http';
import { Clipboard } from '@ionic-native/clipboard';

import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../provider/data';

@Component({
  selector: 'page-postdetail',
  templateUrl: 'postdetail.html',
})
export class PostdetailPage {
  @ViewChild(Content) content: Content;

  post: any = {};
  comments: Array<{}>;
  mynim: string = "";
  response: any = {};
  comment_text: string = "";
  regexpcomment = new RegExp(/^\w.{1,300}$/);
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public DataStorage: DataProvider,
  	public http: Http, public toastCtrl: ToastController, public alertCtrl: AlertController, public app: App,
  	public clipboard: Clipboard) {
  	let linkgetcomments = 'http://localhost/rest_api_php/load_comments.php';
  	this.post = {postid: this.navParams.get('postid'), usernim: this.navParams.get('usernim'),
	              nama: this.navParams.get('nama'), email: this.navParams.get('email'),
	              no_hp: this.navParams.get('no_hp'), jenis: this.navParams.get('jenis'),
	              judul: this.navParams.get('judul'), deskripsi: this.navParams.get('deskripsi'),
	          	  date_time: this.navParams.get('date_time')};
	this.comments = [];

	console.log(this.post);
	this.DataStorage.getData().then(value => {
		this.mynim = value.nim;
		this.http.post(linkgetcomments, JSON.stringify({postid: this.post.postid})).subscribe(data => {
			this.response = data.json();
			console.log(this.response.data);
			if (this.response.status == "200"){
				for (var i=0;i<this.response.data.length;i++) {
		          	//console.log(this.response.data[i]);
		          	var thedatetime = new Date(+this.response.data[i].date_time);
		          	var options = { weekday: 'long', year: 'numeric',
		          	month: 'short', day: 'numeric', hour:"numeric", minute:"numeric" }

					let comments_elem = 
						{usernim: this.response.data[i].usernim, 
			            nama: this.response.data[i].nama, text: this.response.data[i].text,
			          	date_time: thedatetime.toLocaleDateString('id-ID', options)};
			        this.comments.push(comments_elem);
				}
			}
		});
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

  copyDesc(text) {
  	console.log(text);
  	this.clipboard.copy(text);
  	let toast = this.toastCtrl.create({
	    message: 'Deskripsi disalin ke clipboard',
	    duration: 3000,
	    position: 'bottom'
	});
	toast.present();
  }

  sendComment() {
  	let linkpostcomment = 'http://localhost/rest_api_php/post_a_comment.php';
  	if(this.comment_text != "") {
  		if(this.regexpcomment.test(this.comment_text) == false) {
  			let toast = this.toastCtrl.create({
			    message: 'Komentar min. 2 karakter dan max. 300 karakter',
			    duration: 3000,
			    position: 'top'
			});
			toast.present();
  		} else {
  			var thetime = new Date(Date.now());
			var utctime = thetime.getTime();
		  	this.http.post(linkpostcomment, JSON.stringify({postid: this.post.postid, usernim: this.mynim,
		  		text: this.comment_text, date_time: utctime})).subscribe(data => {
		  		let response = data.json();
		  		if (response.status == "200") {
		  			let linkgetcomments = 'http://localhost/rest_api_php/load_comments.php';
		  			this.http.post(linkgetcomments, 
		  				JSON.stringify({postid: this.post.postid})).subscribe(data => {
						this.response = data.json();
						console.log(this.response.data);
						if (this.response.status == "200"){
			        	  	var thedatetime = new Date(+this.response.data[this.response.data.length-1].date_time);
			        	  	var options = { weekday: 'long', year: 'numeric',
			        	  	month: 'short', day: 'numeric', hour:"numeric", minute:"numeric" }

							let comments_elem = 
								{usernim: this.response.data[this.response.data.length-1].usernim, 
				        	    nama: this.response.data[this.response.data.length-1].nama,
				        	    text: this.response.data[this.response.data.length-1].text,
				        	  	date_time: thedatetime.toLocaleDateString('id-ID', options),
				        	  	commentid: this.response.data[this.response.data.length-1].commentid};
				        	  	this.comments.push(comments_elem);

			        	  	let linkcreatenotif = 'http://localhost/rest_api_php/create_notification.php';
			        	  	console.log("test");
			        	  	this.http.post(linkcreatenotif, JSON.stringify(
			        	  		{commentid: comments_elem.commentid,
			        	  		usernim: this.post.usernim,
	  							issuer_usernim: this.mynim})).subscribe(data => {
			        	  		
			        	  		console.log(data);
			        	  		this.comment_text="";
			        	  		this.content.scrollToBottom();
			        	  	});
						}
					});
		  		}
		  	});
	  	}	
  	}
  }

}
