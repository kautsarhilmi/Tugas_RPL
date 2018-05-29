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
import { NavController, ToastController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { RegisterPage } from '../register/register';
import { MyApp } from '../../app/app.component';
import { DataProvider } from '../../provider/data';
var HomePage = /** @class */ (function () {
    function HomePage(app, navCtrl, toastCtrl, http, DataStorage) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.DataStorage = DataStorage;
        this.data = {};
        this.data.username = "";
        this.data.password = "";
        this.data.response = "";
        this.http = http;
    }
    HomePage.prototype.gotoRegisterPage = function () {
        this.navCtrl.push(RegisterPage);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        var link = 'http://localhost/rest_api_php/login_account.php';
        var loginData = JSON.stringify({ username: this.data.username, pw: this.data.password });
        //console.log(loginData)
        this.http.post(link, loginData).subscribe(function (data) {
            console.log(data);
            var response = data.json();
            //let response = data["_body"];
            console.log(response);
            if (response.status == "200") {
                console.log(response.data);
                _this.DataStorage.login(response.data, "user");
                // this.navCtrl.push(MyApp);
                _this.app.getRootNav().setRoot(MyApp);
                //this.navCtrl.setRoot(TabsPage);
            }
            else {
                // Kalau akun tidak ada
                var toast = _this.toastCtrl.create({
                    message: 'Incorrect username or password',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [App, NavController, ToastController, Http,
            DataProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map