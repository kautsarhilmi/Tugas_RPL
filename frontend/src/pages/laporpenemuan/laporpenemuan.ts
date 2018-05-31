import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http';

import{ PenemuanPage } from '../penemuan/penemuan';
import { DataProvider } from '../../provider/data';

@Component({
  selector: 'page-laporpenemuan',
  templateUrl: 'laporpenemuan.html',
})
export class LaporpenemuanPage {
  data: any = {usernim: "", judul: "", deskripsi: "", jenis: "penemuan"};
  image64: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public http: Http,
  	public toastCtrl: ToastController, public alertCtrl: AlertController, public DataStorage: DataProvider) { 
  	this.image64 = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
  	this.DataStorage.getData().then((value) => {
  		this.data.usernim = value.nim;
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaporpenemuanPage');
  }

  validCheck() {
  	if(this.data.judul === '' || this.data.deskripsi === ''){
      let toast = this.toastCtrl.create({
        message: 'Isi judul dan deskripsi',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    } else {
    	this.lapor();
    }
  }

  lapor() {
  	let link = 'http://localhost/rest_api_php/post_a_post.php';

    let konfirmasi = this.alertCtrl.create({
      title: 'Konfirmasi laporan',
    message: 'Apakah Anda yakin ingin post laporan ini?',
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
        var thetime = new Date(Date.now());
      var utctime = thetime.getTime();
      let postData = JSON.stringify({usernim: this.data.usernim, judul: this.data.judul,
      deskripsi: this.data.deskripsi, jenis: this.data.jenis, date_time: utctime});
      console.log(postData)
        if(this.data.judul.length <= 24){
          this.http.post(link, postData).subscribe(data => {
          console.log(data)
          let response = data.json();
          //let response = data["_body"];
          console.log(response)
          if(response.status == "200"){
            let toast = this.toastCtrl.create({
              message: 'Laporan kehilangan berhasil dipost!',
              duration: 3000,
              position: 'top'
            });
            toast.present()
            this.navCtrl.push(PenemuanPage);
            //this.app.getRootNav().setRoot(MyApp);
            //this.navCtrl.setRoot(TabsPage);
          } else {
            // Kalau gagal post
            let toast = this.toastCtrl.create({
              message: 'Gagal membuat laporan. Silakan coba lagi',
              duration: 3000,
              position: 'top'
            });
            toast.present();
          }

        }, error => {
        console.log(error);
      });
      } else { //kalau judul lebih dari 24 karakter
        let toast = this.toastCtrl.create({
              message: 'Field judul tidak boleh lebih dari 24 karakter',
              duration: 3000,
              position: 'top'
            });
            toast.present();
      }
        console.log('Ya clicked');
      }
      }
    ]
    });
   konfirmasi.present(); 
  }

  getImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
  	console.log("camera bisa")
    //let image64 = 'data:image/jpeg;base64,' + imageData;
    console.log(this.image64)
  }, (err) => {
    console.log(err);
  });
  }

}