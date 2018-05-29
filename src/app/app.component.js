var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../provider/data';
import { Http } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
var MyApp = /** @class */ (function () {
    function MyApp(app, platform, statusBar, splashScreen, menu, DataStorage, http) {
        var _this = this;
        this.app = app;
        this.menu = menu;
        this.DataStorage = DataStorage;
        this.http = http;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.DataStorage.getData().then(function (value) {
            _this.data = value;
            console.log(_this.data);
            _this.nim = _this.data.nim;
            _this.nama =
            ;
        });
        //buat session
        this.DataStorage.isLogin().then(function (value) {
            _this.login_state = value;
            console.log(_this.login_state);
            if (value) {
                console.log("eaa");
                _this.rootPage = TabsPage;
            }
            else {
                console.log("eoo");
                _this.rootPage = HomePage;
            }
        });
        this.pages = [
            { title: 'Profile', component: HomePage },
            { title: 'Penemuan saya', component: HomePage },
            { title: 'Kehilangan saya', component: HomePage }
        ];
    }
    MyApp_1 = MyApp;
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.push(page.component);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.DataStorage.logout();
        this.app.getRootNav().setRoot(MyApp_1);
        //this.nav.push(HomePage);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = MyApp_1 = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [App, Platform, StatusBar,
            SplashScreen, MenuController, DataProvider, Http])
    ], MyApp);
    return MyApp;
    var MyApp_1;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map