var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { DataProvider } from '../../provider/data';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(app, navCtrl, navParams, toastCtrl, alertCtrl, http, DataStorage) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.DataStorage = DataStorage;
        this.data = {};
        this.regexpmail = new RegExp(/^[A-Za-z0-9._%+-]+@apps.ipb.ac.id$/);
        this.regexppass = new RegExp(/^(?=.*?[a-z|0-9]).{8,25}$/);
        this.regexpnama = new RegExp(/^\w.{1,23}$/);
        this.regexpuname = new RegExp(/^(([\w._-]?)){1,18}$/);
        this.data.nama = "";
        this.data.username = "";
        this.data.nim = "";
        this.data.password = "";
        this.data.retype = "";
        this.data.email = "";
        this.data.no_hp = "";
        this.data.response = "";
        this.http = http;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.validcheck = function () {
        if (this.data.nama === '' || this.data.username === '' || this.data.nim === '' || this.data.password === '' || this.data.repassword === '' || this.data.email === '' || this.data.no_hp === '') {
            var toast = this.toastCtrl.create({
                message: 'Isi semua data field',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.regexpnama.test(this.data.nama) == false) {
            var toast = this.toastCtrl.create({
                message: 'Nama min. 1 karakter dan max. 24 karakter',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.regexpuname.test(this.data.username) == false) {
            var toast = this.toastCtrl.create({
                message: 'Username dapat mengandung . _ - dan max. 19 karakter',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.data.password !== this.data.retype) {
            var toast = this.toastCtrl.create({
                message: 'Password tidak sesuai',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.regexpmail.test(this.data.email) == false) {
            var toast = this.toastCtrl.create({
                message: 'Email harus valid dan berdomain @apps.ipb.ac.id',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.regexppass.test(this.data.password) == false) {
            var toast = this.toastCtrl.create({
                message: 'Password harus berjumlah min. 8 karakter',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            this.registeracc();
        }
    };
    RegisterPage.prototype.registeracc = function () {
        var _this = this;
        var link = 'http://localhost/rest_api_php/create_account.php';
        var registerData = JSON.stringify({ nim: this.data.nim, nama: this.data.nama, username: this.data.username, pw: this.data.password, email: this.data.email, no_hp: this.data.no_hp });
        this.http.post(link, registerData).subscribe(function (data) {
            //console.log(data)
            //let response = data.json();
            var response = data["_body"];
            console.log(response);
            if (response.status == "200") {
                console.log(response.data);
                _this.navCtrl.push(HomePage);
                var alert_1 = _this.alertCtrl.create({
                    title: 'Account Created',
                    subTitle: 'Akun berhasil dibuat',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                // Kalo salah
                var toast = _this.toastCtrl.create({
                    message: 'Gagal membuat akun',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    RegisterPage = __decorate([
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
        }),
        __metadata("design:paramtypes", [App, NavController, NavParams, ToastController, AlertController, Http, DataProvider])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map